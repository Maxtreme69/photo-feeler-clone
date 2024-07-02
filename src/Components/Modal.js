// In Modal component
import React from 'react';
import MultiStepFormActiveTest from './MultiStepFormActiveTest';

const Modal = ({ isVisible, onClose, image, ratings, category, textareaContent }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '0 20px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image} alt="Selected" style={{ width: '400px', height: '650px', objectFit: 'cover' }} />
        </div>
        <div className="form-container">
          <button id="close-button" onClick={onClose}>X</button>
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
