import React, { useState, useContext, useEffect } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent';
import CustomDropdown from '../Components/CustomDropdown';
import { SubmissionDataContext } from '../Context/SubmissionDataContext';
import CommentComponent from '../Components/CommentComponent';

const RatedPhotos = () => {
  const [selectedCategory, setSelectedCategory] = useState('dating');
  const { submissionDataList, setSubmissionDataList } = useContext(SubmissionDataContext);

  useEffect(() => {
    const selectedData = submissionDataList.find(data => data.selectedCategory === selectedCategory.toLowerCase());
    if (selectedData) {
      setSelectedCategory(selectedData.selectedCategory);
    }
  }, [selectedCategory, submissionDataList]);

  const handleCategorySelect = (selectedOption) => {
    setSelectedCategory(selectedOption.toLowerCase());
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
      {submissionDataList.length > 0 && (
        <div className="image-cards" style={{ marginTop: '20px' }}>
          {submissionDataList.map((data, index) => {
            if (data.selectedCategory === selectedCategory.toLowerCase()) {
              return (
                <ImageCardComponent
                  key={`${data.selectedOption}-${data.selectedCategory}`}
                  image={data.selectedOption}
                  category={data.selectedCategory.toUpperCase()}
                  ratings={data.selections}
                  className="image-card"
                />
              );
            }
            return null; // Skip rendering if not the selected category
          })}
        </div>
      )}
      {/* <div>
        <h3>Submission Data List:</h3>
        <pre>{JSON.stringify(submissionDataList, null, 2)}</pre>
        <button onClick={addTestData}>Add Test Submission</button>
      </div> */}
    </div>
  );
};

export default RatedPhotos;
