// ImageSection.js
import React from 'react';

function ImageSection({ selectedImage, isStep4, activeButton, businessTitle, socialTitle }) {
  return (
    <div className="image-section" style={{ marginRight: isStep4 ? 0 : '25%' }}>
      {selectedImage && (
        <div className="image-holder">
          <h1 className="image-title">{activeButton}</h1>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />

          {businessTitle && ( // Render business title if not empty
            <div> 
              <h5 className="image-details">Title</h5>
              <p>{businessTitle}</p>
            </div>
          )}

          {socialTitle && ( // Render social title if not empty
            <div> 
              <h5 className="image-details">Subject</h5>
              <p style={{margin: '0px'}}>{socialTitle}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageSection;
