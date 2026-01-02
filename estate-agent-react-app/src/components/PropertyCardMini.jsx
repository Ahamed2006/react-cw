import React from 'react';

const PropertyCardMini = ({ property, onRemove }) => {
  return (
    <div className="fav-item" style={{ marginBottom: '12px', padding: '12px', background: 'white', borderRadius: '15px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img src={property.images[0]} style={{ width: '50px', height: '50px', borderRadius: '10px', objectFit: 'cover' }} alt="prop" />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '800', fontSize: '0.9rem' }}>£{property.price.toLocaleString()}</div>
        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{property.type}</div>
      </div>
      <button 
        onClick={() => onRemove(property.id)} 
        style={{ background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '8px', padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        ×
      </button>
    </div>
  );
};
export default PropertyCardMini;