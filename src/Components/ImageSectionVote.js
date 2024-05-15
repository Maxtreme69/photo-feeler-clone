import React, { useState } from 'react';
import photoFemaleOne from '../images/dating/women/photo-female-1.webp';
import photoFemaleTwo from '../images/dating/women/photo-female-2.webp';
import photoFemaleThree from '../images/dating/women/photo-female-3.webp';
import CustomDropdown from './CustomDropdown';

const ImageSectionVote = () => {
  const [selectedOption, setSelectedOption] = useState('DATING');

  const options = ['DATING', 'SOCIAL', 'BUSINESS'];
  const images = {
    DATING: photoFemaleOne,
    SOCIAL: photoFemaleTwo,
    BUSINESS: photoFemaleThree,
  };

  return (
    <div className="image-section-vote">
      <div className="dropdown-container">
        <CustomDropdown 
          options={options} 
          selectedOption={selectedOption} 
          onOptionSelect={setSelectedOption} 
        />
      </div>
      <div className="image-container">
        <img src={images[selectedOption]} alt="Selected Option" />
      </div>
    </div>
  );
};

export default ImageSectionVote;
