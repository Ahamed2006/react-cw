import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchPage from './pages/SearchPage';
import PropertyDetails from './pages/PropertyDetails';
import HomePage from './pages/HomePage';
import './App.css';

// Import data
import data from './data/properties.json';

function App() {
  // Lift favourites state up here so it persists across pages
  const [favourites, setFavourites] = useState([]);

  const handleAddFavourite = (property) => {
    // Prevent duplicates [cite: 129]
    if (!favourites.some(fav => fav.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const handleRemoveFavourite = (propertyId) => {
    setFavourites(favourites.filter(prop => prop.id !== propertyId));
  };
  
  const handleClearFavourites = () => {
    setFavourites([]);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/search" 
            element={
              <SearchPage 
                properties={data.properties} 
                favourites={favourites}
                onAddFav={handleAddFavourite}
                onRemoveFav={handleRemoveFavourite}
                onClearFav={handleClearFavourites}
              />
            } 
          />
          <Route 
            path="/property/:id" 
            element={
              <PropertyDetails 
                properties={data.properties}
                favourites={favourites} 
                onAddFav={handleAddFavourite} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
