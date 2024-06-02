import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const MultiStepFormActiveTest = ({ ratings, category }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const formatRating = (value) => {
    return (value / 10).toFixed(1);
  };

  const calculateLeftPosition = (value) => {
    const maxLeft = 600; // The maximum width of the progress bar
    const minRating = 0;
    const maxRating = 100;
    return ((value - minRating) / (maxRating - minRating)) * maxLeft; // Scale value to progress bar width
  };

  const renderRatings = () => {
    if (!ratings) {
      return <div>No ratings available</div>;
    }

    const renderRatingRow = (label, value, color) => {
      let descriptionSpan;
      if (value <= 10.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Bottom 10%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (value <= 20.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Bottom 20%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (value <= 39.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Below Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (value <= 60.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (value <= 79.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Above Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (value <= 89.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Top 20%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Top 10%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      }

      return (
        <div style={{ fontFamily: 'roboto' }} key={label}>
          <div>
            <span>{label} </span><span>{formatRating(value)}</span>
          </div>
          <ProgressBar width={600} height={20} value={value} color={color} /> {/* Pass width prop */}
          <div style={{ paddingBottom: '20px', position: 'relative' }}>
            {descriptionSpan}
          </div>
        </div>
      );
    };

    const ratingsMap = {
      dating: [
        { label: 'Smart', value: ratings.smart, color: '#1eb771' },
        { label: 'Trustworthy', value: ratings.trustworthy, color: '#547fd6' },
        { label: 'Attractive', value: ratings.attractive, color: '#ef6324' },
      ],
      social: [
        { label: 'Confident', value: ratings.confident, color: '#1eb771' },
        { label: 'Authentic', value: ratings.authentic, color: '#547fd6' },
        { label: 'Fun', value: ratings.fun, color: '#ef6324' },
      ],
      business: [
        { label: 'Competent', value: ratings.competent, color: '#1eb771' },
        { label: 'Likable', value: ratings.likable, color: '#547fd6' },
        { label: 'Influential', value: ratings.influential, color: '#ef6324' },
      ],
    };

    return ratingsMap[category.toLowerCase()].map(({ label, value, color }) => renderRatingRow(label, value, color));
  };

  return (
    <div className="multi-step-form">
      <div className="step-list">
        <div
          className={`step ${currentStep === 1 ? 'active' : ''}`}
          onClick={() => handleStepChange(1)}
        >
          SCORES
        </div>
        <div
          className={`step ${currentStep === 2 ? 'active' : ''}`}
          onClick={() => handleStepChange(2)}
        >
          DATA
        </div>
        <div
          className={`step ${currentStep === 3 ? 'active' : ''}`}
          onClick={() => handleStepChange(3)}
        >
          NOTES
        </div>
        <div
          className={`step ${currentStep === 4 ? 'active' : ''}`}
          onClick={() => handleStepChange(4)}
        >
          IMAGE
        </div>
      </div>
      <div className="step-content" style={{ paddingLeft: '30px' }}>
        {currentStep === 1 && (
          <div>
            <h2>Ratings</h2>
            {renderRatings()}
          </div>
        )}
        {currentStep === 2 && (
          <div>Step 2</div>
        )}
        {currentStep === 3 && (
          <div>Step 3</div>
        )}
        {currentStep === 4 && (
          <div>Step 4</div>
        )}
      </div>
    </div>
  );
};

export default MultiStepFormActiveTest;
