import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    type: 'any', minPrice: '', maxPrice: '', minBeds: '', maxBeds: '', postcode: '', dateFrom: '', dateTo: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="search-card-container">
      <h2 className="search-title">Find property</h2>
      
      <form className="search-form-grid" onSubmit={(e) => { e.preventDefault(); onSearch(formData); }}>
        
        {/* Row: Type and Postcode */}
        <div className="form-row-dual">
          <div className="form-group">
            <label className="form-label">Property type</label>
            <select name="type" className="form-input" onChange={handleChange}>
              <option value="any">Any</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Postcode area</label>
            <input type="text" name="postcode" className="form-input" placeholder="e.g. Colombo" onChange={handleChange} />
          </div>
        </div>

        {/* Row: Prices */}
        <div className="form-row-dual">
          <div className="form-group">
            <label className="form-label">Min price</label>
            <input type="text" name="minPrice" className="form-input" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Max price</label>
            <input type="text" name="maxPrice" className="form-input" onChange={handleChange} />
          </div>
        </div>

        {/* Row: Bedrooms */}
        <div className="form-row-dual">
          <div className="form-group">
            <label className="form-label">Min beds</label>
            <input type="number" name="minBeds" className="form-input" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Max beds</label>
            <input type="number" name="maxBeds" className="form-input" onChange={handleChange} />
          </div>
        </div>

        {/* Row: Dates */}
        <div className="form-row-dual">
          <div className="form-group">
            <label className="form-label">Date from</label>
            <input type="date" name="dateFrom" className="form-input" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Date to</label>
            <input type="date" name="dateTo" className="form-input" onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="main-search-btn">
          Search properties
        </button>
      </form>
    </div>
  );
};

export default SearchForm;