import React, { useState } from 'react';
import '../App.scss'; // Import the SCSS file with styles
import { RiArrowDownSFill } from 'react-icons/ri'; // Import arrow-down icon

const DropdownButton = ({ category, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortClick = (sortBy) => {
    setSortBy(sortBy); // Set the sorting option
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button-sort" onClick={toggleDropdown}>
        Sort <RiArrowDownSFill className="sort-icon" />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li onClick={() => handleSortClick('category')}>{category}</li>
            <li onClick={() => handleSortClick('totalScore')}>Total Score</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;