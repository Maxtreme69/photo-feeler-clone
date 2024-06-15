import React, { useState } from 'react';
import '../App.scss'; // Import the SCSS file with styles
import { RiArrowDownSFill } from 'react-icons/ri'; // Import arrow-down icon

const DropdownButton = ({ category, setSortBy, selectionCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('totalScore'); // Default to 'totalScore'

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortClick = (sortBy) => {
    setSortBy(sortBy); // Set the sorting option
    setActiveSort(sortBy); // Set the active sort option
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
            <li className="dropdown-category-header">{category}</li>
            <li
              className={`dropdown-menu ${activeSort === 'totalScore' ? 'active' : ''}`}
              onClick={() => handleSortClick('totalScore')}
            >
              Total Score
            </li>
            {selectionCategories.map((selection, index) => (
              <li
                key={index}
                className={`dropdown-menu ${activeSort === selection ? 'active' : ''}`}
                onClick={() => handleSortClick(selection)}
              >
                {selection.charAt(0).toUpperCase() + selection.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
