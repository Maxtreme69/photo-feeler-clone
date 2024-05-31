import React, { useState, useContext, useEffect } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent.js';
import CustomDropdown from '../Components/CustomDropdown.js';
import { SubmissionDataContext } from '../Context/SubmissionDataContext.js';

const RatedPhotos = () => {
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const { submissionDataList } = useContext(SubmissionDataContext);
  const [hashedDataList, setHashedDataList] = useState([]);

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
    console.log('submissionDataList:', submissionDataList);
  }, [submissionDataList]);

  useEffect(() => {
    const selectedData = hashedDataList.find(data => data.selectedCategory === selectedCategory.toLowerCase());
    if (selectedData) {
      setSelectedCategory(selectedData.selectedCategory);
    }
  }, [selectedCategory, hashedDataList]);

  const handleCategorySelect = (selectedOption) => {
    setSelectedCategory(selectedOption.toLowerCase());
  };

  const getVoteCountsAndRatings = () => {
    const voteCounts = {};
    const ratingsMap = {};
    const imageMap = {};

    hashedDataList.forEach(data => {
      if (data.selectedCategory === selectedCategory.toLowerCase()) {
        const normalizedOption = data.hash;

        voteCounts[normalizedOption] = (voteCounts[normalizedOption] || 0) + 1;

        if (!ratingsMap[normalizedOption]) {
          ratingsMap[normalizedOption] = { ...data.selections };
        } else {
          for (const key in data.selections) {
            ratingsMap[normalizedOption][key] += data.selections[key];
          }
        }

        if (!imageMap[normalizedOption]) {
          imageMap[normalizedOption] = data.selectedOption;
        }
      }
    });

    for (const image in ratingsMap) {
      for (const key in ratingsMap[image]) {
        ratingsMap[image][key] = ratingsMap[image][key] / voteCounts[image];
      }
    }

    return { voteCounts, ratingsMap, imageMap };
  };

  const { voteCounts, ratingsMap, imageMap } = getVoteCountsAndRatings();

  return (
    <div>
      <div style={{ width: '267px', padding: '20px 0 0 20px' }}>
        <CustomDropdown
          options={['DATING', 'SOCIAL', 'BUSINESS']}
          selectedOption={selectedCategory.toUpperCase()}
          onOptionSelect={handleCategorySelect}
        />
      </div>
      {hashedDataList.length > 0 && (
        <div className="image-cards" style={{ marginTop: '20px' }}>
          {Object.keys(voteCounts).map((image, index) => (
            <ImageCardComponent
              key={`${image}-${selectedCategory}`}
              image={imageMap[image]}
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
