import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import FavouritesPanel from '../components/FavouritesPanel';
import { filterProperties } from '../utils/filterProperties';
import './sitebar.css'; 

const SearchPage = ({ properties, favourites, onAddFav, onRemoveFav, onClearFav }) => {
  const [criteria, setCriteria] = useState({});
  
  const filtered = filterProperties(properties, criteria);

  return (
    <div className="search-page-layout">
      <div className="sidebar-column">
        <SearchForm onSearch={setCriteria} />
        <FavouritesPanel 
            favourites={favourites} 
            onRemoveFav={onRemoveFav} 
            onClearFav={onClearFav} 
            onDropProp={onAddFav}
        />
      </div>
      <div className="results-column">
        <h2>Properties ({filtered.length})</h2>
        <SearchResults 
            properties={filtered} 
            onAddFav={onAddFav} 
            favourites={favourites} 
        />
      </div>
    </div>
  );
};
export default SearchPage;