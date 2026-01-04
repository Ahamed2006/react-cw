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

// Custom component to handle NOT_FOUND / 404 errors locally
const NotFound = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'white' }}>
    <h1 style={{ color: '#1a1a1a' }}>404 - Page Not Found</h1>
    <p>We couldn't find the page you're looking for.</p>
    <a href="/" style={{ 
      display: 'inline-block', 
      marginTop: '20px', 
      padding: '10px 20px', 
      backgroundColor: '#facc15', 
      color: '#000', 
      textDecoration: 'none', 
      borderRadius: '5px',
      fontWeight: 'bold' 
    }}>
      Back to Home
    </a>
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
      
      {/* Wrapper to ensure content pushes footer down */}
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

          {/* This route catches any undefined paths to prevent Deployment404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;