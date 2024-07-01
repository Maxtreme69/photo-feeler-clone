import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { ActiveTest } from './ActiveTest.js';
import { AppContext } from '../Context/AppContext.js'; // Import AppContext

const TestSize = ({ handleVoteClick, sliderValue, selectedGender, datingAge, multiplePeople, multiplePeopleDating, selectedImage, businessTitle }) => {
  const [isActive, setIsActive] = useState(false);
  const { addTestSizeData } = useContext(AppContext); // Use the AppContext

  const handleClick = () => {
    setIsActive(!isActive);
    const newEntry = {
      selectedImage,
      sliderValue,
      selectedGender,
      datingAge,
      multiplePeople,
      multiplePeopleDating,
      businessTitle // Include businessTitle in newEntry
    };
    addTestSizeData(newEntry); // Add data to context
    console.log('TestSize handleClick clicked!');
    console.log('New entry:', newEntry);
    console.log('Multiple People', multiplePeople);
    console.log('Multiple People Dating', multiplePeopleDating);
    console.log('Business Title', businessTitle); // Log business title
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
