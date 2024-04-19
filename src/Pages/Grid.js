// GridComponent.js

import React from 'react';
import '../App.scss';
import SplitPage from './SplitPage';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-left">
        <SplitPage />
      </div>
      <div className="grid-right">
        Right Side Content
      </div>
    </div>
  );
}

export default Grid;
