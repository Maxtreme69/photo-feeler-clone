import React, { useState } from 'react';

function Dating({ handleNextStep, handleDatingAge, handleDatingGender, sliderValueProps }) {
  const [showNextContent, setShowNextContent] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // Local state for the slider value
  const [selectedGender, setSelectedGender] = useState(null); // State for selected gender

  const handleNextButtonClick = () => {
    setShowNextContent(true);
  };

  const handleSliderValueChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value); // Update the local state
    sliderValueProps(value); // Invoke the prop function to update the parent state
  };

  const handleNext = () => {
    handleNextStep(4, selectedGender); // Change to step 4 (TEST SIZE) in MultiStepForm
  };

  const handleDatingAgeItem = (event) => {
    handleDatingAge(event.target.value);
  };

  const handleDatingGenderItem = (event) => {
    setSelectedGender(event.target.value); // Update selected gender state
    handleDatingGender(event.target.value);
  };

  return (
    <div className="dating-container">
      {!showNextContent && (
        <>
          <div className="dating-centre-container">
            <h2 className="dating-title">Who is in the photo?</h2>
            <div className="form-group">
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
            <button style={{ marginTop: '20px' }} className="new-test-button" onClick={handleNextButtonClick}>Next</button>
          </div>
        </>
      )}
      {showNextContent && (
        <>
          <h2 className="dating-title">Who can vote on it?</h2>
          <div>
            <p className="dating-paragraph">Genders</p>
            <button
              className={`gender-button male-button ${selectedGender === 'males' ? 'active' : ''}`}
              onClick={() => setSelectedGender('males')}
            >
              Males
            </button>
            <button
              className={`gender-button female-button ${selectedGender === 'females' ? 'active' : ''}`}
              onClick={() => setSelectedGender('females')}
            >
              Females
            </button>
            <button
              className={`gender-button both-button ${selectedGender === 'both' ? 'active' : ''}`}
              onClick={() => setSelectedGender('both')}
            >
              Both
            </button>
            <p className="dating-paragraph"><span style={{ color: 'black' }}>Ages:</span> up to {sliderValue}</p>
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
