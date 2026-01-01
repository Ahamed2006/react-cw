import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteButton from './FavouriteButton';

const PropertyCard = ({ property, onAddFav, isFav }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  return (
    <div className="property-card" draggable onDragStart={handleDragStart}>
      <img src={property.images[0]} alt={property.type} />
      <div className="card-info">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>{property.type} - {property.bedrooms} Beds</p>
        <p>{property.location}</p>
        <Link to={`/property/${property.id}`} className="view-btn">View Details</Link>
        <FavouriteButton isFav={isFav} onClick={() => onAddFav(property)} />
      </div>
    </div>
  );
};
export default PropertyCard;