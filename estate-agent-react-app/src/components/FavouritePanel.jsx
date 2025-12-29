import React from 'react';

const FavouritesPanel = ({ favourites, onRemove, onClear }) => {
  if (favourites.length === 0) return <p>No properties saved yet.</p>;

  return (
    <div className="favourites-list">
      <ul>
        {favourites.map(fav => (
          <li key={fav.id}>
            <span>{fav.location}</span>
            <button onClick={() => onRemove(fav.id)} className="remove-btn">X</button>
          </li>
        ))}
      </ul>
      <button onClick={onClear} className="clear-btn">Clear All</button>
    </div>
  );
};

export default FavouritesPanel;