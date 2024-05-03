import React, { useState } from 'react';
import Dating from '../Details/Dating.js'; // Import the Dating component
import Social from '../Details/Social.js'; // Import the Social component
import Business from '../Details/Business.js'; // Import the Business component

function Category({ selectedImage }) {
  const [activeButton, setActiveButton] = useState('');
  const [showDatingComponent, setShowDatingComponent] = useState(false); // State for rendering Dating component
  const [showSocialComponent, setShowSocialComponent] = useState(false); // State for rendering Social component
  const [showBusinessComponent, setShowBusinessComponent] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowDatingComponent(false); // Hide Dating component when a button is clicked
    setShowSocialComponent(false); // Hide Social component when a button is clicked
    setShowBusinessComponent(false); // Hide Business component when a button is clicked
  };

  const handleNextClick = () => {
    if (activeButton === 'Dating') {
      setShowDatingComponent(true); // Show the Dating component if 'Dating' button is active
    } else if (activeButton === 'Social') {
      setShowSocialComponent(true); // Show the Social component if 'Social' button is active
    } else if (activeButton === 'Business') {
      setShowBusinessComponent(true); // Show the Business component if 'Business' button is active
    }
  };

  return (
    <div className="category-container">
      <div className="image-section">
        {selectedImage && (
          <div className="image-holder">
            <h1>Dating</h1>
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
            <h3>Subject</h3>
            <p>The one on the left</p>
            <p>Subject: Female/32</p>
          </div>
        )}
      </div>
      <div className="middle-line"></div>
      <div className="content-section">
        {!showDatingComponent && !showSocialComponent && !showBusinessComponent && ( // Conditional rendering to hide Category text when Dating or Social component is shown
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

        {showDatingComponent ? ( // Conditional rendering for Dating component
          <Dating />
        ) : showSocialComponent ? ( // Conditional rendering for Social component
          <Social />
        ) : showBusinessComponent ? ( // Conditional rendering for Business component
          <Business />
        ) : (
          <div className="traits-text">
            <p>&nbsp;</p>
          </div>
        )}
        {!showDatingComponent && !showSocialComponent && !showBusinessComponent && ( // Conditional rendering for Next button when neither Dating nor Social nor Business component is shown
          <div className="button-next">
            <button onClick={handleNextClick} disabled={!activeButton && activeButton !== ''}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
