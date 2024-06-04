// In Modal component
import React from 'react';
import MultiStepFormActiveTest from './MultiStepFormActiveTest';
import ProgressBar from './ProgressBar';

const Modal = ({ isVisible, onClose, image, ratings, category, textareaContent }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-container">
          <img src={image} alt="Selected" />
        </div>
        <div className="form-container">
          <button className="close-button" onClick={onClose}>X</button>
          <MultiStepFormActiveTest
            image={image}
            ratings={ratings}
            category={category}
            textareaContent={textareaContent} // Pass textareaContent
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
