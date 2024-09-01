import React from 'react';
import MultiStepFormActiveTest from './MultiStepFormActiveTest';

const Modal = ({ isVisible, onClose, image, ratings, category, textareaContent, selectedImageDetailsSubmit }) => {
  if (!isVisible) return null;

  console.log('category modal', category);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{   padding: '20px 40px 20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
            <img src={image} alt="Selected" style={{ height: '650px', objectFit: 'cover' }} />
          </div>
          {selectedImageDetailsSubmit && (category === 'dating' || category === 'social') ? (
            <div style={{ background: 'rgba(255, 255, 255, 0.😎', padding: '10px', borderRadius: '8px', width: '400px' }}>
              <p className="image-details-dating">SUBJECT</p>
              <p className="image-details">{selectedImageDetailsSubmit}</p>
            </div>
          ) : selectedImageDetailsSubmit && category === 'business' ? (
            <div style={{ background: 'rgba(255, 255, 255, 0.😎', padding: '10px', borderRadius: '8px' }}>
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