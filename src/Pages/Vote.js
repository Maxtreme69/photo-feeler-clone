import React, { useState, useEffect } from 'react';
import ImageSectionVote from '../Components/ImageSectionVote'
import { FaQuestionCircle } from 'react-icons/fa'; // Import Font Awesome icons

const Vote = () => {
    const [activeButton, setActiveButton] = useState('DATING');
    const [selectedGender, setSelectedGender] = useState('both'); // Default to 'both'
    const [datingGender, setDatingGender] = useState('both');
    // const [showImageSectionVote, setShowImageSectionVote] = useState(false);

    const handleNextClick = (selectedComponent) => {
        setActiveButton(selectedComponent.toUpperCase());
        // setSelectedCategory(selectedComponent.toUpperCase());
        // handleStepChange(3);
      };

      const handleDatingGender = (gender) => {
        setDatingGender(gender);
        setSelectedGender(gender);
      };

      const handleSubmit = () => {
        // setShowImageSectionVote(true);
        console.log('Vote submitted');
      };

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 1px grey', marginTop: 'auto'}} className="karma-container" >
          <h1 style={{ fontSize: '24px' }}>Is this person potrayed as?</h1><p>Karma: <span style={{ color: 'orange' }}>Medium </span><FaQuestionCircle style={{ color: 'grey' }} className="icon" /></p>
        </div>
            <ImageSectionVote 
              activeButton={activeButton}
              selectedGender={selectedGender}
              onSubmit={handleSubmit} // Ensure handleSubmit is passed here
            />    
        </div>
  )
}

export default Vote