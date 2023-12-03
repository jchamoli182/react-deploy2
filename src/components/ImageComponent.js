import React from 'react';

const ImageComponent = () => {
  const imageUrl = 'https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg';

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <img
        src={imageUrl}
        alt="Sample"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius: 'inherit',
          objectFit: 'contain',
          imageRendering: 'auto',
        }}
      />
    </div>
  );
};

export default ImageComponent;