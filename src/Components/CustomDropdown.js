// src/Components/CustomDropdown.js

import React, { useState } from 'react';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomDropdown = ({ options, selectedOption, onOptionSelect, activeButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    if (option !== selectedOption) {
      onOptionSelect(option);
      console.log("Selected Option", selectedOption);
      setIsOpen(false);
    }
  };

  return (
    <div className="custom-dropdown">

      <div className="custom-dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {activeButton || selectedOption}          
        <FontAwesomeIcon icon={faSortDown} style={{ marginLeft: '8px', color: 'white', left: '20px' }} />
      </div>
      {isOpen && (
        <div className="custom-dropdown-list">
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom-dropdown-option ${option === selectedOption ? 'disabled' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;