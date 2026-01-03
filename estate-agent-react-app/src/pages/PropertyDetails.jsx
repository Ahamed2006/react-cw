import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import PropertyTabs from '../components/PropertyTabs';
import FavouriteButton from '../components/FavouriteButton';

const PropertyDetails = ({ properties, onAddFav, favourites }) => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) return <div className="error-message">Property not found</div>;

  const isFav = favourites.some(f => f.id === property.id);

  return (
    <div className="property-details-view">
      <div className="details-page">
        {/* Navigation / Back Button */}
        <Link to="/" className="back-link">← Back to Search</Link>

        <div className="details-header">
          <div className="header-info">
            <h1>{property.type} in {property.location}</h1>
            <p className="location-text">{property.location}</p>
          </div>
          <div className="header-actions">
            <span className="price">£{property.price.toLocaleString()}</span>
            <FavouriteButton isFav={isFav} onClick={() => onAddFav(property)} />
          </div>
        </div>
        
        <ImageGallery images={property.images} />
        
        <div className="details-content">
            <PropertyTabs property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;