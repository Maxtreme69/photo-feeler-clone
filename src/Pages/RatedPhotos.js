// RatedPhotos.js
import React, { useState, useContext } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent';
import CustomDropdown from '../Components/CustomDropdown';
import { SubmissionDataContext } from '../Context/SubmissionDataContext';
import CommentComponent from '../Components/CommentComponent';

const RatedPhotos = () => {
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const { submissionDataList, setSubmissionDataList } = useContext(SubmissionDataContext);

  const handleSubmissionData = (data) => {
    setSubmissionDataList((prevList) => [...prevList, data]);
  };

  const addTestData = () => {
    const newTestData = {
      selectedOption: 'sample_image.jpg',
      selectedCategory: 'dating',
      selections: {
        smart: 1,
        trustworthy: 2,
        attractive: 3,
      },
    };
    setSubmissionDataList((prevList) => [...prevList, newTestData]);
  };

  return (
    <div>
      {/* <div style={{ width: '267px', padding: '20px 0 0 20px' }}>
        <CustomDropdown
          options={['DATING', 'SOCIAL', 'BUSINESS']}
          selectedOption={selectedCategory.toUpperCase()}
          onOptionSelect={handleCategorySelect}
        />
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
      <div>
        
      </div>
    </div>
  );
};

export default RatedPhotos;
