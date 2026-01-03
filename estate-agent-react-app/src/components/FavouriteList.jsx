import React from 'react';
import PropertyCardMini from './PropertyCardMini';

const FavouriteList = ({ favourites, onRemove }) => {
  return (
    <div className="fav-list-container">
      {favourites.length > 0 ? (
        favourites.map(fav => (
          <PropertyCardMini key={fav.id} property={fav} onRemove={onRemove} />
        ))
      ) : (
        <p className="no-favs-message">No properties in your shortlist yet.</p>
      )}
    </div>
  );
};

export default FavouriteList;