import React, { useState } from 'react';
import { images } from '../ImageImports.js'; // Import images object

const CardFlip = () => {
  const [angle, setAngle] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index
  const [isFlipping, setIsFlipping] = useState(false); // Track flipping state

  const handleFlip = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setAngle(prevAngle => prevAngle - 180);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.dating.length); // Cycle through images after delay
        setIsFlipping(false); // Reset flipping state
      }, 400); // Set the delay time in milliseconds (e.g., 1000 for 1 second)
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ transform: `rotateY(${angle}deg)` }}>
        <img src={images.dating[currentImageIndex]} alt="Dating" style={{ width: '100%', height: '100%' }} />
      </div>
      <button onClick={handleFlip}>FLIP</button>
    </div>
  );
}

export default CardFlip;
