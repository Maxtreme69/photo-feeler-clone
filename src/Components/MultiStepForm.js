import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import Category from './Category';
import Business from '../Details/Business';
import Dating from '../Details/Dating';
import Social from '../Details/Social';
import TestSize from './TestSize';
import ImageSection from './ImageSection';
import ImageSectionVote from './ImageSectionVote';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeButton, setActiveButton] = useState('');
  const [businessTitle, setBusinessTitle] = useState('');
  const [socialTitle, setSocialTitle] = useState('');
  const [datingAge, setDatingAge] = useState('');
  const [datingGender, setDatingGender] = useState('');
  const [datingMultiplePeople, setDatingMultiplePeople] = useState('');
  const [slidingValueProps, setSlidingValueProps] = useState('');
  const [showImageSectionVote, setShowImageSectionVote] = useState(false); // Add this state

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleNextClick = (selectedComponent) => {
    setActiveButton(selectedComponent);
    setSelectedCategory(selectedComponent); 
    handleStepChange(3); 
  };

  const handleBusinessTitleChange = (event) => {
    setBusinessTitle(event.target.value);
  };

  const handleSocialTitleChange = (title) => {
    setSocialTitle(title);
  };

  const handleDatingAge = (age) => {
    setDatingAge(age);
  };

  const handleDatingGender = (gender) => {
    setDatingGender(gender);
  };

  const handleDatingMultiplePeople = (people) => {
    setDatingMultiplePeople(people);
  };

  const sliderValueProps = (slider) => {
    setSlidingValueProps(slider);
  };

  const handleVoteClick = () => {
    setShowImageSectionVote(true);
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
            <ImageSection selectedImage={selectedImage} />
            <Category
              selectedImage={selectedImage}
              handleNextClick={handleNextClick}
              handleSelectedComponent={handleNextClick}
            />
          </div>
        )}
        {currentStep === 3 && selectedCategory && (
          <div className="category-container">
            <ImageSection
              selectedImage={selectedImage}
              activeButton={activeButton}
              businessTitle={businessTitle}
              socialTitle={socialTitle}
              datingAge={datingAge}
              datingGender={datingGender}
              datingMultiplePeople={datingMultiplePeople}
              sliderValueProps={slidingValueProps}
            />
            {selectedCategory === 'Dating' && (
              <Dating
                handleNextStep={handleStepChange}
                handleDatingAge={handleDatingAge}
                handleDatingGender={handleDatingGender}
                handleDatingMultiplePeople={handleDatingMultiplePeople}
                sliderValueProps={sliderValueProps}
              />
            )}
            {selectedCategory === 'Social' && (
              <Social
                handleNextStep={handleStepChange}
                handleSocialTitleChange={handleSocialTitleChange}
              />
            )}
            {selectedCategory === 'Business' && (
              <Business
                handleNextStep={handleStepChange}
                handleBusinessTitleChange={handleBusinessTitleChange}
              />
            )}
          </div>
        )}
        {currentStep === 4 && (
          <div className="category-container-no-align">
            {!showImageSectionVote ? (
              <ImageSection
                selectedImage={selectedImage}
                activeButton={activeButton}
                isStep4
                businessTitle={businessTitle}
                socialTitle={socialTitle}
              />
            ) : (
              <ImageSectionVote activeButton={activeButton}/>
            )}
            <TestSize isStep4={true} handleVoteClick={handleVoteClick} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;