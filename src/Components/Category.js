import React, { useState } from 'react';

function Category({ selectedImage, handleNextClick }) {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getButtonContent = (buttonName) => {
    switch (buttonName) {
      case 'Business':
        return 'Traits: Competent, Likable, Influential';
      case 'Social':
        return 'Traits: Confident, Authentic, Fun';
      case 'Dating':
        return 'Traits: Smart, Trustworthy, Attractive';
      default:
        return '';
    }
  };

  return (
    <div className="category-container">
      <div className="image-section">
        {selectedImage && (
          <div className="image-holder">
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          </div>
        )}
      </div>
      <div className="middle-line"></div>
      <div className="content-section">
        <h2>What category of test is this?</h2>
        <p>Each category tests different traits.</p>
        <div className="button-group">
          <button
            className={activeButton === 'Business' ? 'active' : ''}
            onClick={() => handleButtonClick('Business')}
          >
            Business
          </button>
          <button
            className={activeButton === 'Social' ? 'active' : ''}
            onClick={() => handleButtonClick('Social')}
          >
            Social
          </button>
          <button
            className={activeButton === 'Dating' ? 'active' : ''}
            onClick={() => handleButtonClick('Dating')}
          >
            Dating
          </button>
        </div>
        {activeButton && (
          <div className="traits-text">
            <p>{getButtonContent(activeButton)}</p>
          </div>
        )}
        {!activeButton && (
          <div className="traits-text">
            <p>&nbsp;</p>
          </div>
        )}
        <div className="button-next">
          <button onClick={handleNextClick} disabled={!activeButton && activeButton !== ''}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
