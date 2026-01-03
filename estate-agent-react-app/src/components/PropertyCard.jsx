import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteButton from './FavouriteButton';

const PropertyCard = ({ property, onAddFav, isFav }) => {
  return (
    <div 
      className="property-card" 
      draggable 
      onDragStart={(e) => e.dataTransfer.setData("property", JSON.stringify(property))}
    >
      <div className="card-image-wrapper">
        <img 
          src={property.images[0]} 
          alt={property.type} 
          className="card-main-img" 
        />
        <div className="price-badge">
          £{property.price.toLocaleString()}
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{property.type}</h3>
        <p className="card-subtitle">
          {property.location} • {property.bedrooms} Bed
        </p>
        
        <div className="card-actions">
          <Link to={`/property/${property.id}`} className="view-details-btn">
            View
          </Link>
          <FavouriteButton isFav={isFav} onClick={() => onAddFav(property)} />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;