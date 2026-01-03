import React from 'react';

const FavouriteButton = ({ onClick, isFav }) => {
  return (
    <button 
      onClick={onClick} 
      // We use a template literal to add the 'active' class if isFav is true
      className={`fav-icon-btn ${isFav ? 'active' : ''}`}
      title={isFav ? "Remove from Favourites" : "Save to Favourites"}
    >
      <svg 
        className="heart-svg"
        viewBox="0 0 24 24" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
};

export default FavouriteButton;