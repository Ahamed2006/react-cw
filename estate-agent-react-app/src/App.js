import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PropertyDetails from './pages/PropertyDetails';
import ContactPage from './pages/ContactPage';
import FavouritesPage from './pages/FavouritesPage';
import data from './data/properties.json';
import './App.css';

// A simple component to handle 404 errors
const NotFound = () => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The resource you are looking for does not exist.</p>
    <a href="/" style={{ color: '#facc15', fontWeight: 'bold' }}>Return to Home</a>
  </div>
);

function App() {
  const [favourites, setFavourites] = useState([]);

  const handleAddFav = (property) => {
    if (!favourites.some(fav => fav.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const handleRemoveFav = (id) => {
    setFavourites(favourites.filter(fav => fav.id !== id));
  };

  const handleClearFav = () => setFavourites([]);

  return (
    <div className="app-container">
      <NavBar favouritesCount={favourites.length} />
      
      {/* The main tag helps with the "bottom gap" fix in CSS */}
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/search" 
            element={
              <SearchPage 
                properties={data.properties} 
                favourites={favourites}
                onAddFav={handleAddFav}
              />
            } 
          />
          <Route 
            path="/favourites" 
            element={
              <FavouritesPage 
                favourites={favourites} 
                onRemoveFav={handleRemoveFav} 
                onClearFav={handleClearFav} 
              />
            } 
          />
          <Route 
            path="/property/:id" 
            element={
              <PropertyDetails 
                properties={data.properties} 
                favourites={favourites}
                onAddFav={handleAddFav} 
              />
            } 
          />
          <Route path="/contact" element={<ContactPage />} />

          {/* FIX: Catch-all route to resolve 404 NOT_FOUND */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;