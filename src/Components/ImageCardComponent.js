import React from 'react';
import ProgressBar from './ProgressBar.js';

const ImageCardComponent = ({ image, category, ratings, votes, className }) => {
  const renderRatings = () => {
    if (!ratings) {
      return <div>No ratings available</div>;
    }

    switch (category.toLowerCase()) {
      case 'dating':
        return (
          <>
            <div>
              <ProgressBar value={ratings.smart} color="#1eb771" />
              SMART
            </div>
            <div>
              <ProgressBar value={ratings.trustworthy} color="#547fd6" />
              TRUSTWORTHY
            </div>
            <div>
              <ProgressBar value={ratings.attractive} color="#ef6324" />
              ATTRACTIVE
            </div>
          </>
        );
      case 'social':
        return (
          <>
            <div>
              <ProgressBar value={ratings.confident} color="#1eb771" />
              CONFIDENT
            </div>
            <div>
              <ProgressBar value={ratings.authentic} color="#547fd6" />
              AUTHENTIC
            </div>
            <div>
              <ProgressBar value={ratings.fun} color="#ef6324" />
              FUN
            </div>
          </>
        );
      case 'business':
        return (
          <>
            <div>
              <ProgressBar value={ratings.competent} color="#1eb771" />
              COMPETENT
            </div>
            <div>
              <ProgressBar value={ratings.likable} color="#547fd6" />
              LIKABLE
            </div>
            <div>
              <ProgressBar value={ratings.influential} color="#ef6324" />
              INFLUENTIAL
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='image-card-container'>
      <img src={image} alt={category} />
      <div className="image-card-details-container">
        <div className="card-category-votes-title">
          <span id={`span-${category}`}>{category}</span>
          <span id="span-votes">{votes} VOTES</span>
        </div>
        {renderRatings()}
      </div>
    </div>
  );
};

export default ImageCardComponent;
