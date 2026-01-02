import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import PropertyTabs from '../components/PropertyTabs';
import FavouriteButton from '../components/FavouriteButton';

const PropertyDetails = ({ properties, onAddFav, favourites }) => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  if (!property) return <div style={{ padding: '50px', textAlign: 'center' }}>Property not found</div>;

  const isFav = favourites.some(f => f.id === property.id);

  return (
    <div className="details-page" style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem' }}>{property.type}</h1>
              <p style={{ color: '#64748b', fontSize: '1.2rem' }}>{property.location}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h2 style={{ color: '#0f172a', margin: 0 }}>£{property.price.toLocaleString()}</h2>
              <FavouriteButton isFav={isFav} onClick={() => onAddFav(property)} />
            </div>
        </div>
        <ImageGallery images={property.images} />
        <div style={{ marginTop: '40px', background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
            <PropertyTabs property={property} />
        </div>
    </div>
  );
};
export default PropertyDetails;