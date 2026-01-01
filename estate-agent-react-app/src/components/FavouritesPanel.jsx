import React from 'react';
import FavouriteList from './FavouriteList'; // <--- This must match the file name

const FavouritesPanel = ({ favourites, onRemoveFav, onClearFav, onDropProp }) => {
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("property");
    if (data) {
      onDropProp(JSON.parse(data));
    }
  };

  return (
    <div 
      className="fav-panel" 
      onDragOver={handleDragOver} 
      onDrop={handleDrop}
      style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px', minHeight: '300px', border: '2px dashed #dee2e6' }}
    >
      <h3>❤️ Favourites</h3>
      <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
        {favourites.length === 0 ? "Drag properties here to save them" : `${favourites.length} saved properties`}
      </p>
      
      <FavouriteList favourites={favourites} onRemove={onRemoveFav} />
      
      {favourites.length > 0 && (
        <button 
          onClick={onClearFav} 
          style={{ marginTop: '15px', width: '100%', padding: '10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default FavouritesPanel;