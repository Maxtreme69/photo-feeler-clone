import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const TestSize = () => {
  return (
    <div className='test-size-container'>
      <p className="test-size-text">Which test size?</p>
        <div className='hover-container'>
        <div className='flex-container'>
            <div className='content'>
            <h4>Karma Test <span id='free'>Free</span></h4>
            <FontAwesomeIcon icon={faCirclePlay} className='icon' />
            </div>
        </div>
        <p className='bottom-text'>Earn votes by voting on other users' photos.</p>
      </div>
    </div>
  );
};

export default TestSize;
