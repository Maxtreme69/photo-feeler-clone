import React from 'react';

function ImageSection({ selectedImage, isStep4, activeButton, businessTitle }) {
  return (
    <div className="image-section" style={{ marginRight: isStep4 ? 0 : '25%' }}>
      {selectedImage && (
        <div className="image-holder">
          <h1 className="image-title">{activeButton}</h1>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />

          {businessTitle && ( // Conditionally render Title and businessTitle if businessTitle is not empty
            <div> 
              <h5 className="image-business-details">Title</h5>
              <p>{businessTitle}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageSection;
