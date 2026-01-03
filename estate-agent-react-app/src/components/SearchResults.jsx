import React from 'react';
import PropertyCard from './PropertyCard';

const SearchResults = ({ properties, onAddFav, favourites }) => {
  if (properties.length === 0) {
    return (
      <div className="empty-results">
        <p>No properties found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="results-grid">
      {properties.map(p => (
        <PropertyCard 
            key={p.id} 
            property={p} 
            onAddFav={onAddFav} 
            isFav={favourites.some(f => f.id === p.id)} 
        />
      ))}
    </div>
  );
};

export default SearchResults;