import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import PropertyTabs from '../components/PropertyTabs';
import FavouriteButton from '../components/FavouriteButton';

const PropertyDetails = ({ properties, onAddFav, favourites }) => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) return <div>Property not found</div>;

  const isFav = favourites.some(f => f.id === property.id);

  return (
    <div className="details-page">
        <div className="details-header">
            <h1>{property.type} in {property.location}</h1>
            <span className="price">£{property.price.toLocaleString()}</span>
            <FavouriteButton isFav={isFav} onClick={() => onAddFav(property)} />
        </div>
        
        <ImageGallery images={property.images} />
        
        <div className="details-content">
            <PropertyTabs property={property} />
        </div>
    </div>
  );
};
export default PropertyDetails;