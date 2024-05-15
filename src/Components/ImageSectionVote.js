import React, { useState, useEffect } from 'react';
import CustomDropdown from '../Components/CustomDropdown';

const ImageSectionVote = () => {
  const [activeButton, setActiveButton] = useState('DATING'); // Set initial activeButton state
  const [selectedOption, setSelectedOption] = useState(null);
  const [submittedImages, setSubmittedImages] = useState([]);

  useEffect(() => {
    setSelectedOption(getRandomImage(activeButton));
  }, [activeButton]);

  const getRandomImage = (category) => {
    const imagesContext = require.context('../images', true, /\.(png|jpe?g|gif|webp|jpg)$/);
    const availableImages = imagesContext.keys().filter((key) => key.startsWith(`./${category.toLowerCase()}`));
    const unusedImages = availableImages.filter((img) => !submittedImages.includes(img));
    if (unusedImages.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    return imagesContext(unusedImages[randomIndex]);
  };

  const handleImageSubmit = () => {
    if (selectedOption) {
      setSubmittedImages([...submittedImages, selectedOption]);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(null); // Reset selectedOption when a new option is clicked
    setActiveButton(option); // Update activeButton to the newly selected option
  };

  return (
    <div className="image-section-vote">
      <div className="dropdown-container">
        <CustomDropdown
          options={['DATING', 'SOCIAL', 'BUSINESS']}
          selectedOption={selectedOption}
          onOptionSelect={setSelectedOption}
          activeButton={activeButton}
          onOptionClick={handleOptionClick} // Pass the handleOptionClick function to CustomDropdown
        />
      </div>
      <div className="image-container">
        {selectedOption && <img src={selectedOption} alt="Selected Option" />}
      </div>
      <button className="submit-button" onClick={handleImageSubmit}>
        Submit Vote
      </button>
    </div>
  );
};

export default ImageSectionVote;
