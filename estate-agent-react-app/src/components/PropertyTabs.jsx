import React, { useState } from 'react';
import GoogleMapEmbed from './GoogleMapEmbed';

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
          Map
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="tabs-content-pane">
        {activeTab === 'description' && (
          <p className="description-text">{property.description}</p>
        )}
        
        {activeTab === 'floorplan' && (
          <div className="floorplan-wrapper">
            <img src={property.floorPlan} alt="Property Floor Plan" className="floorplan-img" />
          </div>
        )}
        
        {activeTab === 'map' && (
          <GoogleMapEmbed location={property.location} />
        )}
      </div>
    </div>
  );
};

export default PropertyTabs;