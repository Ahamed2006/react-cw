import React from 'react';
import { Link } from 'react-router-dom';
import './pages/home.css'; // Adjust path if home.css is in src/pages

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Find Your Perfect Home</h1>
        <p>Browse our exclusive collection of houses and flats in London.</p>
        
        <div className="hero-buttons">
          <Link to="/search" className="cta-button">
            Start Searching
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;