import React, { useState } from 'react';

function Dating({ handleNextStep }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNextContent, setShowNextContent] = useState(false);
  const [sliderValue, setSliderValue] = useState(24);

  const handleCheckboxChange = (event) => {
    setShowDropdown(event.target.checked);
  };

  const handleNextButtonClick = () => {
    setShowDropdown(false);
    setShowNextContent(true);
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  const handleNext = () => {
    handleNextStep(4); // Change to step 4 (TEST SIZE) in MultiStepForm
  };

  return (
    <div>
      {!showNextContent && (
        <>
          <h2>Who is in the photo?</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <label htmlFor="age">Age:</label>
            <select id="age" name="age">
              {[...Array(82)].map((_, index) => (
                <option key={index} value={index + 18}>{index + 18}</option>
              ))}
            </select>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <input
              type="checkbox"
              id="multiplePeople"
              name="multiplePeople"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="multiplePeople">Multiple people</label>
          </div>
          {showDropdown && (
            <div style={{ marginTop: '1rem' }}>
              <select id="position" name="position">
                <option value="">Choose one...</option>
                <option value="left">The one on the left</option>
                <option value="right">The one on the right</option>
                <option value="middle">The one in the middle</option>
              </select>
            </div>
          )}
          <button onClick={handleNextButtonClick}>Next</button>
        </>
      )}
      {showNextContent && (
        <>
          <h2>Who can vote on it?</h2>
          <div>
            <p>Genders</p>
            <button>Males</button>
            <button>Females</button>
            <button>Both</button>
            <p>Ages: up to {sliderValue}</p>
            <input
              type="range"
              id="ageSlider"
              name="ageSlider"
              min="24"
              max="99"
              step="5"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
          <button onClick={handleNext}>Next</button>
        </>
      )}
    </div>
  );
}

export default Dating;
