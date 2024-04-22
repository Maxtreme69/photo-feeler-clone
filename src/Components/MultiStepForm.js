import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa'; // Import Font Awesome upload icon

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [imageUploaded, setImageUploaded] = useState(false); // State to track image upload
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image file

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleUploadClick = () => {
    // Simulate image selection from file browser
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
      setImageUploaded(true);
    };
    input.click();
  };

  return (
    <div className="multi-step-form">
      <div className="step-list">
        <div
          className={`step ${currentStep === 1 ? 'active' : ''}`}
          onClick={() => handleStepChange(1)}
        >
            PHOTO
        </div>
        <div
          className={`step ${currentStep === 2 ? 'active' : ''}`}
          onClick={() => handleStepChange(2)}
        >
          CATEGORY
        </div>
        <div
          className={`step ${currentStep === 3 ? 'active' : ''}`}
          onClick={() => handleStepChange(3)}
        >
          DETAILS
        </div>
        <div
          className={`step ${currentStep === 4 ? 'active' : ''}`}
          onClick={() => handleStepChange(4)}
        >
          TEST SIZE
        </div>
      </div>
      <div className="step-content">
        {currentStep === 1 && (
          <div className="step">
            <h4 id="step-1-text">Choose a photo below or add a new one.</h4>
            <div onClick={handleUploadClick}  className="upload-box">
              <div style={{ paddingLeft: '20px' }} className="upload-icon">
                <FaUpload/>
              </div>
              <div className="upload-text">UPLOAD</div>
              {imageUploaded && (
                <div className="uploaded-image">
                  {/* Render the uploaded image here */}
                  <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
                </div>
              )}
            </div>
            {/* Your photo selection input goes here */}
          </div>
        )}
        {/* Remaining steps code remains unchanged */}
      </div>
    </div>
  );
}

export default MultiStepForm;
