import React, { useState } from 'react';

function Category({ handleNextClick: handleNextStep }) {
  const [activeButton, setActiveButton] = useState('');
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleNextClick = () => {
    if (activeButton) {
      setSelectedComponent(activeButton); // Update selectedComponent with the active button
      handleNextStep(activeButton); 
    }
  };

  const renderTraits = () => {
    switch (activeButton) {
      case 'Business':
        return (
          <>
            <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px' }}>Traits: <span style={{color: 'blue'}}>Competent</span>, <span style={{color: 'orange'}}>Likable</span>, <span style={{color: 'green'}}>Influential</span></h3>
          </>
        );
      case 'Social':
        return (
          <>
            <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px' }}>Traits: <span style={{color: 'orange'}}>Confident</span>, <span style={{color: 'green'}}>Authentic</span>, <span tyle={{color: 'purple'}}>Fun</span></h3>
          </>
        );
      case 'Dating':
        return (
          <>
            <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px' }}>Traits: <span style={{color: 'green'}}>Smart</span>, <span style={{color: 'blue'}}>Trustworthy</span>, <span style={{color: 'red'}}>Attractive</span></h3>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="category-container">
      <div className="middle-line"></div>
      <div className="content-section">
        {!selectedComponent && (
          <>
            <h2 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px' }}>What category of test is this?</h2>
            <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}>Each category tests different traits.</p>
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
            {renderTraits()} {/* Render traits based on active button */}
          </>
        )}

        {!selectedComponent && (
          <div className="button-next">
            <button className="new-test-button" onClick={handleNextClick} disabled={!activeButton}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
