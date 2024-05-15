import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedOption, onOptionSelect, activeButton, onOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
    onOptionClick(option); // Call the onOptionClick function passed from ImageSectionVote
  };

  return (
    <div className="custom-dropdown">
      <div className="custom-dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {activeButton}
      </div>
      {isOpen && (
        <div className="custom-dropdown-list">
          {options.map((option, index) => (
            <div
              key={index}
              className="custom-dropdown-option"
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
