import React, { useState, useEffect, useContext } from 'react';
import CustomDropdown from './CustomDropdown.js';
import CommentComponent from './CommentComponent.js';
import Rating from './Rating.js';
import { AppContext } from '../Context/AppContext.js';

const ImageSectionVote = ({ activeButton, onSubmit, reset }) => {
  const { myTestsData, testSizeData, selectedGenderDropdown } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submittedImages, setSubmittedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [voteReceived, setVoteReceived] = useState(false);
  const [selections, setSelections] = useState({});
  const [submissionData, setSubmissionData] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [imageDetails, setImageDetails] = useState(null);
  const [imageDetailsSubmit, setImageDetailsSubmit] = useState(null);
  const [maleToggle, setMaleToggle] = useState(true);
  const [femaleToggle, setFemaleToggle] = useState(true);
  const [selectedGender, setSelectedGender] = useState('both');

  useEffect(() => {
    if (testSizeData.length > 0) {
      const lastEntry = testSizeData[testSizeData.length - 1];
      if (lastEntry.selectedGender) {
        setSelectedGender(lastEntry.selectedGender);
        setMaleToggle(lastEntry.selectedGender === 'male' || lastEntry.selectedGender === 'both');
        setFemaleToggle(lastEntry.selectedGender === 'female' || lastEntry.selectedGender === 'both');
        setSelectedCategory(lastEntry.selectedCategory.toLowerCase());
      }
    }
  }, [testSizeData]);

  const initialSelections = {
    dating: { smart: null, trustworthy: null, attractive: null },
    social: { confident: null, authentic: null, fun: null },
    business: { competent: null, likable: null, influential: null },
  };

  useEffect(() => {
    setSelectedOption(getRandomImage(selectedCategory, getSelectedGender()));
  }, [selectedCategory, maleToggle, femaleToggle, submittedImages]);

  useEffect(() => {
    if (reset) {
      setIsSubmitDisabled(true);
      setVoteReceived(false);
    }
  }, [reset]);

  useEffect(() => {
    setSelections(initialSelections[selectedCategory.toLowerCase()]);
  }, [selectedCategory]);

  useEffect(() => {
    if (imageDetails) {
      if (selectedCategory === 'business') {
        setImageDetailsSubmit(imageDetails.businessTitle);
      } else if (selectedCategory === 'social') {
        setImageDetailsSubmit(imageDetails.multiplePeople);
      } else if (selectedCategory === 'dating') {
        setImageDetailsSubmit(imageDetails.multiplePeopleDating);
      } else {
        setImageDetailsSubmit(null);
      }
    } else {
      setImageDetailsSubmit(null);
    }
  }, [imageDetails, selectedCategory, imageDetailsSubmit]);

  const getSelectedGender = () => {
    if (maleToggle && femaleToggle) return 'both';
    if (maleToggle) return 'males';
    if (femaleToggle) return 'females';
    return 'none';
  };

  const getRandomImage = (category, gender) => {
    const imagesContext = require.context('../images', true, /\.(png|jpe?g|gif|webp)$/);

    let availableImages = [];

    if (category.toLowerCase() === 'dating') {
      if (gender === 'both') {
        const maleImages = imagesContext.keys().filter((key) => key.startsWith(`./dating/males`));
        const femaleImages = imagesContext.keys().filter((key) => key.startsWith(`./dating/females`));
        availableImages = [...maleImages, ...femaleImages];
      } else if (gender !== 'none') {
        availableImages = imagesContext.keys().filter((key) => key.startsWith(`./dating/${gender}`));
      }
    } else {
      availableImages = imagesContext.keys().filter((key) => key.startsWith(`./${category.toLowerCase()}`));
    }

    const myTestsDataImages = myTestsData.filter(item => item.category.toLowerCase() === category.toLowerCase())
      .map(item => ({
        category: item.category,
        gender: item.gender,
        image: item.image
      }));

    availableImages = [...availableImages, ...myTestsDataImages];

    const unusedImages = availableImages.filter((img) => {
      const imgUrl = typeof img === 'string' ? img : URL.createObjectURL(img.image || img);
      const matchedTestData = testSizeData.find(entry => entry.originalFileName === (img.image ? img.image.name : img.name));
      if (matchedTestData) {
        if (gender === 'males' && matchedTestData.selectedGenderDropdown === 'male') {
          return !submittedImages.includes(imgUrl);
        }
        if (gender === 'females' && matchedTestData.selectedGenderDropdown === 'female') {
          return !submittedImages.includes(imgUrl);
        }
        if (gender === 'both') {
          return !submittedImages.includes(imgUrl);
        }
        return false;
      }
      return !submittedImages.includes(imgUrl);
    });

    if (unusedImages.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    const selectedImage = unusedImages[randomIndex];

    const selectedImageBlobUrl = typeof selectedImage === 'string' ? selectedImage : URL.createObjectURL(selectedImage.image || selectedImage);
    const matchedTestData = testSizeData.find(entry => entry.originalFileName === (selectedImage.image ? selectedImage.image.name : selectedImage.name));

    if (matchedTestData) {
      console.log('Match found for image:', selectedImage.name, 'SelectedGenderDropdown:', matchedTestData.selectedGenderDropdown);
      setImageDetails(matchedTestData);
    } else {
      setImageDetails(null);
    }

    return {
      url: selectedImageBlobUrl.startsWith('blob:') ? selectedImageBlobUrl : imagesContext(selectedImageBlobUrl)
    };
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
      setSubmittedImages((prevSubmittedImages) => [...prevSubmittedImages, selectedOption.url]);
      const newSelectedOption = getRandomImage(selectedCategory, getSelectedGender());
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
      }, 400);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', marginBottom: '28.5vh' }}>
      <div style={{ display: 'flex' }}>
        <div className="image-section-vote" style={{ marginRight: '20px' }}>
          <div className="dropdown-container">
            <CustomDropdown
              options={['DATING', 'SOCIAL', 'BUSINESS']}
              selectedOption={selectedOption?.url}
              onOptionSelect={handleOptionSelect}
              activeButton={selectedCategory.toUpperCase()}
            />
          </div>
          <div className="container">
            <div className="card" style={{ transform: `rotateY(${angle}deg)` }}>
              {selectedOption && <img src={selectedOption.url} alt="Selected Option" style={{ width: '100%', height: '100%' }} />}
            </div>
            {imageDetails && selectedCategory === 'business' ? (
              <div>
                <p className="image-details-dating">TITLE</p>
                <p className="image-details">{imageDetails.businessTitle}</p>
              </div>
            ) : imageDetails && (selectedCategory === 'dating' || selectedCategory === 'social') && (
              <div>
                {imageDetails.multiplePeopleDating && <p className="image-details-dating">SUBJECT</p> || imageDetails.multiplePeople && <p className="image-details-dating">SUBJECT</p>}
                <p className="image-details">{selectedCategory === 'dating' ? imageDetails.multiplePeopleDating : imageDetails.multiplePeople}</p>
              </div>
            )}
          </div>
        </div>
        <div>
          {selectedCategory && (
            <Rating 
              selectedCategory={selectedCategory} 
              onSelectionChange={handleRatingSelectionChange} 
              voteReceived={voteReceived} 
              reset={reset} 
              selections={selections}
            />
          )}
          <CommentComponent 
            onSubmit={handleSubmit} 
            isSubmitDisabled={isSubmitDisabled} 
            reset={reset}
            selections={selections} 
            selectedOption={selectedOption?.url} 
            selectedCategory={selectedCategory}
            handleFlip={handleFlip}
            imageDetailsSubmit={imageDetailsSubmit}
            maleToggle={maleToggle}
            femaleToggle={femaleToggle}
            setMaleToggle={setMaleToggle}
            setFemaleToggle={setFemaleToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSectionVote;
