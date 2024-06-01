// Modal.js
import React from 'react';

const Modal = ({ isVisible, onClose, image }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Selected" style={{ width: '100%', height: 'auto' }} />
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;
