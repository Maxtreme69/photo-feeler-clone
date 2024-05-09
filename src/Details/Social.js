// Social.js
import React, { useState } from 'react';

function Social({ handleNextStep, handleSocialTitleChange  }) {
  const [peopleCount, setPeopleCount] = useState('One');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRadioChange = (event) => {
    setPeopleCount(event.target.value);
    setShowDropdown(event.target.value === 'Multiple');
  };

  const handleDropdownChange = (event) => {
    handleSocialTitleChange(event.target.value); // Call handleSocialTitleChange with the selected value
  };
  
  const handleNext = () => {
    handleNextStep(4); // Change to step 4 (TEST SIZE) in MultiStepForm
  };

  return (
    <div className='social-container'>
      <h2 className='social-title'>How many people in this photo?</h2>
      <div className='radio-group'>
        <input
          type="radio"
          id="one"
          name="peopleCount"
          value="One"
          checked={peopleCount === 'One'}
          onChange={handleRadioChange}
        />
        <label htmlFor="one">One</label>
        <input
          type="radio"
          id="multiple"
          name="peopleCount"
          value="Multiple"
          checked={peopleCount === 'Multiple'}
          onChange={handleRadioChange}
        />
        <label htmlFor="multiple">Multiple</label>
      </div>
      {showDropdown && (
        <div className='dropdown-container'>
          <select id="position" name="position" onChange={handleDropdownChange}>
            <option value="">Choose one...</option>
            <option value="The one on the left">The one on the left</option>
            <option value="The one on the right">The one on the right</option>
            <option value="The one in the middle">The one in the middle</option>
          </select>
        </div>
      )}
      <button className='next-button' onClick={handleNext}>Next</button>
    </div>
  );
}

export default Social;
