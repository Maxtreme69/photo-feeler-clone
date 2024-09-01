import React, { useState } from 'react';
import ImageSectionVote from '../Components/ImageSectionVote.js';
import { FaQuestionCircle } from 'react-icons/fa';

const Vote = ({ onSubmission }) => {
  const [activeButton, setActiveButton] = useState('DATING');
  const [selectedGender, setSelectedGender] = useState('both');
  const [reset, setReset] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  const handleNextClick = (selectedComponent) => {
    setActiveButton(selectedComponent.toUpperCase());
  };

  const handleDatingGender = (gender) => {
    setSelectedGender(gender);
  };

  const handleSubmit = (data) => {
    console.log('Vote submitted');
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 0);
    setSubmissionData(data);
    onSubmission(data);  // Pass the data up to App
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 1px grey', marginTop: '' }} className="karma-container">
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