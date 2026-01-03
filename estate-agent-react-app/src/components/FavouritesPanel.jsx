import React from 'react';
import FavouriteList from './FavouriteList';

const FavouritesPanel = ({ favourites, onRemoveFav, onClearFav, onDropProp }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("property");
    if (data) onDropProp(JSON.parse(data));
  };

  return (
    <div 
      className="fav-panel" 
      onDragOver={(e) => e.preventDefault()} 
      onDrop={handleDrop}
    >
      <h3 className="fav-panel-title">Favourites ({favourites.length})</h3>
      <p className="fav-panel-subtitle">Drag a property card here to add it.</p>
      
      <FavouriteList favourites={favourites} onRemove={onRemoveFav} />
      
      {favourites.length > 0 && (
        <button className="fav-clear-all-btn" onClick={onClearFav}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default FavouritesPanel;