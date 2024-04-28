import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import Category from './Category';
import { FaUpload } from 'react-icons/fa'; // Import Font Awesome upload icon

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
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
      handleStepChange(2); // Change the step to 2 when an image is selected
    };
    input.click();
  };

  const handleNextClick = () => {
    handleStepChange(3); // Change the step to 3 when Next is clicked
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
          <div className="grid-container">
            <ImageGrid setSelectedImage={setSelectedImage} handleStepChange={handleStepChange} />
          </div>
        )}
        {currentStep === 2 && (
          <div className="category-container">
            <Category selectedImage={selectedImage} handleNextClick={handleNextClick} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
