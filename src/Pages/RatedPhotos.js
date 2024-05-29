import React, { useState, useContext, useEffect } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent.js';
import CustomDropdown from '../Components/CustomDropdown.js';
import { SubmissionDataContext } from '../Context/SubmissionDataContext.js';

const RatedPhotos = () => {
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const { submissionDataList } = useContext(SubmissionDataContext);

  useEffect(() => {
    const selectedData = submissionDataList.find(data => data.selectedCategory === selectedCategory.toLowerCase());
    if (selectedData) {
      setSelectedCategory(selectedData.selectedCategory);
    }
  }, [selectedCategory, submissionDataList]);

  const handleCategorySelect = (selectedOption) => {
    setSelectedCategory(selectedOption.toLowerCase());
  };

  const getVoteCountsAndRatings = () => {
    const voteCounts = {};
    const ratingsMap = {};

    submissionDataList.forEach(data => {
      if (data.selectedCategory === selectedCategory.toLowerCase()) {
        voteCounts[data.selectedOption] = (voteCounts[data.selectedOption] || 0) + 1;

        if (!ratingsMap[data.selectedOption]) {
          ratingsMap[data.selectedOption] = { ...data.selections };
        } else {
          // Accumulate ratings for each property
          for (const key in data.selections) {
            ratingsMap[data.selectedOption][key] += data.selections[key];
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

  const { voteCounts, ratingsMap } = getVoteCountsAndRatings();

  return (
    <div>
      <div style={{ width: '267px', padding: '20px 0 0 20px' }}>
        <CustomDropdown
          options={['DATING', 'SOCIAL', 'BUSINESS']}
          selectedOption={selectedCategory.toUpperCase()}
          onOptionSelect={handleCategorySelect}
        />
      </div>
      {submissionDataList.length > 0 && (
        <div className="image-cards" style={{ marginTop: '20px' }}>
          {Object.keys(voteCounts).map((image, index) => (
            <ImageCardComponent
              key={`${image}-${selectedCategory}`}
              image={image}
              category={selectedCategory.toUpperCase()}
              ratings={ratingsMap[image]}
              votes={voteCounts[image]}
              className="image-card"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RatedPhotos;
