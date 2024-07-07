import React from 'react';
import MultiStepFormActiveTest from './MultiStepFormActiveTest';

const Modal = ({ isVisible, onClose, image, ratings, category, textareaContent, selectedImageDetailsSubmit }) => {
  if (!isVisible) return null;

  console.log('category modal', category);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ padding: '0 20px', overflow: 'hidden', display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <img src={image} alt="Selected" style={{ width: '400px', height: '650px', objectFit: 'cover' }} />
          </div>
          {selectedImageDetailsSubmit && (category === 'dating' || category === 'social') ? (
            <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '8px', width: '400px' }}>
              <p className="image-details-dating">SUBJECT</p>
              <p className="image-details">{selectedImageDetailsSubmit}</p>
            </div>
          ) : selectedImageDetailsSubmit && category === 'business' ? (
            <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '8px', width: '400px' }}>
              <p className="image-details-dating">TITLE</p>
              <p className="image-details">{selectedImageDetailsSubmit}</p>
            </div>
          ) : null}
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
