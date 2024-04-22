// MyTests.jsx
import React, { useState } from 'react';
import DropdownButton from '../Components/DropDownButton';
import { FaQuestionCircle } from 'react-icons/fa'; // Import Font Awesome icons
import MultiStepForm from '../Components/MultiStepForm';
import '../App.scss'; // Import CSS file for styling

function MyTests() {
  const [showNewTest, setShowNewTest] = useState(true);

  const handleNewTestClick = () => {
    setShowNewTest(false);
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
          <button className="cancel-button" onClick={() => setShowNewTest(true)}>
            &lt; Cancel
          </button>
          <div>
            <p>choose a photo below or add a new one</p>
          </div>
          </>
        )}
        <div className="karma-container" onClick={() => setShowNewTest(!showNewTest)}>
          <p>Karma: <span style={{ color: 'orange' }}>Medium </span><FaQuestionCircle style={{ color: 'grey' }} className="icon" /></p>
        </div>
      </div>
      <MultiStepForm />
    </div>
  )
}

export default MyTests;
