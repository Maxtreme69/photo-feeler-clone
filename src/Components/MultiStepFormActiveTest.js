import React, { useState } from 'react';

function MultiStepFormActiveTest() {
const [currentStep, setCurrentStep] = useState(1);
const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image file
const [selectedCategory, setSelectedCategory] = useState(null); // State to store the selected category
const [activeButton, setActiveButton] = useState('');
const [businessTitle, setBusinessTitle] = useState(''); // State to store the business title
const [socialTitle, setSocialTitle] = useState('');
const [datingAge, setDatingAge] = useState('');
const [datingGender, setDatingGender] = useState('');
const [datingMultiplePeople, setDatingMultiplePeople] = useState('');
const [slidingValueProps, setSlidingValueProps] = useState('');

const handleStepChange = (step) => {
  setCurrentStep(step);
};

const handleNextClick = (selectedComponent) => {
  setActiveButton(selectedComponent); // Set the active button
  setSelectedCategory(selectedComponent); 
  handleStepChange(3); 
};

  return (
      <div className="multi-step-form">
        <div className="step-list">
          <div
            className={`step ${currentStep === 1 ? 'active' : ''}`}
            onClick={() => handleStepChange(1)}
          >
            SCORES
          </div>
          <div
            className={`step ${currentStep === 2 ? 'active' : ''}`}
            onClick={() => handleStepChange(2)}
          >
            DATA
          </div>
          <div
            className={`step ${currentStep === 3 ? 'active' : ''}`}
            onClick={() => handleStepChange(3)}
          >
            NOTES
          </div>
          <div
            className={`step ${currentStep === 4 ? 'active' : ''}`}
            onClick={() => handleStepChange(4)}
          >
            IMAGE
          </div>
        </div>
        <div className="step-content">
          {currentStep === 1 && (
            <div>Step 1</div>
          )}
          {currentStep === 2 && (
            <div>Step 2</div>
          )}
          {currentStep === 3 && (
            <div>Step 3</div>
          )}
            {currentStep === 4 && (
            <div>Step 4</div>
            )}
        </div>
      </div>
  );
};

export default MultiStepFormActiveTest;
