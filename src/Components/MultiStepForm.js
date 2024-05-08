import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import Category from './Category';
import Business from '../Details/Business'; // Import the Business component
import Dating from '../Details/Dating'; // Import the Dating component
import Social from '../Details/Social'; // Import the Social component
import TestSize from './TestSize';
import ImageSection from './ImageSection';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image file
  const [selectedCategory, setSelectedCategory] = useState(null); // State to store the selected category

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

  const handleNextClick = (selectedComponent) => {
    setSelectedCategory(selectedComponent); // Set the selected category in state
    handleStepChange(3); // Change to step 3 ('Details') on MultiStepForm
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
            <ImageSection 
              selectedImage={selectedImage}
            />
            <Category
              selectedImage={selectedImage}
              handleNextClick={handleNextClick}
              handleSelectedComponent={handleNextClick} // Pass the handleNextClick function
            />
          </div>
        )}
        {currentStep === 3 && selectedCategory && (
          <div className="category-container">
            <ImageSection selectedImage={selectedImage} />
            {selectedCategory === 'Dating' && <Dating handleNextStep={handleStepChange} />} 
            {selectedCategory === 'Social' && <Social handleNextStep={handleStepChange}/>}
            {selectedCategory === 'Business' && <Business handleNextStep={handleStepChange} />}
          </div>
        )}
        {currentStep === 4 && (
          <div className="category-container-no-align">
            <ImageSection selectedImage={selectedImage} isStep4 />
            <TestSize isStep4={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
