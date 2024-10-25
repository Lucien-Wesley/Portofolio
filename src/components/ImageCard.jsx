// eslint-disable-next-line no-unused-vars
import React from 'react';

const ImageCard = () => {
  return (
    <div className="relative w-80 h-96 z-10">
      {/* Carte arrière-plan */}
      <div className="absolute top-4 left-4 w-full h-full bg-red-500 rounded-lg transform rotate-12"></div>

      {/* Carte avant avec l'image */}
      <div className="relative w-full h-full bg-white rounded-lg overflow-hidden transform rotate-6 shadow-lg">
        <img
          src="/path-to-your-image.jpg"
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageCard;
