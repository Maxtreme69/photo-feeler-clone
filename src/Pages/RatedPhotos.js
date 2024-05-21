import React, { useState, useEffect, useContext } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent';
import CustomDropdown from '../Components/CustomDropdown';
import { images, imagePathsToKeys } from '../ImageImports';
import imageRatings from '../imageRatings';
import { SubmissionDataContext } from '../Context/SubmissionDataContext'; // Import the context

const RatedPhotos = ({ submissionData }) => {
  const [selectedCategory, setSelectedCategory] = useState('dating'); // Default to 'dating'
  const [imagesList, setImagesList] = useState(images[selectedCategory]);
  const { submissionDataList, setSubmissionDataList } = useContext(SubmissionDataContext); // Use context

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.toLowerCase());
    setImagesList(images[category.toLowerCase()]);
  };

  const getRatingsForImage = (image, category) => {
    const categoryRatings = imageRatings[category];
    const imageKey = imagePathsToKeys[category][image];
    return categoryRatings ? categoryRatings[imageKey] : null;
  };

  useEffect(() => {
    if (submissionData) {
      console.log('New submission data received:', submissionData);
      setSubmissionDataList((prevList) => {
        const isDuplicate = prevList.some(
          (data) =>
            data.selectedOption === submissionData.selectedOption &&
            data.selectedCategory === submissionData.selectedCategory
        );
        if (isDuplicate) {
          return prevList;
        }
        const updatedList = [...prevList, submissionData];
        console.log('Updated submission data list:', updatedList);
        return updatedList;
      });
    }
  }, [submissionData, setSubmissionDataList]); // Include setSubmissionDataList as a dependency

  const addTestData = () => {
    const newTestData = {
      selectedOption: 'sample_image.jpg',
      selectedCategory: 'dating',
      selections: {
        smart: 1,
        trustworthy: 2,
        attractive: 3
      }
    };
    setSubmissionDataList((prevList) => [...prevList, newTestData]);
  };

  return (
    <div>
      <div style={{ width: '267px', padding: '20px 0 0 20px' }}>
        <CustomDropdown
          options={['DATING', 'SOCIAL', 'BUSINESS']}
          selectedOption={selectedCategory.toUpperCase()}
          onOptionSelect={handleCategorySelect}
        />
      </div>
      {/* <div className="image-cards">
        {imagesList.map((image, index) => (
          <ImageCardComponent
            key={index}
            image={image}
            category={selectedCategory.toUpperCase()}
            ratings={getRatingsForImage(image, selectedCategory)}
            className="image-card"
          />
        ))}
      </div> */}
      {submissionDataList.length > 0 && (
        <div className="image-cards" style={{ marginTop: '20px' }}>
          {submissionDataList.map((data, index) => (
            <ImageCardComponent
              key={`${data.selectedOption}-${data.selectedCategory}`}
              image={data.selectedOption}
              category={data.selectedCategory.toUpperCase()}
              ratings={data.selections}
              className="image-card"
            />
          ))}
        </div>
      )}
      <div>
        <h3>Submission Data List:</h3>
        <pre>{JSON.stringify(submissionDataList, null, 2)}</pre>
        <button onClick={addTestData}>Add Test Submission</button>
      </div>
    </div>
  );
};

export default RatedPhotos;
