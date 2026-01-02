import React, { useState } from 'react';
import GoogleMapEmbed from './GoogleMapEmbed';

const PropertyTabs = ({ property }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabStyle = (isActive) => ({
    padding: '12px 24px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '700',
    backgroundColor: isActive ? '#facc15' : 'transparent',
    color: '#0f172a',
    transition: 'all 0.3s ease'
  });

  return (
    <div className="property-tabs">
      <div className="tab-headers" style={{ display: 'flex', gap: '10px', marginBottom: '25px', background: '#f1f5f9', padding: '6px', borderRadius: '16px', width: 'fit-content' }}>
        <button onClick={() => setActiveTab('description')} style={tabStyle(activeTab === 'description')}>Description</button>
        <button onClick={() => setActiveTab('floorplan')} style={tabStyle(activeTab === 'floorplan')}>Floor Plan</button>
        <button onClick={() => setActiveTab('map')} style={tabStyle(activeTab === 'map')}>Map</button>
      </div>
      <div className="tab-content" style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.05rem' }}>
        {activeTab === 'description' && <p>{property.description}</p>}
        {activeTab === 'floorplan' && <img src={property.floorPlan} alt="Floor Plan" style={{ width: '100%', borderRadius: '20px' }} />}
        {activeTab === 'map' && <GoogleMapEmbed location={property.location} />}
      </div>
    </div>
  );
};
export default PropertyTabs;