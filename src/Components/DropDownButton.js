// DropdownButton.js

import React, { useState } from 'react';
import '../App.scss'; // Import the SCSS file with styles
import { RiArrowDownSFill } from 'react-icons/ri'; // Import arrow-down icon

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button-sort" onClick={toggleDropdown}>
        Sort <RiArrowDownSFill className="sort-icon" />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li>Last Active</li>
            <li>Total Score</li>
            <p>Dating</p>
            <li>Total Score</li>
            <li>Smart</li>
            <li>Trustworthy</li>
            <li>Attractive</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
