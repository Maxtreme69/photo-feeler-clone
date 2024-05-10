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

  const handleBusinessTitleChange = (event) => {
    setBusinessTitle(event.target.value); // Update business title state
  };

  const handleSocialTitleChange = (title) => {
    setSocialTitle(title); // Update social title state
  };

  const handleDatingAge = (age) => {
    setDatingAge(age)
  };

  const handleDatingGender = (gender) => {
    setDatingGender(gender)
  };

  const handleDatingMultiplePeople = (people) => {
    setDatingMultiplePeople(people)
  }

  const sliderValueProps = (slider) => {
    setSlidingValueProps(slider)
  }

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
            <ImageSection 
              selectedImage={selectedImage} 
              activeButton={activeButton} 
              businessTitle={businessTitle} 
              socialTitle={socialTitle} // Pass the socialTitle prop
              datingAge={datingAge}
              datingGender={datingGender}
              datingMultiplePeople={datingMultiplePeople}
              sliderValueProps={slidingValueProps}
            />            
            {selectedCategory === 'Dating' && 
            <Dating 
                handleNextStep={handleStepChange} 
                handleDatingAge={handleDatingAge} 
                handleDatingGender={handleDatingGender} 
                handleDatingMultiplePeople={handleDatingMultiplePeople}
                sliderValueProps={sliderValueProps} // Corrected prop name
              />
              } 
            {selectedCategory === 'Social' && (
            <Social 
                handleNextStep={handleStepChange} 
                handleSocialTitleChange={handleSocialTitleChange} // Pass the handleSocialTitleChange function
              />
            )}
            {selectedCategory === 'Business' && (
              <Business 
                handleNextStep={handleStepChange} 
                handleBusinessTitleChange={handleBusinessTitleChange} // Pass the business title change handler
              />
            )}
          </div>
        )}
          {currentStep === 4 && (
            <div className="category-container-no-align">
              <ImageSection selectedImage={selectedImage} activeButton={activeButton} isStep4 businessTitle={businessTitle} socialTitle={socialTitle} /> {/* Pass the socialTitle prop */}
              <TestSize isStep4={true} />
            </div>
          )}
      </div>
    </div>
  );
}

export default MultiStepForm;