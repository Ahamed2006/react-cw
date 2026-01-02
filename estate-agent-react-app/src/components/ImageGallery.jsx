import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="gallery" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div className="main-image" style={{ width: '100%', height: '450px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <img src={mainImg} alt="Property" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s ease' }} />
      </div>
      <div className="thumbnails" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '10px' }}>
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Thumb ${idx}`} 
            onClick={() => setMainImg(img)}
            style={{ 
              width: '100px', 
              height: '70px', 
              borderRadius: '12px', 
              cursor: 'pointer', 
              objectFit: 'cover',
              border: mainImg === img ? '3px solid #facc15' : '3px solid transparent',
              transition: 'all 0.2s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;