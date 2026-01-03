import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import PropertyTabs from '../components/PropertyTabs';
import FavouriteButton from '../components/FavouriteButton';

const PropertyDetails = ({ properties, onAddFav, favourites }) => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  
  if (!property) return <div className="not-found">Property not found</div>;

  const isFav = favourites.some(f => f.id === property.id);

  return (
    <div className="property-details-view">
      <div className="details-container">
          <div className="details-header">
              <div className="header-left">
                <h1 className="property-title">{property.type} in {property.location}</h1>
                <p className="property-location-subtitle">{property.location}</p>
              </div>
              <div className="header-right">
                <h2 className="property-price-large">£{property.price.toLocaleString()}</h2>
                <FavouriteButton isFav={isFav} onClick={() => onAddFav(property)} />
              </div>
          </div>

          <ImageGallery images={property.images} />

          <div className="details-content-tabs">
              <PropertyTabs property={property} />
          </div>
      </div>
    </div>
  );
};

export default PropertyDetails;