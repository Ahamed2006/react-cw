import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBeds: '',
    maxBeds: '',
    dateAdded: '',
    postcode: ''
  });

  const handleChange = (e) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h3>Property Search</h3>
      
      <label>Type:</label>
      <select name="type" value={criteria.type} onChange={handleChange}>
        <option value="any">Any</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>

      <label>Price:</label>
      <div className="price-inputs">
        <input type="number" name="minPrice" placeholder="Min Price" onChange={handleChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange} />
      </div>

      <label>Bedrooms:</label>
      <div className="bed-inputs">
        <input type="number" name="minBeds" placeholder="Min Beds" onChange={handleChange} />
        <input type="number" name="maxBeds" placeholder="Max Beds" onChange={handleChange} />
      </div>

      <label>Added After:</label>
      <input type="date" name="dateAdded" onChange={handleChange} />

      <label>Postcode (e.g. BR1):</label>
      <input type="text" name="postcode" placeholder="Postcode Area" onChange={handleChange} />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;