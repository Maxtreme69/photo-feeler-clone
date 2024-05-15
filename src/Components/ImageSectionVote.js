import React, { useState, useEffect } from 'react';
import CustomDropdown from './CustomDropdown';

const ImageSectionVote = ({ activeButton }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submittedImages, setSubmittedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(activeButton.toUpperCase());

  useEffect(() => {
    setSelectedOption(getRandomImage(selectedCategory));
  }, [selectedCategory]);

  const getRandomImage = (category) => {
    const imagesContext = require.context('../images', true, /\.(png|jpe?g|gif|webp)$/);
    const availableImages = imagesContext.keys().filter((key) => key.startsWith(`./${category.toLowerCase()}`));
    const unusedImages = availableImages.filter((img) => !submittedImages.includes(img));
    if (unusedImages.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    return imagesContext(unusedImages[randomIndex]);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(null); // Reset selectedOption when a new option is selected
    setSelectedCategory(option.toLowerCase()); // Update selectedCategory to the newly selected option
  };

  return (
    <div className="image-section-vote">
      <div className="dropdown-container">
        <CustomDropdown
          options={['DATING', 'SOCIAL', 'BUSINESS']}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect} // Use handleOptionSelect to update selectedCategory
          activeButton={selectedCategory.toUpperCase()} // Pass selectedCategory as activeButton
        />
      </div>
      <div className="image-container">
        {selectedOption && <img src={selectedOption} alt="Selected Option" />}
      </div>
    </div>
  );
};

export default ImageSectionVote;
