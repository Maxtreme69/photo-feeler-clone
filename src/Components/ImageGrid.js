import React, { useContext } from 'react';
import { FaUpload, FaTrash } from 'react-icons/fa'; // Import Font Awesome icons
import { RectanglesContext } from '../Context/RectanglesContext';

function ImageGrid({ setSelectedImage, handleStepChange }) {
  const { rectangles, setRectangles } = useContext(RectanglesContext);

  const addRectangle = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const newRectangles = [
        ...rectangles,
        { id: rectangles.length, color: getRandomColor(), image: reader.result },
      ];
      setRectangles(newRectangles);
      setSelectedImage(file); // Pass the selected image to the parent component
      handleStepChange(2); // Change the step to 2 when an image is added
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
        <div style={{ marginTop: '10px' }} className="button-container">
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
        <label htmlFor="delete-button">
          <div className="upload-box">
            <div className="upload-text">DELETE PHOTOS</div>
            <div className="upload-icon">
              <FaTrash />
            </div>
          </div>
        </label>
        <button id="delete-button" onClick={removeRectangle} style={{ display: 'none' }}>Delete</button>
      </div>
    </div>
  );
}

export default ImageGrid;
