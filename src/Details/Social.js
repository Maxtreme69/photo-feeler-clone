import React, { useState } from 'react';

function Social({ handleNextStep }) { // Change this line
  const [peopleCount, setPeopleCount] = useState('One');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleRadioChange = (event) => {
    setPeopleCount(event.target.value);
    setShowDropdown(event.target.value === 'Multiple');
  };

  const handleNext = () => {
    handleNextStep(4); // Change to step 4 (TEST SIZE) in MultiStepForm
  };

  return (
    <div>
      <h2>How many people in this photo?</h2>
      <div>
        <input
          type="radio"
          id="one"
          name="peopleCount"
          value="One"
          checked={peopleCount === 'One'}
          onChange={handleRadioChange}
        />
        <label htmlFor="one">One</label>
      </div>
      <div>
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
        <div style={{ marginTop: '1rem' }}>
          <select id="position" name="position">
            <option value="">Choose one...</option>
            <option value="left">The one on the left</option>
            <option value="right">The one on the right</option>
            <option value="middle">The one in the middle</option>
          </select>
        </div>
      )}
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Social;
