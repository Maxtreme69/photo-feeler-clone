import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
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
        <div className="grid-container">
        {/* <h4 id="step-1-text">Choose a photo below or add a new one.</h4> */}
          {/* <div className="upload-box" onClick={handleUploadClick}>
            <div className="upload-text">UPLOAD</div>
            <div className="upload-icon">
              <FaUpload />
            </div>
          </div>
          {imageUploaded && (
            <div className="uploaded-image">
              <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
            </div>
          )} */}
          <ImageGrid />
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
