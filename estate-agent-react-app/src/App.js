import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PropertyDetails from './pages/PropertyDetails';
import ContactPage from './pages/ContactPage';
import FavouritesPage from './pages/FavouritesPage'; // 1. Import the new page
import data from './data/properties.json';
import './App.css';

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
      {/* 2. Pass the count to NavBar for the heart icon badge */}
      <NavBar favouritesCount={favourites.length} />
      
      <div className="content-wrap">
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
          {/* 3. New Route for the dedicated Favourites Page */}
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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;