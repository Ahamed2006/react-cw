import React from 'react';
import PropertyCard from '../components/PropertyCard';
import './FavouritesPage.css';

const FavouritesPage = ({ favourites, onRemoveFav, onClearFav }) => {
  return (
    <div className="fav-wrapper-clean">
      <div className="fav-container-inner">
        
        <header className="fav-modern-header">
          <div className="title-stack">
            <h1 className="main-heading">My Favourites</h1>
          </div>
          
          <div className="header-meta">
            <p className="count-text">{favourites.length} Properties Saved</p>
            {favourites.length > 0 && (
              <button className="clear-btn-modern" onClick={onClearFav}>
                Clear All
              </button>
            )}
          </div>
        </header>

        {favourites.length === 0 ? (
          <div className="empty-state-modern">
            <h2>Your list is empty</h2>
            <p>Explore our listings and click the heart icon to save properties.</p>
            <a href="/search" className="browse-btn-modern">Browse Properties</a>
          </div>
        ) : (
          <div className="property-grid-modern">
            {favourites.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onAddFav={() => onRemoveFav(property.id)} 
                isFav={true} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;