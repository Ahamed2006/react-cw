import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteButton from './FavouriteButton';

const PropertyCard = ({ property, onAddFav, isFav }) => {
  return (
    <div className="property-card" draggable onDragStart={(e) => e.dataTransfer.setData("property", JSON.stringify(property))}>
      <div style={{ position: 'relative', padding: '10px' }}>
        <img src={property.images[0]} alt={property.type} style={{ width: '100%', height: '220px', borderRadius: '18px', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '25px', left: '25px', background: 'rgba(255,255,255,0.9)', padding: '5px 15px', borderRadius: '10px', fontWeight: 'bold' }}>
          £{property.price.toLocaleString()}
        </div>
      </div>
      <div style={{ padding: '0 20px 20px 20px' }}>
        <h3 style={{ margin: '10px 0 5px 0' }}>{property.type}</h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{property.location} • {property.bedrooms} Bed</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <Link to={`/property/${property.id}`} className="view-btn" style={{ flex: 1, textAlign: 'center', background: '#0f172a', color: 'white', padding: '10px', borderRadius: '12px', textDecoration: 'none' }}>View</Link>
          <FavouriteButton isFav={isFav} onClick={() => onAddFav(property)} />
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;