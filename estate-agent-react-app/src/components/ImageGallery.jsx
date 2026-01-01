import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="gallery">
      <div className="main-image">
        <img src={mainImg} alt="Main property view" />
      </div>
      <div className="thumbnails">
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Thumbnail ${idx}`} 
            onClick={() => setMainImg(img)}
            className={mainImg === img ? 'active-thumb' : ''}
          />
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;