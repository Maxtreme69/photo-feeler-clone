import React, { useState, useContext, useEffect } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent.js';
import CustomDropdown from '../Components/CustomDropdown.js';
import Modal from '../Components/Modal.js';
import { SubmissionDataContext } from '../Context/SubmissionDataContext.js';
import DropdownButton from '../Components/DropDownButton.js';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence from Framer Motion

const RatedPhotos = () => {
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const { submissionDataList } = useContext(SubmissionDataContext);
  const [hashedDataList, setHashedDataList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageRatings, setSelectedImageRatings] = useState(null);
  const [sortBy, setSortBy] = useState('category');
  const [selectionCategories, setSelectionCategories] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [previousCategory, setPreviousCategory] = useState('dating');

  const generateHash = async (blobUrl) => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  useEffect(() => {
    const hashImages = async () => {
      const updatedDataList = await Promise.all(submissionDataList.map(async (data) => {
        if (data.selectedOption.startsWith('blob:')) {
          const hash = await generateHash(data.selectedOption);
          return { ...data, hash };
        }
        return { ...data, hash: data.selectedOption };
      }));
      setHashedDataList(updatedDataList);
    };

    hashImages();
  }, [submissionDataList]);

  useEffect(() => {
    console.log("isSorting", isSorting);
    const selectedData = hashedDataList.find(data => data.selectedCategory === selectedCategory.toLowerCase());
    if (selectedData) {
      setSelectedCategory(selectedData.selectedCategory);
      const selections = selectedData.selections;
      setSelectionCategories(Object.keys(selections));
    }
  }, [selectedCategory, hashedDataList]);

  const handleCategorySelect = (selectedOption) => {
    if (selectedCategory.toLowerCase() !== selectedOption.toLowerCase()) {
      setIsSorting(false); // Disable sorting animation when changing category
      setPreviousCategory(selectedCategory);
      setSelectedCategory(selectedOption.toLowerCase());
    }
  };

  const getVoteCountsAndRatings = () => {
    const voteCounts = {};
    const ratingsMap = {};

    hashedDataList.forEach(data => {
      if (data.selectedCategory === selectedCategory.toLowerCase()) {
        const normalizedOption = data.hash;

        if (!voteCounts[normalizedOption]) {
          voteCounts[normalizedOption] = 1;
          ratingsMap[normalizedOption] = { ...data.selections };
        } else {
          voteCounts[normalizedOption] += 1;
          for (const key in data.selections) {
            ratingsMap[normalizedOption][key] += data.selections[key];
          }
        }
      }
    });

    // Calculate average ratings
    for (const image in ratingsMap) {
      for (const key in ratingsMap[image]) {
        ratingsMap[image][key] = ratingsMap[image][key] / voteCounts[image];
      }
    }

    return { voteCounts, ratingsMap };
  };

  const getTotalScore = (ratings) => {
    let totalScore = 0;
    for (const key in ratings) {
      totalScore += ratings[key];
    }
    return totalScore;
  };

  const { voteCounts, ratingsMap } = getVoteCountsAndRatings();

  const handleImageClick = (image, ratings) => {
    setSelectedImage(image);
    setSelectedImageRatings(ratings);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
    setSelectedImageRatings(null);
  };

  const handleSortByChange = (newSortBy) => {
    setIsSorting(true); // Indicate that sorting has occurred
    setSortBy(newSortBy);
    console.log("isSorting", isSorting);
  };

  // Sort images based on the sorting option
  //  sorts the images alphabetically by their hash values using localeCompare.
  const sortedImages = Object.keys(voteCounts).sort((a, b) => {
    if (sortBy === 'category') {
      return a.localeCompare(b);
    // When sortBy is set to 'totalScore', the function calculates the total score 
    // for each image using getTotalScore. It then sorts the images in descending 
    // order based on their total scores.  
    } else if (sortBy === 'totalScore') {
      const totalScoreA = getTotalScore(ratingsMap[a]);
      const totalScoreB = getTotalScore(ratingsMap[b]);
      return totalScoreB - totalScoreA;
    } else {
      // Sort images by specific ratings
      const ratingA = ratingsMap[a][sortBy] || 0;
      const ratingB = ratingsMap[b][sortBy] || 0;
      return ratingB - ratingA;
    }
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'initial', gap: '50px' }}>
        <div style={{ width: '267px', padding: '20px 0 0 20px' }}>
          <CustomDropdown
            options={['DATING', 'SOCIAL', 'BUSINESS']}
            selectedOption={selectedCategory.toUpperCase()}
            onOptionSelect={handleCategorySelect}
          />
        </div>
        <div style={{ marginTop: '13.5px' }}>
        <DropdownButton 
          category={selectedCategory.toUpperCase()} 
          setSortBy={handleSortByChange} 
          selectionCategories={selectionCategories} 
        />
        </div>
      </div>
   
      {hashedDataList.length > 0 && (
        <motion.div
          className="image-cards"
          style={{ marginTop: '20px', cursor: 'pointer' }}
          layout // Enable layout animations
        >
          <AnimatePresence>
            {sortedImages.map((image, index) => (
              <motion.div
                key={`${image}-${selectedCategory}`}
                layout={isSorting ? true : 'position'} // Enable layout animations conditionally based on isSorting
                initial={{ opacity: isSorting ? 0 : 1, y: isSorting ? 20 : 0 }} // Initial state based on sorting
                animate={{ opacity: 1, y: 0 }} // Animate to final state
                exit={{ opacity: 0, y: 0 }} // Animate exit state
                transition={{ duration: 0.5 }} // Transition duration for each item
              >
                <ImageCardComponent
                  image={image}
                  category={selectedCategory.toUpperCase()}
                  ratings={ratingsMap[image]}
                  votes={voteCounts[image]}
                  onClick={() => handleImageClick(image, ratingsMap[image])}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          onClose={closeModal}
          image={selectedImage}
          ratings={selectedImageRatings}
          category={selectedCategory}
        />
      )}
      <div style={{ marginTop: '60vh' }}></div>
    </div>
  );
};

export default RatedPhotos;
