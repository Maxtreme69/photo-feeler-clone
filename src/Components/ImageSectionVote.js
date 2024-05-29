import React, { useState, useEffect, useContext } from 'react';
import CustomDropdown from './CustomDropdown.js';
import CommentComponent from './CommentComponent.js';
import Rating from './Rating.js';
import { AppContext } from '../Context/AppContext.js'; // Import AppContext

const ImageSectionVote = ({ activeButton, selectedGender, onSubmit, reset }) => {
  const { myTestsData } = useContext(AppContext); // Access myTestsData from context
  const [selectedOption, setSelectedOption] = useState(null);
  const [submittedImages, setSubmittedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [voteReceived, setVoteReceived] = useState(false);
  const [selections, setSelections] = useState({});
  const [submissionData, setSubmissionData] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false); // Track flipping state

  // Define initial states for each category
  const initialSelections = {
    dating: {
      smart: null,
      trustworthy: null,
      attractive: null,
    },
    social: {
      confident: null,
      authentic: null,
      fun: null,
    },
    business: {
      competent: null,
      likable: null,
      influential: null,
    },
  };

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

  // Update selections based on selectedCategory
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

    // Convert myTestsData images to object URLs and filter by category
    const myTestsDataImages = myTestsData
      .filter(item => item.category.toLowerCase() === category.toLowerCase())
      .map(item => URL.createObjectURL(item.image));

    availableImages = [...availableImages, ...myTestsDataImages];

    const unusedImages = availableImages.filter((img) => !submittedImages.includes(img));
    if (unusedImages.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    console.log("image", unusedImages);

    const selectedImage = unusedImages[randomIndex];
    // If selectedImage is a file object URL, we don't need to resolve it with imagesContext
    return selectedImage.startsWith('blob:') ? selectedImage : imagesContext(selectedImage);
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
      onSubmit(data); // Pass data up to parent
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
        setIsFlipping(false); // Reset flipping state
      }); // Set the delay time in milliseconds (e.g., 400ms)
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
            selectedOption={selectedOption} // Pass selectedOption as a prop
            selectedCategory={selectedCategory}
            handleFlip={handleFlip} // Pass the handleFlip function as a prop
          />
        </div>
      </div>

      <div>
        <h3>Image Array from AppContext:</h3>
        <ul>
          {myTestsData.map((data, index) => {
            const imageUrl = URL.createObjectURL(data.image); // Create object URL for the image file
            return (
              <li key={index}>
                <img src={imageUrl} alt={`Image ${index}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <span>{data.category}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImageSectionVote;
