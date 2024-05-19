// Pages/Vote.js
import React, { useState } from 'react';
import ImageSectionVote from '../Components/ImageSectionVote';
import { FaQuestionCircle } from 'react-icons/fa';

const Vote = () => {
  const [activeButton, setActiveButton] = useState('DATING');
  const [selectedGender, setSelectedGender] = useState('both');
  const [datingGender, setDatingGender] = useState('both');
  const [reset, setReset] = useState(false);

  const handleNextClick = (selectedComponent) => {
    setActiveButton(selectedComponent.toUpperCase());
  };

  const handleDatingGender = (gender) => {
    setDatingGender(gender);
    setSelectedGender(gender);
  };

  const handleSubmit = () => {
    console.log('Vote submitted');
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 0);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 1px grey', marginTop: 'auto' }} className="karma-container">
        <h1 style={{ fontSize: '24px' }}>Is this person portrayed as?</h1>
        <p>Karma: <span style={{ color: 'orange' }}>Medium </span><FaQuestionCircle style={{ color: 'grey' }} className="icon" /></p>
      </div>
      <ImageSectionVote 
        activeButton={activeButton}
        selectedGender={selectedGender}
        onSubmit={handleSubmit}
        reset={reset}
      />
    </div>
  );
}

export default Vote;
