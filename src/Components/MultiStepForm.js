import React, { useState } from 'react';
<<<<<<< HEAD
import ImageGrid from './ImageGrid.js';
import Category from './Category.js';
import Business from '../Details/Business.js'; // Import the Business component
import Dating from '../Details/Dating.js'; // Import the Dating component
import Social from '../Details/Social.js'; // Import the Social component
import TestSize from './TestSize.js';
import ImageSection from './ImageSection.js';
=======
import ImageGrid from './ImageGrid';
import Category from './Category';
import Business from '../Details/Business';
import Dating from '../Details/Dating';
import Social from '../Details/Social';
import TestSize from './TestSize';
import ImageSection from './ImageSection';
import ImageSectionVote from './ImageSectionVote';
// import CommentComponent from './CommentComponent';
>>>>>>> 67cc56bf650276deb7a979bb5be18637730dc6c2

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('DATING'); // Default to 'DATING'
  const [activeButton, setActiveButton] = useState('DATING');
  const [businessTitle, setBusinessTitle] = useState('');
  const [socialTitle, setSocialTitle] = useState('');
  const [datingAge, setDatingAge] = useState('');
  const [datingGender, setDatingGender] = useState('both');
  const [datingMultiplePeople, setDatingMultiplePeople] = useState('');
  const [slidingValueProps, setSlidingValueProps] = useState('');
  const [showImageSectionVote, setShowImageSectionVote] = useState(false);
  const [selectedGender, setSelectedGender] = useState('both'); // Default to 'both'
  const [rectangles, setRectangles] = useState([]);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleNextClick = (selectedComponent) => {
    setActiveButton(selectedComponent.toUpperCase());
    setSelectedCategory(selectedComponent.toUpperCase());
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
    setSelectedGender(gender);
  };

  const handleDatingMultiplePeople = (people) => {
    setDatingMultiplePeople(people);
  };

  const sliderValueProps = (slider) => {
    setSlidingValueProps(slider);
  };

  const handleVoteClick = () => {
    // Perform any necessary vote submission logic here
    console.log('Vote submitted');
  };

  const handleSubmit = () => {
    setShowImageSectionVote(true);
    console.log('Vote submitted');
  };

  // const handleClickFromComment = (content) => {
  //   console.log('Clicked content:', content);
  //   handleSubmit();
  // };

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
          onClick={() => { if (currentStep >= 2) handleStepChange(2); }}
        >
          CATEGORY
        </div>
        <div
          className={`step ${currentStep === 3 ? 'active' : ''}`}
          onClick={() => { if (currentStep >= 3) handleStepChange(3); }}
        >
          DETAILS
        </div>
        <div
          className={`step ${currentStep === 4 ? 'active' : ''}`}
          onClick={() => { if (currentStep >= 4) handleStepChange(4); }}
        >
          TEST SIZE
        </div>
      </div>
      <div className="step-content">
        {currentStep === 1 && (
          <div className="grid-container">
            <ImageGrid
              rectangles={rectangles}
              setRectangles={setRectangles}
              setSelectedImage={setSelectedImage}
              handleStepChange={handleStepChange}
            />          
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
            {selectedCategory === 'DATING' && (
              <Dating
                handleNextStep={handleStepChange}
                handleDatingAge={handleDatingAge}
                handleDatingGender={handleDatingGender}
                handleDatingMultiplePeople={handleDatingMultiplePeople}
                sliderValueProps={sliderValueProps}
                handleNextClick={handleNextClick}
              />
            )}
            {selectedCategory === 'SOCIAL' && (
              <Social
                handleNextStep={handleStepChange}
                handleSocialTitleChange={handleSocialTitleChange}
              />
            )}
            {selectedCategory === 'BUSINESS' && (
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
              <ImageSectionVote 
                activeButton={activeButton}
                selectedGender={selectedGender}
                onSubmit={handleSubmit} // Ensure handleSubmit is passed here
              />
            )}
            <TestSize isStep4={true} handleVoteClick={handleVoteClick} />
            {/* <CommentComponent onSubmit={handleSubmit} /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
