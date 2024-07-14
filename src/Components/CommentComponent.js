import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { SubmissionDataContext } from '../Context/SubmissionDataContext.js';
import generateHash from '../utils/GenerateHash.js';
import ToggleButton from './ToggleButton.js';

const CommentComponent = ({ onSubmit, isSubmitDisabled, reset, selectedOption, selectedCategory, selections, handleFlip, imageDetailsSubmit, setMaleToggle, setFemaleToggle, maleToggle, femaleToggle }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [textareaContent, setTextareaContent] = useState('');
  const [selectedButton, setSelectedButton] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(selectedCategory === 'dating');
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

  useEffect(() => {
    setIsVisible(selectedCategory === 'dating');
  }, [selectedCategory]);

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

  const handleSubmitClick = async () => {
    const hash = await generateHash(selectedOption);
    
    let existingSubmission = submissionDataList.find(submission => submission.selectedOptionHash === hash);
    let newSubmissionData;
    
    if (existingSubmission) {
      newSubmissionData = {
        selectedCategory,
        selectedOption: existingSubmission.selectedOption,
        selectedOptionHash: hash,
        textareaContent,
        selections,
        imageDetailsSubmit
      };
    } else {
      newSubmissionData = {
        selectedCategory,
        selectedOption,
        selectedOptionHash: hash,
        textareaContent,
        selections,
        imageDetailsSubmit
      };
    }

    setSubmissionDataList((prevList) => [...prevList, newSubmissionData]);
    console.log('SubmissionDataList:', [...submissionDataList, newSubmissionData]);
    setSubmitDisabled(true);
    setTimeout(() => {
      onSubmit(newSubmissionData);
    }, 450); // Delay to match the flip animation duration
  };


  const handleSkipClick = async () => {
    const hash = await generateHash(selectedOption);

    setTextareaContent('');
    setSelectedButton('');
    setSubmitDisabled(false);

    let existingSubmission = submissionDataList.find(submission => submission.selectedOptionHash === hash);
    let newSubmissionData;

    if (existingSubmission) {
      newSubmissionData = {
        selectedCategory,
        selectedOption: existingSubmission.selectedOption,
        selectedOptionHash: hash,
        textareaContent,
        selections,
        imageDetailsSubmit
      };
    } else {
      newSubmissionData = {
        selectedCategory,
        selectedOption,
        selectedOptionHash: hash,
        textareaContent,
        selections,
        imageDetailsSubmit
      };
    }

    setTimeout(() => {
      onSubmit(newSubmissionData);
    }, 450); // Delay to match the flip animation duration
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

      <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={`${isVisible ? 'fade-in-toggle visible' : 'fade-out-toggle hidden'}`}>
          <p style={{ margin: '0 10px 0 0', fontFamily: 'roboto', color: 'grey' }}>VOTERS</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}>F</span>
            <ToggleButton isOn={femaleToggle} onToggle={() => setFemaleToggle(!femaleToggle)} />
            <span style={{ marginRight: '5px', marginLeft: '5px' }}>M</span>
            <ToggleButton isOn={maleToggle} onToggle={() => setMaleToggle(!maleToggle)} />
          </div>
        </div>
          <div className="skip-button" onClick={handleSkipClick} style={{ gap: '10px', paddingLeft: '60px' }}>
          <FontAwesomeIcon icon={faForwardStep} />
          <p>Skip</p>
          <button 
          className="new-test-button" 
          onClick={handleSubmitClick}
          disabled={submitDisabled || isSubmitDisabled}
        >
          Submit Vote
        </button>
        </div>
        </div>
      </div>
      {imageDetailsSubmit && (
        <div className="image-details-submit">
        </div>
      )}
    </div>
  );
};

export default CommentComponent;
