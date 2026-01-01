import React from 'react';
import PropertyCardMini from './PropertyCardMini';

const FavouriteList = ({ favourites, onRemove }) => {
  return (
    <div className="fav-list">
      {favourites.map(fav => (
        <PropertyCardMini key={fav.id} property={fav} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default FavouriteList;