import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  // Default to first image if available
  const [mainImg, setMainImg] = useState(images ? images[0] : '');

  return (
    <div className="property-gallery-container">
      {/* Main Large Display */}
      <div className="gallery-main-display">
        <img src={mainImg} alt="Property Main View" className="main-feature-img" />
      </div>

      {/* Thumbnail Strip */}
      <div className="gallery-thumbnails-strip">
        {images && images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Property view ${idx + 1}`} 
            onClick={() => setMainImg(img)}
            className={`thumb-item ${mainImg === img ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;