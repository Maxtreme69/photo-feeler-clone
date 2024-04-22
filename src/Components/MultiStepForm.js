import React, { useState } from 'react';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
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
            <h2>Photo</h2>
            {/* Your photo selection input goes here */}
          </div>
        )}
        {currentStep === 2 && (
          <div className="step">
            <h2>Category</h2>
            {/* Your category selection input goes here */}
          </div>
        )}
        {currentStep === 3 && (
          <div className="step">
            <h2>Details</h2>
            {/* Your details input fields go here */}
          </div>
        )}
        {currentStep === 4 && (
          <div className="step">
            <h2>Test Size</h2>
            {/* Your test size input fields go here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
