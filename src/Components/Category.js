import React, { useState } from 'react';

function Category({ handleNextClick: handleNextStep, handleSelectedComponent }) {
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

  return (
    <div className="category-container">
      <div className="middle-line"></div>
      <div className="content-section">
        {!selectedComponent && ( // Render category buttons if no component is selected
          <>
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
          </>
        )}

        {!selectedComponent && ( // Render Next button if no component is selected
          <div className="button-next">
            <button onClick={handleNextClick} disabled={!activeButton}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
