import React, { useState } from 'react';
import MultiStepFormActiveTest from './MultiStepFormActiveTest.js';
import Rating from './Rating.js';
import CommentComponent from './CommentComponent.js';

export const ActiveTest = ({ onVoteClick }) => { // Add onVoteClick prop
  const [showRating, setShowRating] = useState(false);

  const handleVoteClick = () => {
    setShowRating(true);
    onVoteClick(); // Call the callback function
  };

  return (
    <div className="active-test-container">
      {!showRating && (
        <>
          <MultiStepFormActiveTest />
          <div className="active-test-sub-container">
            <h2 className="active-test-heading">Your test is now active!</h2>
            <h2 className="active-test-subheading">
              Results should start rolling in here soon
            </h2>
            <h2 className="active-test-subheading-two">
              In the meantime, how about{' '}
              <span
                className="orange-text"
                onClick={handleVoteClick}
                style={{ cursor: 'pointer' }}
              >
                shooting out a few votes
              </span>
              ?
            </h2>
          </div>
        </>
      )}
      {showRating && (
        <>
          <Rating />
          <CommentComponent />
        </>
      )}
    </div>
  );
};
