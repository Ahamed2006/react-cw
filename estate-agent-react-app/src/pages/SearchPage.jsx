import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { filterProperties } from '../utils/filterProperties';
import './sitebar.css'; 

const SearchPage = ({ properties, favourites, onAddFav }) => {
  const [criteria, setCriteria] = useState({});
  const filtered = filterProperties(properties, criteria);

  return (
    /* This wrapper now forces the entire search area to be white */
    <div className="search-page-full-wrapper" style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh', 
      width: '100%' 
    }}>
      <div className="search-page-layout">
        <div className="sidebar-column">
          <SearchForm onSearch={setCriteria} />
        </div>
        
        <div className="results-column">
          <h2 style={{ 
            fontSize: '2.2rem', 
            color: '#0f172a', 
            marginBottom: '30px', 
            fontWeight: '800' 
          }}>
              Properties ({filtered.length})
          </h2>
          <SearchResults 
              properties={filtered} 
              onAddFav={onAddFav} 
              favourites={favourites} 
          />
        </div>
      </div>
    </div>
  );
};
export default SearchPage;