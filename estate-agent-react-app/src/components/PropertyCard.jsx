import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  
  const handleDragStart = (e) => {
    // Send the entire property object as a JSON string
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  return (
    <div 
      className="property-card" 
      draggable="true" 
      onDragStart={handleDragStart}
    >
      <img src={property.picture} alt={property.type} style={{width:'100%'}} />
      <div className="card-details">
        <h4>{property.location}</h4>
        <p>{property.type} - {property.bedrooms} Beds</p>
        <p className="price">£{property.price.toLocaleString()}</p>
        <p>{property.description.substring(0, 100)}...</p>
        <Link to={`/property/${property.id}`} className="view-btn">View Details</Link>
      </div>
    </div>
  );
};

export default PropertyCard;