import React, { useState } from 'react';
import GoogleMapEmbed from './GoogleMapEmbed'; // Assuming you have this from your file list

const PropertyTabs = ({ description, floorPlan, location }) => {
  const [activeTab, setActiveTab] = useState('desc');

  return (
    <div className="property-tabs">
      <div className="tab-headers">
        <button onClick={() => setActiveTab('desc')} className={activeTab === 'desc' ? 'active' : ''}>Description</button>
        <button onClick={() => setActiveTab('floor')} className={activeTab === 'floor' ? 'active' : ''}>Floor Plan</button>
        <button onClick={() => setActiveTab('map')} className={activeTab === 'map' ? 'active' : ''}>Map</button>
      </div>

      <div className="tab-content">
        {activeTab === 'desc' && <div dangerouslySetInnerHTML={{ __html: description }} />}
        {activeTab === 'floor' && <img src={floorPlan} alt="Floor Plan" style={{maxWidth: '100%'}}/>}
        {activeTab === 'map' && <GoogleMapEmbed location={location} />}
      </div>
    </div>
  );
};

export default PropertyTabs;