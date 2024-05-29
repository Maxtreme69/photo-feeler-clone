// MyTests.jsx
import React, { useState } from 'react';
import DropdownButton from '../Components/DropDownButton.js';
import { FaQuestionCircle } from 'react-icons/fa'; // Import Font Awesome icons
import MultiStepForm from '../Components/MultiStepForm.js';
import '../App.scss'; // Import CSS file for styling

function MyTests() {
  const [showNewTest, setShowNewTest] = useState(true);

  const handleNewTestClick = () => {
    setShowNewTest(false);
  };

  const handleCancelClick = () => {
    setShowNewTest(true);
  };

  return (
    <div className='my-tests-container'>
      <div className="test-buttons-container">
        {showNewTest && (
          <>
            <button className="new-test-button" onClick={handleNewTestClick}>
              + New Test
            </button>
            <DropdownButton />
          </>
        )}
        {!showNewTest && (
          <>
            <button className="cancel-button" onClick={handleCancelClick}>
              &lt; Cancel
            </button>
          </>
        )}
        <div className="karma-container" onClick={() => setShowNewTest(!showNewTest)}>
          <p>Karma: <span style={{ color: 'orange' }}>Medium </span><FaQuestionCircle style={{ color: 'grey' }} className="icon" /></p>
        </div>
      </div>
      {!showNewTest && <MultiStepForm />}
    </div>
  )
}

export default MyTests;
