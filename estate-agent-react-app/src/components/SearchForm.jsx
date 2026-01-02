import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    type: 'any', minPrice: '', maxPrice: '', minBeds: '', maxBeds: '', postcode: '', dateFrom: '', dateTo: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="search-container" style={{
      background: '#ffffff',
      padding: '40px',
      borderRadius: '30px',
      border: '1px solid #f1f5f9',
      boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '30px', color: '#0f172a' }}>Find property</h2>
      
      <form onSubmit={(e) => { e.preventDefault(); onSearch(formData); }} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        {/* Row 1: Type and Postcode */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label style={labelStyle}>Property type</label>
            <select name="type" onChange={handleChange} style={inputStyle}>
              <option value="any">Any</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="form-group">
            <label style={labelStyle}>Postcode area</label>
            <input type="text" name="postcode" placeholder="e.g. Colombo" onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        {/* Row 2: Prices */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label style={labelStyle}>Min price</label>
            <input type="text" name="minPrice" onChange={handleChange} style={inputStyle} />
          </div>
          <div className="form-group">
            <label style={labelStyle}>Max price</label>
            <input type="text" name="maxPrice" onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        {/* Row 3: Bedrooms */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label style={labelStyle}>Min beds</label>
            <input type="number" name="minBeds" onChange={handleChange} style={inputStyle} />
          </div>
          <div className="form-group">
            <label style={labelStyle}>Max beds</label>
            <input type="number" name="maxBeds" onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        {/* Row 4: Dates */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label style={labelStyle}>Date from</label>
            <input type="date" name="dateFrom" onChange={handleChange} style={inputStyle} />
          </div>
          <div className="form-group">
            <label style={labelStyle}>Date to</label>
            <input type="date" name="dateTo" onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        <button type="submit" className="search-btn" style={{
          backgroundColor: '#facc15',
          color: '#0f172a',
          padding: '18px',
          borderRadius: '16px',
          border: 'none',
          fontSize: '1.1rem',
          fontWeight: '800',
          cursor: 'pointer',
          marginTop: '10px',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 12px rgba(250, 204, 21, 0.2)'
        }}>
          Search properties
        </button>
      </form>
    </div>
  );
};

// Internal styles for clean code
const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: '700',
  fontSize: '0.9rem',
  color: '#475569',
  marginLeft: '4px'
};

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: '14px',
  border: '1px solid #e2e8f0',
  backgroundColor: '#f8fafc',
  fontSize: '1rem',
  outline: 'none',
  boxSizing: 'border-box'
};

export default SearchForm;