import React from 'react';
import PropertyCard from './PropertyCard';

const ResultsList = ({ properties, onAddFav, favourites }) => {
  // Defensive check: if no properties exist, show a message
  if (!properties || properties.length === 0) {
    return (
      <div className="no-results-container">
        <h3 className="no-results-title">No properties match your search.</h3>
        <p className="no-results-text">Try changing your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div className="results-grid">
      {properties.map(property => {
        // Check if this specific property is already in favourites
        const isFav = favourites.some(f => f.id === property.id);
        
        return (
          <PropertyCard 
            key={property.id} 
            property={property} 
            onAddFav={onAddFav} 
            isFav={isFav} 
          />
        );
      })}
    </div>
  );
};

export default ResultsList;