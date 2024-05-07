import React from 'react';

function ImageSection({ selectedImage }) {
  return (
    <div className="image-section">
      {selectedImage && (
        <div className="image-holder">
          <h1>Dating</h1>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          <h3>Subject</h3>
          <p>The one on the left</p>
          <p>Subject: Female/32</p>
        </div>
      )}
    </div>
  );
}

export default ImageSection;
