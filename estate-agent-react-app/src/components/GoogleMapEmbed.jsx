import React from 'react';

const GoogleMapEmbed = ({ location }) => {
  // Simple embed, encoding location for query
  const query = encodeURIComponent(location);
  return (
    <div className="map-container">
      <iframe
        title="Property Location"
        width="100%"
        height="300"
        frameBorder="0"
        src={`https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      ></iframe>
    </div>
  );
};
export default GoogleMapEmbed;