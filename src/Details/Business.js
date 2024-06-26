import React, { useState } from 'react';

function Business({ handleNextStep, handleBusinessTitleChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    handleBusinessTitleChange(value); // Call the handler to update business title in MultiStepForm with the value directly
  };

  const handleBusinessNextClick = () => {
    if (inputValue.trim() !== '') {
      handleNextStep(4); // Change to step 4 (TEST SIZE) in MultiStepForm
    } else {
      alert('Please fill in the input field.');
    }
  };

  return (
    <div className="business-container">
      <h2>Add context</h2>
      <p>What is your professional title?</p>
      <input value={inputValue} onChange={handleInputChange} />
      <div className="button-container">
        <button className="new-test-button" onClick={handleBusinessNextClick} disabled={!inputValue.trim()}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Business;
