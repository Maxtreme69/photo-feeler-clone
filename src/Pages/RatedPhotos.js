import React, { useState } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent';
import CustomDropdown from '../Components/CustomDropdown';
import { images, imagePathsToKeys } from '../ImageImports';
import imageRatings from '../imageRatings'; // Import the image ratings

const RatedPhotos = ({ submissionData }) => {
  const [selectedCategory, setSelectedCategory] = useState('dating'); // Default to 'dating'
  const [imagesList, setImagesList] = useState(images[selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.toLowerCase());
    setImagesList(images[category.toLowerCase()]);
  };

  const getRatingsForImage = (image, category) => {
    const categoryRatings = imageRatings[category];
    const imageKey = imagePathsToKeys[category][image];
    return categoryRatings ? categoryRatings[imageKey] : null;
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
      <div className="image-cards">
        {imagesList.map((image, index) => (
          <ImageCardComponent
            key={index}
            image={image}
            category={selectedCategory.toUpperCase()}
            ratings={getRatingsForImage(image, selectedCategory)}
            className="image-card" // Add className here
          />
        ))}
      </div>
      {submissionData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Latest Submission Data:</h3>
          <p>Selected Option: {submissionData.selectedOption}</p>
          <p>Comment: {submissionData.textareaContent}</p>
          <p>Selections: {JSON.stringify(submissionData.selections)}</p>
        </div>
      )}
    </div>
  );
};

export default RatedPhotos;
