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
            <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', fontWeight: '200' }}>Traits: <span style={{color: '#3062c7'}}>Competent</span>, <span style={{color: '#c29106'}}>Likable</span>, <span style={{color: '#178b56'}}>Influential</span></h3>
          </>
        );
      case 'Social':
        return (
          <>
            <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', fontWeight: '200' }}>Traits: <span style={{color: '#e66b0e'}}>Confident</span>, <span style={{color: '#178b56'}}>Authentic</span>, <span style={{color: '#753e96'}}>Fun</span></h3>
          </>
        );
      case 'Dating':
        return (
          <>
            <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', fontWeight: '200' }}>Traits: <span style={{color: '#178b56'}}>Smart</span>, <span style={{color: '#3062c7'}}>Trustworthy</span>, <span style={{color: '#d14b0f'}}>Attractive</span></h3>
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
            <h4 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', marginBottom: '0px', fontWeight: '200' }}>What category of test is this?</h4>
            <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', fontWeight: '100' }}>Each category tests different traits.</p>
            <div className="button-group">
              <button 
                style={{ borderRadius: '25px 0 0 25px' }}
                className={activeButton === 'Business' ? 'active-business' : ''}
                onClick={() => handleButtonClick('Business')}
              >
                BUSINESS
              </button>
              <button
                style={{ borderRadius: '0' }}
                className={activeButton === 'Social' ? 'active-social' : ''}
                onClick={() => handleButtonClick('Social')}
              >
                SOCIAL
              </button>
              <button
                style={{ borderRadius: '0 25px 25px 0' }}
                className={activeButton === 'Dating' ? 'active-dating' : ''}
                onClick={() => handleButtonClick('Dating')}
              >
                DATING
              </button>
            </div>
            {renderTraits()} {/* Render traits based on active button */}
          </>
        )}

        {!selectedComponent && (
          <div>
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
