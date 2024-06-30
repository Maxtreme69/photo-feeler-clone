import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { ActiveTest } from './ActiveTest.js';
import { useTestSizeSubmission } from '../Context/TestSizeSubmission.js'; // Import the context hook

const TestSize = ({ handleVoteClick, sliderValue, selectedGender, datingAge, multiplePeople, selectedImage }) => {
  const [isActive, setIsActive] = useState(false);
  const { addTestSizeData } = useTestSizeSubmission(); // Use the context function

  const handleClick = () => {
    setIsActive(!isActive);
    const newEntry = {
      selectedImage,
      sliderValue,
      selectedGender,
      datingAge,
      multiplePeople
    };
    addTestSizeData(newEntry); // Add data to context
    console.log('TestSize handleClick clicked!');
    console.log('New entry:', newEntry);
  };

  return (
    <div className='test-size-container'>
      {!isActive && (
        <React.Fragment>
          <p className="test-size-text">Which test size?</p>
          <div className='hover-container' onClick={handleClick}>
            <div className='flex-container'>
              <div className='content'>
                <h4>Karma Test <span id='free'>Free</span></h4>
                <FontAwesomeIcon icon={faCirclePlay} className='icon' />
              </div>
            </div>
            <p className='bottom-text'>Earn votes by voting on other users' photos.</p>
          </div>
        </React.Fragment>
      )}
      {isActive && <ActiveTest onVoteClick={handleVoteClick} />}
    </div>
  );
};

export default TestSize;
