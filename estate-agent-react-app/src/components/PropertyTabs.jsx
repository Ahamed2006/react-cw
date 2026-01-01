import React, { useState } from 'react';
import GoogleMapEmbed from './GoogleMapEmbed';

const PropertyTabs = ({ property }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="property-tabs">
      <div className="tab-headers">
        <button onClick={() => setActiveTab('description')} className={activeTab === 'description' ? 'active' : ''}>Description</button>
        <button onClick={() => setActiveTab('floorplan')} className={activeTab === 'floorplan' ? 'active' : ''}>Floor Plan</button>
        <button onClick={() => setActiveTab('map')} className={activeTab === 'map' ? 'active' : ''}>Map</button>
      </div>
      <div className="tab-content">
        {activeTab === 'description' && <p>{property.description}</p>}
        {activeTab === 'floorplan' && <img src={property.floorPlan} alt="Floor Plan" className="floorplan-img" />}
        {activeTab === 'map' && <GoogleMapEmbed location={property.location} />}
      </div>
    </div>
  );
};
export default PropertyTabs;