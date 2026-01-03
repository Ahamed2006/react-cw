import React from 'react';

const PropertyCardMini = ({ property, onRemove }) => {
  return (
    <div className="fav-item-card">
      <img 
        src={property.images[0]} 
        className="fav-item-img" 
        alt={property.type} 
      />
      
      <div className="fav-item-details">
        <div className="fav-item-price">
            £{property.price.toLocaleString()}
        </div>
        <div className="fav-item-type">{property.type}</div>
      </div>

      <button 
        className="fav-item-remove-btn"
        onClick={() => onRemove(property.id)} 
        title="Remove from list"
      >
        ×
      </button>
    </div>
  );
};

export default PropertyCardMini;