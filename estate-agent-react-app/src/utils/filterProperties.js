export const filterProperties = (properties, criteria) => {
  return properties.filter(prop => {
    // 1. Type
    if (criteria.type && criteria.type !== 'any' && prop.type !== criteria.type) return false;
    
    // 2. Price
    if (criteria.minPrice && prop.price < Number(criteria.minPrice)) return false;
    if (criteria.maxPrice && prop.price > Number(criteria.maxPrice)) return false;
    
    // 3. Bedrooms
    if (criteria.minBeds && prop.bedrooms < Number(criteria.minBeds)) return false;
    if (criteria.maxBeds && prop.bedrooms > Number(criteria.maxBeds)) return false;
    
    // 4. Postcode (substring match)
    if (criteria.postcode && !prop.location.toLowerCase().includes(criteria.postcode.toLowerCase())) return false;
    
    // 5. Date Added
    if (criteria.dateFrom) {
      const propDate = new Date(prop.dateAdded);
      const filterDate = new Date(criteria.dateFrom);
      if (propDate < filterDate) return false;
    }
    
    return true;
  });
};