import React, { useState, useEffect } from 'react';
import CustomDropdown from './CustomDropdown';
import CommentComponent from './CommentComponent'; // Import CommentComponent
import Rating from './Rating';

const ImageSectionVote = ({ activeButton, datingGender, selectedGender, onSubmit }) => { // Add onSubmit prop
  const [selectedOption, setSelectedOption] = useState(null);
  const [submittedImages, setSubmittedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(activeButton.toUpperCase());

  useEffect(() => {
    setSelectedOption(getRandomImage(selectedCategory, selectedGender));
  }, [selectedCategory, selectedGender, submittedImages]);

  const getRandomImage = (category, gender) => {
    const imagesContext = require.context('../images', true, /\.(png|jpe?g|gif|webp)$/);

    let availableImages = [];

    if (category.toLowerCase() === 'dating') {
      if (gender === 'both') {
        const maleImages = imagesContext.keys().filter((key) => key.startsWith(`./dating/males`));
        const femaleImages = imagesContext.keys().filter((key) => key.startsWith(`./dating/females`));
        availableImages = [...maleImages, ...femaleImages];
      } else {
        availableImages = imagesContext.keys().filter((key) => key.startsWith(`./dating/${gender}`));
      }
    } else {
      availableImages = imagesContext.keys().filter((key) => key.startsWith(`./${category.toLowerCase()}`));
    }

    const unusedImages = availableImages.filter((img) => !submittedImages.includes(img));
    if (unusedImages.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    return imagesContext(unusedImages[randomIndex]);
  };

  const handleOptionSelect = (option) => {
    const newCategory = option.toLowerCase();
    if (newCategory !== selectedCategory) {
      setSelectedOption(null); // Reset selectedOption only if the category changes
      setSelectedCategory(newCategory); // Update selectedCategory to the newly selected option
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmittedImages((prevSubmittedImages) => [...prevSubmittedImages, selectedOption]);
      const newSelectedOption = getRandomImage(selectedCategory, selectedGender); // Get a new image
      setSelectedOption(newSelectedOption); // Update selectedOption with the new image
      onSubmit(); // Ensure onSubmit is called here
    }
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div style={{ display: 'flex'}}>
        <div className="image-section-vote" style={{ marginRight: '20px' }}>
          <div className="dropdown-container">
            {/* <p>Gender (Dating): {datingGender}</p>
            <p>Selected Gender: {selectedGender}</p> */}
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
          {/* <button onClick={handleSubmit}>Submit Vote</button> */}
        </div>
        <div>
          <Rating style={{ marginRight: '20px' }} />
          <CommentComponent onClickButton={handleSubmit} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
    );
  };

export default ImageSectionVote;