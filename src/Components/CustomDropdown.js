import React, { useState } from 'react';

const CustomDropdown = ({ options, onOptionSelect, activeButton, onOptionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    if (option !== activeButton) {
      onOptionSelect(option);
      setIsOpen(false);
      if (typeof onOptionClick === 'function') {
        onOptionClick(option); // Call the onOptionClick function if it's a function
      }
    }
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
              className={`custom-dropdown-option ${option === activeButton ? 'disabled' : ''}`}
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
