import React, { useState } from 'react';
import ImageCardComponent from '../Components/ImageCardComponent';
import CustomDropdown from '../Components/CustomDropdown';
import { images, imagePathsToKeys } from '../ImageImports';
import imageRatings from '../imageRatings'; // Import the image ratings

const RatedPhotos = () => {
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
    </div>
  );
};

export default RatedPhotos;