import React from 'react';

const FavouriteButton = ({ onClick, isFav }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        background: 'white',
        border: '1px solid #e2e8f0',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
      }}
    >
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill={isFav ? "#FF0000" : "none"} 
        stroke={isFav ? "#FF0000" : "#64748b"} 
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