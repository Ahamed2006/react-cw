import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import ResultsList from '../components/ResultsList';
import FavouritesPanel from '../components/FavouritesPanel';
import { filterProperties } from '../utils/filterProperties';
import './sitebar.css'; // Assuming this handles your layout

const SearchPage = ({ properties, favourites, onAddFav, onRemoveFav, onClearFav }) => {
  const [filteredProps, setFilteredProps] = useState(properties);

  const handleSearch = (criteria) => {
    const results = filterProperties(properties, criteria);
    setFilteredProps(results);
  };

  // Drag and Drop Logic for the "Drop Zone" (Favourites Panel)
  const handleDrop = (e) => {
    e.preventDefault();
    const propertyData = e.dataTransfer.getData("property");
    if (propertyData) {
      const property = JSON.parse(propertyData);
      onAddFav(property);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div className="search-page-container">
      <div className="search-sidebar">
        <SearchForm onSearch={handleSearch} />
        
        {/* Favourites Panel acting as Drop Zone */}
        <div 
          className="favourites-zone"
          onDrop={handleDrop} 
          onDragOver={handleDragOver}
          style={{ border: '2px dashed #ccc', padding: '10px', marginTop: '20px' }}
        >
          <h3>Favourites (Drag here)</h3>
          <FavouritesPanel 
            favourites={favourites} 
            onRemove={onRemoveFav} 
            onClear={onClearFav}
          />
        </div>
      </div>

      <div className="search-results">
        <ResultsList properties={filteredProps} />
      </div>
    </div>
  );
};

export default SearchPage;