import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyTabs from '../components/PropertyTabs';
import ImageGallery from '../components/ImageGallery';

const PropertyDetails = ({ properties, onAddFav }) => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) return <div>Property not found</div>;

  return (
    <div className="property-details-page">
      <div className="details-header">
        <h1>{property.location}</h1>
        <h2>£{property.price.toLocaleString()}</h2>
        <button onClick={() => onAddFav(property)}>Add to Favourites</button>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <ImageGallery mainImage={property.picture} />
      </div>

      {/* Tabs Section */}
      <div className="tabs-section">
        <PropertyTabs 
          description={property.description} 
          floorPlan="images/floorplan_placeholder.jpg"
          location={property.location} 
        />
      </div>
    </div>
  );
};

export default PropertyDetails;