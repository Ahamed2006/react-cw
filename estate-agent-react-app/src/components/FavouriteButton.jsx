import React from 'react';

const FavouriteButton = ({ onClick, isFav }) => {
  return (
    <button onClick={onClick} className={`fav-btn ${isFav ? 'active' : ''}`}>
      {isFav ? '❤️ Saved' : '🤍 Save'}
    </button>
  );
};
export default FavouriteButton;