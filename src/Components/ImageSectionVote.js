import React, { useState, useEffect } from 'react';
import CustomDropdown from './CustomDropdown';
import CommentComponent from './CommentComponent';
import Rating from './Rating';

const ImageSectionVote = ({ activeButton, selectedGender, onSubmit, reset }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submittedImages, setSubmittedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(activeButton.toUpperCase());
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [voteReceived, setVoteReceived] = useState(false);
  const [selections, setSelections] = useState({
    smart: null,
    trustworthy: null,
    attractive: null,
  });

  useEffect(() => {
    setSelectedOption(getRandomImage(selectedCategory, selectedGender));
    console.log("Current image:", selectedOption); // Log the current image
  }, [selectedCategory, selectedGender, submittedImages]);

  useEffect(() => {
    if (reset) {
      setIsSubmitDisabled(true);
      setVoteReceived(false);
    }
  }, [reset]);

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
    console.log("image", unusedImages)
    return imagesContext(unusedImages[randomIndex]);
  };

  const handleOptionSelect = (option) => {
    const newCategory = option.toLowerCase();
    if (newCategory !== selectedCategory) {
      setSelectedOption(null);
      setSelectedCategory(newCategory);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmittedImages((prevSubmittedImages) => [...prevSubmittedImages, selectedOption]);
      const newSelectedOption = getRandomImage(selectedCategory, selectedGender);
      setSelectedOption(newSelectedOption);
      setVoteReceived(true);
      onSubmit();
    }
  };

  const handleRatingSelectionChange = (newSelections) => {
    setSelections(newSelections);
    const allCategoriesSelected = Object.values(newSelections).every(selection => selection !== null);
    setIsSubmitDisabled(!allCategoriesSelected);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div style={{ display: 'flex' }}>
        <div className="image-section-vote" style={{ marginRight: '20px' }}>
          <div className="dropdown-container">
            <CustomDropdown
              options={['DATING', 'SOCIAL', 'BUSINESS']}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect}
              activeButton={selectedCategory.toUpperCase()}
            />
          </div>
          <div className="image-container">
            {selectedOption && <img src={selectedOption} alt="Selected Option" />}
          </div>
        </div>
        <div>
          <Rating 
            selectedCategory={selectedCategory} 
            onSelectionChange={handleRatingSelectionChange} 
            voteReceived={voteReceived} 
            reset={reset} 
            selections={selections}
          />
          <CommentComponent 
            onSubmit={handleSubmit} 
            isSubmitDisabled={isSubmitDisabled} 
            reset={reset}
            selections={selections} 
            selectedOption={selectedOption} // Pass selectedOption as a prop
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSectionVote;
