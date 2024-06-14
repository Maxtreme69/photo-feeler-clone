import React, { useEffect, useState } from 'react';
import image1 from '../images/dating/males/photo-male-1.webp';
import image2 from '../images/dating/males/photo-male-2.webp';
import image3 from '../images/dating/females/photo-female-1.webp';
import image4 from '../images/dating/females/photo-female-2.webp';

const images = [image1, image2, image3, image4];

const ImageSlider = () => {
  const [imageQueue, setImageQueue] = useState(images);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setImageQueue(prevQueue => {
          const updatedQueue = [...prevQueue];
          const removedImage = updatedQueue.shift();
          updatedQueue.push(removedImage);
          return updatedQueue;
        });

        setIsAnimating(false);
      }, 1000); // Duration of the CSS animation
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{  }}>

        <div style={{ margin: '30px', position: 'center'}} className="image-slider">
        {imageQueue.map((image, index) => (
            <div
            key={index}
            className={`image-container-slider ${index === 0 && isAnimating ? 'fade-out' : ''} 
                        ${index !== 0 && isAnimating ? `move-up-${index}` : ''}`}
            style={{
                zIndex: images.length - index,
                bottom: index === 0 ? 0 : -15 * index + 'px', // Adjust the spacing
                backgroundImage: `url(${image})`,
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' // Added box shadow
            }}
            />
            
        ))}
            {/* <div style={{position: 'center', margin: '330px 420px 90px 0px', position: 'absolute', zIndex: 9999, backgroundColor: 'white', width: '330px', height: '30px'}}>

            </div> */}
        </div>
        <div>

    </div>


    

    </div>
  );
};

export default ImageSlider;
