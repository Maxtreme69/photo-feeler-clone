import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa'; // Import Font Awesome upload icon
import { FaTrash } from 'react-icons/fa';

function ImageGrid({ setSelectedImage, handleStepChange }) {
  const [rectangles, setRectangles] = useState([]);

  const addRectangle = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const newRectangles = [
        ...rectangles,
        { id: rectangles.length, color: getRandomColor(), image: reader.result },
      ];
      setRectangles(newRectangles);
      setSelectedImage(file); // Pass the selected image to the parent component
      // handleStepChange(2); // Change the step to 2 when an image is added
    };
    reader.readAsDataURL(file);
  };

  const removeRectangle = () => {
    if (rectangles.length > 0) {
      setRectangles(rectangles.slice(0, -1));
    }
  };

  const handleImageClick = (file) => {
    setSelectedImage(file);
    handleStepChange(2); // Change the step to 2 when an image is clicked
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    addRectangle(file);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="image-grid">
      <div className="grid-container">
      <div style={{marginTop: '10px'}} className="button-container">
        <label htmlFor="upload-input">
          <div className="upload-box">
            <div className="upload-text">UPLOAD</div>
            <div className="upload-icon">
              <FaUpload />
            </div>
            <input
              id="upload-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
        </label>
      </div>
        {rectangles.map((rectangle) => (
          <div
            key={rectangle.id}
            className="rectangle"
            style={{ backgroundColor: rectangle.color }}
            onClick={() => handleImageClick(rectangle.image)}
          >
            {rectangle.image && (
              <img src={rectangle.image} alt="Uploaded" className="rectangle-image" />
            )}
          </div>
        ))}
      </div>

      <div className="button-container">
        <label htmlFor="upload-input">
          <div className="upload-box">
            <div className="upload-text">DELETE PHOTOS</div>
            <div className="upload-icon">
              <FaTrash />
            </div>
            <input
              id="upload-input"
              type="file"
              accept="image/*"
              onChange={removeRectangle}
              style={{ display: 'none' }}
            />
          </div>
        </label>
      </div>

      {/* <button onClick={removeRectangle}>Remove Rectangle</button> */}
      
    </div>
  );
}

export default ImageGrid;
