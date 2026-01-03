import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ favouritesCount = 0 }) => {
  return (
    <nav className="navbar">
      {/* 1. Logo */}
      <div className="navbar-logo">
        <Link to="/">Propify</Link>
      </div>

      {/* 2. Center Search Bar */}
      <div className="navbar-search-container">
        <input 
          type="text" 
          placeholder="City (e.g., Colombo)" 
          className="navbar-search-input" 
        />
        <button className="navbar-search-button">Search</button>
      </div>

      {/* 3. Right Links & Favourites Navigation */}
      <div className="navbar-links">
        <Link to="/contact">Contact Us</Link>
        
        <Link to="/favourites" className="fav-icon-container">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className={`nav-heart-icon ${favouritesCount > 0 ? 'active' : ''}`}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          
          {favouritesCount > 0 && (
            <span className="fav-badge">{favouritesCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;