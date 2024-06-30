import React, { useState } from 'react';
import '../App.scss'; // Import the SCSS file with styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiArrowDownSFill} from 'react-icons/ri'; // Import arrow-down icon
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'; // Import the arrow-down icon

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
      <span style={{ paddingRight: '15px' }}> <FontAwesomeIcon icon={faArrowDownWideShort} className="sort-icon" /> Sort</span> <RiArrowDownSFill style={{ color: '#333' }} />
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