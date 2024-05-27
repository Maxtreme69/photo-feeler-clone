import React, { useContext, useState } from 'react';
import { FaUpload, FaTrash } from 'react-icons/fa'; // Import Font Awesome icons
import { RectanglesContext } from '../Context/RectanglesContext';

function ImageGrid({ setSelectedImage, handleStepChange }) {
  const { rectangles, setRectangles } = useContext(RectanglesContext);
  const [checkedRectangles, setCheckedRectangles] = useState([]);

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      addRectangle(file);
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleCheckboxChange = (id) => {
    console.log(id); // Log the id when checkbox is clicked
    if (checkedRectangles.includes(id)) {
      setCheckedRectangles(checkedRectangles.filter(rectId => rectId !== id));
    } else {
      setCheckedRectangles([...checkedRectangles, id]);
    }
  };

  const deleteCheckedImage = () => {
    const newRectangles = rectangles.filter(
      rectangle => !(checkedRectangles.includes(rectangle.id) && rectangle.image)
    );
    setRectangles(newRectangles);
    setCheckedRectangles([]);
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
            style={{ backgroundColor: rectangle.color, position: 'relative' }}
          >
            {rectangle.image && (
              <img src={rectangle.image} alt="Uploaded" className="rectangle-image" />
            )}
            <input
              type="checkbox"
              className="rectangle-checkbox"
              style={{ position: 'absolute', top: '5px', left: '5px' }}
              checked={checkedRectangles.includes(rectangle.id)}
              onChange={() => handleCheckboxChange(rectangle.id)}
            />
          </div>
        ))}
      </div>

      <div className="button-container">
        <label htmlFor="delete-button">
          <div className="upload-box" onClick={deleteCheckedImage}>
            <div className="upload-text">DELETE PHOTOS</div>
            <div className="upload-icon">
              <FaTrash />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default ImageGrid;
