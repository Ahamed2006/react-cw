import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { filterProperties } from '../utils/filterProperties';
import './sitebar.css'; 

const SearchPage = ({ properties, favourites, onAddFav }) => {
  const [criteria, setCriteria] = useState({});
  const filtered = filterProperties(properties, criteria);

  return (
    <div className="search-page-full-wrapper">
      <div className="search-page-layout">
        <aside className="sidebar-column">
          <SearchForm onSearch={setCriteria} />
        </aside>
        
        <main className="results-column">
          <h2 className="results-count-heading">
              Properties ({filtered.length})
          </h2>
          <SearchResults 
              properties={filtered} 
              onAddFav={onAddFav} 
              favourites={favourites} 
          />
        </main>
      </div>
    </div>
  );
};

export default SearchPage;