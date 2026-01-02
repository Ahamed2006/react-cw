import React from 'react';
import FavouriteList from './FavouriteList';

const FavouritesPanel = ({ favourites, onRemoveFav, onClearFav, onDropProp }) => {
  return (
    <div className="fav-panel" onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("property");
      if (data) onDropProp(JSON.parse(data));
    }}>
      <h3 style={{ marginBottom: '5px' }}>Favourites ({favourites.length})</h3>
      <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '20px' }}>Drag a property card here to add it.</p>
      
      <FavouriteList favourites={favourites} onRemove={onRemoveFav} />
      
      {favourites.length > 0 && (
        <button onClick={onClearFav} style={{ width: '100%', marginTop: '15px', background: 'none', border: '1px solid #fee2e2', color: '#ef4444', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}>Clear All</button>
      )}
    </div>
  );
};
export default FavouritesPanel;