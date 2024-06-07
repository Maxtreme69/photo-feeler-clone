import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { SubmissionDataContext } from '../Context/SubmissionDataContext.js';

const CommentComponent = ({ onSubmit, isSubmitDisabled, reset, selectedOption, selectedCategory, selections, handleFlip }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [textareaContent, setTextareaContent] = useState('');
  const [selectedButton, setSelectedButton] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const { submissionDataList, setSubmissionDataList } = useContext(SubmissionDataContext);

  useEffect(() => {
    setActiveTab(1);
  }, []);

  useEffect(() => {
    if (reset) {
      setTextareaContent('');
      setSelectedButton('');
      setSubmitDisabled(false);
    }
  }, [reset]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleButtonClick = (content) => {
    setTextareaContent(content);
    setSelectedButton(content);
  };

  const handleTextareaChange = (e) => {
    setTextareaContent(e.target.value);
  };

  const handleSubmitClick = () => {
    const newSubmissionData = {
      selectedCategory,
      selectedOption,
      textareaContent,
      selections
    };

    setSubmissionDataList((prevList) => [...prevList, newSubmissionData]);
    setSubmitDisabled(true);
    handleFlip();
    setTimeout(() => {
      onSubmit(newSubmissionData);
    }, 450); // Delay to match the flip animation duration
  };

  const handleSkipClick = () => {
    setTextareaContent('');
    setSelectedButton('');
    setSubmitDisabled(false);
    handleFlip();
  };

  return (
    <div className="comment-component-container">
      <p>Leave a note <span>(optional)</span></p>
      <textarea 
        placeholder='This person seems...' 
        value={textareaContent} 
        onChange={handleTextareaChange}
      ></textarea>
      <div className='comment-tabs'>
        <div className="tab quick-notes">Quick notes</div>
        <div 
          className={`tab ${activeTab === 1 ? 'active' : ''}`} 
          onClick={() => handleTabClick(1)}
        >Feelings</div>
        <div 
          className={`tab ${activeTab === 2 ? 'active' : ''}`} 
          onClick={() => handleTabClick(2)}
        >Suggestions</div>
        <div className="separator"></div>
      </div>
      {activeTab === 1 && (
        <>
          <div className="buttons-row">
            {['custom', 'photo!', 'bg!', 'outfit!', 'would date!', 'aggressive', 'arrogant', 'bland', 'fake'].map((text, index) => (
              <button 
                key={index} 
                onClick={() => handleButtonClick(text)} 
                className={selectedButton === text ? 'selected' : ''}
              >{text}</button>
            ))}
          </div>
          <div className="buttons-row">
            {['forced smile', 'intense', 'outdated', 'sad', 'timid', 'tired', 'uncomfortable', 'young'].map((text, index) => (
              <button 
                key={index} 
                onClick={() => handleButtonClick(text)} 
                className={selectedButton === text ? 'selected' : ''}
              >{text}</button>
            ))}
          </div>
        </>
      )}
      {activeTab === 2 && (
        <>
          <div className="buttons-row">
            {['custom', 'angle', 'bg distracting', 'blurry', 'bright', "can't see face", 'clothes', 'color issues', 'crop', 'dark'].map((text, index) => (
              <button 
                key={index} 
                onClick={() => handleButtonClick(text)} 
                className={selectedButton === text ? 'selected' : ''}
              >{text}</button>
            ))}
          </div>
          <div className="buttons-row">
            {['expression', 'eye contact', 'filter/effects', 'hair', 'multiple people', 'pose', 'posture', 'selfie', 'shadows'].map((text, index) => (
              <button 
                key={index} 
                onClick={() => handleButtonClick(text)} 
                className={selectedButton === text ? 'selected' : ''}
              >{text}</button>
            ))}
          </div>
        </>
      )}
      <div className="button-container">
        <div className="skip-button" onClick={handleSkipClick}>
          <FontAwesomeIcon icon={faForwardStep} />
          <p>Skip</p>
        </div>
        <button 
          className="new-test-button" 
          onClick={handleSubmitClick}
          disabled={submitDisabled || isSubmitDisabled}
        >
          Submit Vote
        </button>
      </div>
    </div>
  );
};

export default CommentComponent;
