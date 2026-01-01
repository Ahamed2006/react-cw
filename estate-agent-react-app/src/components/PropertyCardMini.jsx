import React from 'react';

const PropertyCardMini = ({ property, onRemove }) => {
  return (
    <div className="fav-item" style={{ marginBottom: '10px', padding: '10px', background: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: 'bold' }}>{property.type}</span>
        <span style={{ fontSize: '0.8rem', color: '#666' }}>£{property.price.toLocaleString()}</span>
      </div>
      <button 
        onClick={() => onRemove(property.id)} 
        style={{ background: '#ff4444', color: 'white', border: 'none', borderRadius: '50%', width: '25px', height: '25px', cursor: 'pointer' }}
      >
        ×
      </button>
    </div>
  );
};

export default PropertyCardMini;