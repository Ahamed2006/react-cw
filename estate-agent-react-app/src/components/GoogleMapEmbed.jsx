import React from 'react';

const GoogleMapEmbed = ({ location }) => {
  // Simple embed, encoding location for query
  const query = encodeURIComponent(location);
  
  return (
    <div className="map-wrapper">
      <iframe
        className="map-iframe"
        title="Property Location"
        src={`https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;