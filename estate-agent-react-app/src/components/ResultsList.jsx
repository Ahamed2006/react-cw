import React from 'react';
import PropertyCard from './PropertyCard';

const ResultsList = ({ properties, onAddFav, favourites }) => {
  // Defensive check: if no properties exist, show a message
  if (!properties || properties.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        <h3>No properties match your search.</h3>
        <p>Try changing your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div className="results-list" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: '20px',
      padding: '20px 0'
    }}>
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