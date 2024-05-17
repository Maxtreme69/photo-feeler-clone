// src/Components/CustomDropdown.js

import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    if (option !== selectedOption) {
      onOptionSelect(option);
      setIsOpen(false);
    }
  };

  return (
    <div className="custom-dropdown">
      <div className="custom-dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select an option"}
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
