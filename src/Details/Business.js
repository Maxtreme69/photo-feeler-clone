import React, { useState } from 'react';

function Business({ handleNextStep }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleBusinessNextClick = () => {
    if (inputValue.trim() !== '') {
      handleNextStep(4); // Change to step 4 (TEST SIZE) in MultiStepForm
    } else {
      alert('Please fill in the input field.');
    }
  };

  return (
    <div>
      <h2>Add context</h2>
      <p>What is your professional title?</p>
      <input value={inputValue} onChange={handleInputChange} />
      <div>
        <button onClick={handleBusinessNextClick} disabled={!inputValue.trim()}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Business;
