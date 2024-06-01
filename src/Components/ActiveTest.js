// src/components/ActiveTest.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MultiStepFormActiveTest from './MultiStepFormActiveTest.js';

export const ActiveTest = ({ onVoteClick }) => {
  const [showRating, setShowRating] = useState(false);

  const handleVoteClick = () => {
    setShowRating(true);
    onVoteClick(); // Call the callback function
  };

  return (
    <div className="active-test-container">
      {!showRating && (
        <>
          <div className="active-test-sub-container">
            <h2 className="active-test-heading">Your test is now active!</h2>
            <h2 className="active-test-subheading">
              Results should start rolling in here soon
            </h2>
            <h2 className="active-test-subheading-two">
              In the meantime, how about{' '}
              <Link to="/vote" className="orange-text" onClick={handleVoteClick}>
                shooting out a few votes
              </Link>
              ?
            </h2>
          </div>
        </>
      )}
      {showRating && (
        <>
          {/* Render components for voting */}
        </>
      )}
    </div>
  );
};
