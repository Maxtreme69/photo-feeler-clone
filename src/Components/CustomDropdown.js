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
        <span className="custom-dropdown-text">
          {activeButton || selectedOption}
        </span>
        <FontAwesomeIcon icon={faSortDown} className="custom-dropdown-icon" />
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
