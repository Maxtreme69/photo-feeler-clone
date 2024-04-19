// GridComponent.js

import React from 'react';
import '../App.scss';
import Signup from '../Components/Signup';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-left">
        <Signup />
      </div>
      <div className="grid-right">
        Right Side Content
      </div>
    </div>
  );
}

export default Grid;
