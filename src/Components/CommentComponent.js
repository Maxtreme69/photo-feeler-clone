import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';

const CommentComponent = () => {
  const [activeTab, setActiveTab] = useState(1); // Set "Feelings" tab as default
  const [textareaContent, setTextareaContent] = useState('');
  const [selectedButton, setSelectedButton] = useState('');

  useEffect(() => {
    setActiveTab(1); // Automatically select "Feelings" tab on page load
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleButtonClick = (content) => {
    setTextareaContent(content);
    setSelectedButton(content); // Track the selected button
  };

  return (
    <div className="comment-component-container">
      <p>Leave a note <span>(optional)</span></p>
      <textarea 
        placeholder='This person seems...' 
        value={textareaContent} 
        onChange={(e) => setTextareaContent(e.target.value)}
      ></textarea>
      <div className='comment-tabs'>
        <div className="tab quick-notes">
          Quick notes
        </div>
        <div 
          className={`tab ${activeTab === 1 ? 'active' : ''}`} 
          onClick={() => handleTabClick(1)}
        >
          Feelings
        </div>
        <div 
          className={`tab ${activeTab === 2 ? 'active' : ''}`} 
          onClick={() => handleTabClick(2)}
        >
          Suggestions
        </div>
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
              >
                {text}
              </button>
            ))}
          </div>
          <div className="buttons-row">
            {['forced smile', 'intense', 'outdated', 'sad', 'timid', 'tired', 'uncomfortable', 'young'].map((text, index) => (
              <button 
                key={index} 
                onClick={() => handleButtonClick(text)} 
                className={selectedButton === text ? 'selected' : ''}
              >
                {text}
              </button>
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
            >
              {text}
            </button>
          ))}
        </div>
        <div className="buttons-row">
          {['expression', 'eye contact', 'filter/effects', 'hair', 'multiple people', 'pose', 'posture', 'selfie', 'shadows'].map((text, index) => (
            <button 
              key={index} 
              onClick={() => handleButtonClick(text)} 
              className={selectedButton === text ? 'selected' : ''}
            >
              {text}
            </button>
          ))}
        </div>
        <div className="buttons-row">
          {['small', 'smile less', 'smile more', 'sunglasses', 'too close-up', 'too far away', 'too much skin'].map((text, index) => (
            <button 
              key={index} 
              onClick={() => handleButtonClick(text)} 
              className={selectedButton === text ? 'selected' : ''}
            >
              {text}
            </button>
          ))}
        </div>
      </>
      )}
      <div className="button-container">
        <div className="skip-button">
          <FontAwesomeIcon icon={faForwardStep} />
          <p>Skip</p>
        </div>
        <button className="new-test-button">Submit Vote</button>
      </div>
    </div>
  );
};

export default CommentComponent;
