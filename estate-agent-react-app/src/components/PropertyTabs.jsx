import React, { useState } from 'react';

const PropertyTabs = ({ property }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="property-tabs-container">
      {/* Navigation Header */}
      <div className="tabs-navbar">
        <button 
          className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button 
          className={`tab-btn ${activeTab === 'floorplan' ? 'active' : ''}`}
          onClick={() => setActiveTab('floorplan')}
        >
          Floor Plan
        </button>
        <button 
          className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`}
          onClick={() => setActiveTab('map')}
        >
          Location
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="tabs-content-pane">
        {activeTab === 'description' && (
          <div className="description-tab-content">
            <p className="description-text">
              {property.description}
            </p>
            
            {/* Enhanced Features Section */}
            {property.features && property.features.length > 0 && (
              <div className="features-container">
                <h4 className="features-title">✨ Key Highlights</h4>
                <ul className="features-list">
                  {property.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'floorplan' && (
          <div className="floorplan-wrapper animate-in">
            <img src={property.floorPlan} alt="Property Floor Plan" className="floorplan-img" />
          </div>
        )}
        
        {activeTab === 'map' && (
          <div className="location-tab-centered animate-in">
            <div className="location-badge-clean">
              <span className="location-emoji">📍</span>
              <span className="location-address-text">
                {property.location}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyTabs;