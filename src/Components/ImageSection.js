import React from 'react';

function ImageSection({ selectedImage, isStep4, activeButton }) {
  return (
    <div className="image-section" style={{ marginRight: isStep4 ? 0 : '25%' }}>
      {selectedImage && (
        <div className="image-holder">
          <h1 className="image-title">{activeButton}</h1> {/* Render activeButton dynamically */}
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
