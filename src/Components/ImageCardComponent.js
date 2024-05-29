import React from 'react';
import ProgressBar from './ProgressBar.js';

const ImageCardComponent = ({ image, category, ratings, votes, className }) => {
  const formatRating = (value) => {
    // Divide the rating by 10 and round to one decimal place
    return (value / 10).toFixed(1);
  };

  const renderRatings = () => {
    if (!ratings) {
      return <div>No ratings available</div>;
    }

    const renderRatingRow = (label, value) => (
      <div>
        <ProgressBar value={value} color="#1eb771" />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{label}</span> <span>{formatRating(value)}</span>
        </div>
      </div>
    );

    switch (category.toLowerCase()) {
      case 'dating':
        return (
          <>
            {renderRatingRow('SMART', ratings.smart)}
            <div>
              <ProgressBar value={ratings.trustworthy} color="#547fd6" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>TRUSTWORTHY</span> <span>{formatRating(ratings.trustworthy)}</span>
              </div>
            </div>
            <div>
              <ProgressBar value={ratings.attractive} color="#ef6324" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>ATTRACTIVE</span> <span>{formatRating(ratings.attractive)}</span>
              </div>
            </div>
          </>
        );
      case 'social':
        return (
          <>
            <div>
              <ProgressBar value={ratings.confident} color="#1eb771" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>CONFIDENT</span> <span>{formatRating(ratings.confident)}</span>
              </div>
            </div>
            <div>
              <ProgressBar value={ratings.authentic} color="#547fd6" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>AUTHENTIC</span> <span>{formatRating(ratings.authentic)}</span>
              </div>
            </div>
            <div>
              <ProgressBar value={ratings.fun} color="#ef6324" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>FUN</span> <span>{formatRating(ratings.fun)}</span>
              </div>
            </div>
          </>
        );
      case 'business':
        return (
          <>
            <div>
              <ProgressBar value={ratings.competent} color="#1eb771" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>COMPETENT</span> <span>{formatRating(ratings.competent)}</span>
              </div>
            </div>
            <div>
              <ProgressBar value={ratings.likable} color="#547fd6" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>LIKABLE</span> <span>{formatRating(ratings.likable)}</span>
              </div>
            </div>
            <div>
              <ProgressBar value={ratings.influential} color="#ef6324" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>INFLUENTIAL</span> <span>{formatRating(ratings.influential)}</span>
              </div>
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
