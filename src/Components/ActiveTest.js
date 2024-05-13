import React from 'react'
import MultiStepFormActiveTest from './MultiStepFormActiveTest.js';

export const ActiveTest = () => {
    return (
      <div className="active-test-container">
        <MultiStepFormActiveTest />
        <div className="active-test-sub-container">
            <h2 className="active-test-heading">Your test is now active!</h2>
            <h2 className="active-test-subheading">Results should start rolling in here soon</h2>
            <h2 className="active-test-subheading-two">In the meantime, how about <span className="orange-text">shooting out a few votes</span>?</h2>
        </div>
      </div>
    );
  };
