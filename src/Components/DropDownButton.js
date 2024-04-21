// DropdownButton.js

import React, { useState } from 'react';
import '../App.scss'; // Import the SCSS file with styles

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Sort
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {/* Dropdown menu items */}
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
