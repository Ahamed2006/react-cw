import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    type: 'any', minPrice: '', maxPrice: '', minBeds: '', maxBeds: '', postcode: '', dateFrom: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Type</label>
        <select name="type" onChange={handleChange} className="form-control">
          <option value="any">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>
      </div>
      <div className="form-group">
        <label>Price Range</label>
        <div className="price-inputs">
            <input type="number" name="minPrice" placeholder="Min" onChange={handleChange} />
            <input type="number" name="maxPrice" placeholder="Max" onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label>Bedrooms</label>
        <input type="number" name="minBeds" placeholder="Min Beds" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Postcode</label>
        <input type="text" name="postcode" placeholder="e.g. NW1" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Added After</label>
        <input type="date" name="dateFrom" onChange={handleChange} />
      </div>
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
};
export default SearchForm;