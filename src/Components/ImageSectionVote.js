import React, { useState, useEffect, useContext } from 'react';
import CustomDropdown from './CustomDropdown.js';
import CommentComponent from './CommentComponent.js';
import Rating from './Rating.js';
import { AppContext } from '../Context/AppContext.js';
import ImageCardComponent from './ImageCardComponent.js';

const ImageSectionVote = ({ activeButton, selectedGender, onSubmit, reset }) => {
  const { myTestsData, testSizeData } = useContext(AppContext); // Destructure testSizeData from context
  const [selectedOption, setSelectedOption] = useState(null);
  const [submittedImages, setSubmittedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [voteReceived, setVoteReceived] = useState(false);
  const [selections, setSelections] = useState({});
  const [submissionData, setSubmissionData] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [imageDetails, setImageDetails] = useState(null); // State for storing image details

  const initialSelections = {
    dating: { smart: null, trustworthy: null, attractive: null },
    social: { confident: null, authentic: null, fun: null },
    business: { competent: null, likable: null, influential: null },
  };

  useEffect(() => {
    setSelectedOption(getRandomImage(selectedCategory, selectedGender));
  }, [selectedCategory, selectedGender, submittedImages]);

  useEffect(() => {
    if (reset) {
      setIsSubmitDisabled(true);
      setVoteReceived(false);
    }
  }, [reset]);

  useEffect(() => {
    setSelections(initialSelections[selectedCategory.toLowerCase()]);
  }, [selectedCategory]);

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

    const myTestsDataImages = myTestsData
      .filter(item => item.category.toLowerCase() === category.toLowerCase())
      .map(item => item.image); // Use original image objects

    availableImages = [...availableImages, ...myTestsDataImages];

    const unusedImages = availableImages.filter((img) => !submittedImages.includes(typeof img === 'string' ? img : URL.createObjectURL(img)));
    if (unusedImages.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * unusedImages.length);

    const selectedImage = unusedImages[randomIndex];
    console.log('Selected image before blob URL:', selectedImage); // Log selected image before blob URL

    // Check for a match in testSizeData
    const matchedTestData = testSizeData.find(entry => entry.originalFileName === selectedImage.name);
    if (matchedTestData) {
      console.log('Match found for image:', selectedImage.name);
      setImageDetails(matchedTestData);
    } else {
      setImageDetails(null);
    }

    const selectedImageBlobUrl = typeof selectedImage === 'string' ? selectedImage : URL.createObjectURL(selectedImage);
    return selectedImageBlobUrl.startsWith('blob:') ? selectedImageBlobUrl : imagesContext(selectedImageBlobUrl);
  };

  const handleOptionSelect = (option) => {
    const newCategory = option.toLowerCase();
    if (newCategory !== selectedCategory) {
      setSelectedOption(null);
      setSelectedCategory(newCategory);
    }
  };

  const handleSubmit = (data) => {
    if (selectedOption) {
      setSubmittedImages((prevSubmittedImages) => [...prevSubmittedImages, selectedOption]);
      const newSelectedOption = getRandomImage(selectedCategory, selectedGender);
      setSelectedOption(newSelectedOption);
      setVoteReceived(true);
      onSubmit(data);
      setSubmissionData(data);
    }
  };

  const handleRatingSelectionChange = (newSelections) => {
    setSelections(newSelections);
    const allCategoriesSelected = Object.values(newSelections).every(selection => selection !== null);
    setIsSubmitDisabled(!allCategoriesSelected);
  };

  const handleFlip = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setAngle(prevAngle => prevAngle - 180);
      setTimeout(() => {
        setIsFlipping(false);
      }, 400); // Set the delay time to match the flip animation duration
    }
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
          <div className="container">
            <div className="card" style={{ transform: `rotateY(${angle}deg)` }}>
              {selectedOption && <img src={selectedOption} alt="Selected Option" style={{ width: '100%', height: '100%' }} />}
              {imageDetails && (
                <div className="image-details">
                  <p>Slider Value: {imageDetails.sliderValue}</p>
                  <p>Selected Gender: {imageDetails.selectedGender}</p>
                  <p>Dating Age: {imageDetails.datingAge}</p>
                  <p>Multiple People: {imageDetails.multiplePeople}</p>
                </div>
              )}
            </div>
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
            selectedOption={selectedOption} 
            selectedCategory={selectedCategory}
            handleFlip={handleFlip}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSectionVote;
