import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      
      {/* Background Image & Overlay Layer */}
      <div className="home-bg-overlay">
        <img src="/images/homepage-image.jpeg" alt="Home Background"
        />
      </div>

      {/* Floating Text Overlay */}
      <div className="home-content-overlay">
        <h1 className="home-title">
          Find your next <br /> 
          home, <span>faster.</span>
        </h1>
        <p className="home-description">
          Propify helps you search and filter properties by price, 
          bedrooms and date added. Save favourites instantly and compare 
          them later.
        </p>
        <Link to="/search" className="btn-home-search">
          Start Searching
        </Link>
      </div>

    </div>
  );
};

export default HomePage; 