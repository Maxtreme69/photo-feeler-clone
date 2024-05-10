import React, { useState } from 'react';

function Dating({ handleNextStep, handleDatingAge, handleDatingGender, handleDatingMultiplePeople, sliderValueProps }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNextContent, setShowNextContent] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // Local state for the slider value

  const handleCheckboxChange = (event) => {
    setShowDropdown(event.target.checked);
  };

  const handleNextButtonClick = () => {
    setShowDropdown(false);
    setShowNextContent(true);
  };

  const handleSliderValueChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value); // Update the local state
    sliderValueProps(value); // Invoke the prop function to update the parent state
  };

  const handleNext = () => {
    handleNextStep(4); // Change to step 4 (TEST SIZE) in MultiStepForm
  };

  const handleDatingAgeItem = (event) => {
    handleDatingAge(event.target.value);
  };

  const handleDatingGenderItem = (event) => {
    handleDatingGender(event.target.value);
  };

  const handleDatingMultiplePeopleItem = (event) => {
    handleDatingMultiplePeople(event.target.value);
  };

  return (
    <div className={'dating-container'}>
      {!showNextContent && (
        <>
        <div className="dating-centre-container">
          <h2 className={'dating-title'}>Who is in the photo?</h2>
          <div className={'form-group'}>
            <select style={{ backgroundColor: 'white' }} id="gender" name="gender" onChange={handleDatingGenderItem}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <select style={{ backgroundColor: 'white' }} id="age" name="age" onChange={handleDatingAgeItem}>
              {[...Array(82)].map((_, index) => (
                <option key={index} value={index + 18}>{index + 18}</option>
              ))}
            </select>
          </div>
          <div className={'checkbox-group'}>
            <input
              type="checkbox"
              id="multiplePeople"
              name="multiplePeople"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="multiplePeople">Multiple people</label>
          </div>
          {showDropdown && (
            <div className={'dropdown-container'}>
              <select style={{ backgroundColor: 'white' }} id="position" name="position" onChange={handleDatingMultiplePeopleItem}>
                <option value="">Choose one...</option>
                <option value="The one on the left">The one on the left</option>
                <option value="The one on the right">The one on the right</option>
                <option value="The one in the middle">The one in the middle</option>
              </select>
            </div>
          )}
          <button style={{ marginTop: '20px' }} className="new-test-button" onClick={handleNextButtonClick}>Next</button>
          </div>
        </>
      )}
      {showNextContent && (
        <>
          <h2 className={'dating-title'}>Who can vote on it?</h2>
          <div>
            <p>Genders</p>
            <button>Males</button>
            <button>Females</button>
            <button>Both</button>
            <p>Ages: up to {sliderValue}</p> {/* Display the local state value */}
            <input
              type="range"
              id="ageSlider"
              name="ageSlider"
              min="24"
              max="99"
              step="5"
              value={sliderValue}
              onChange={handleSliderValueChange} 
            />
          </div>
          <button className="new-test-button" onClick={handleNext}>Next</button>
        </>
      )}
    </div>
  );
}

export default Dating;
