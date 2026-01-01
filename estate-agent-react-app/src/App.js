import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PropertyDetails from './pages/PropertyDetails';
import ContactPage from './pages/ContactPage';
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
      <NavBar />
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