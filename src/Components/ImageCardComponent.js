import React from 'react';
import ProgressBar from './ProgressBar';

const ImageCardComponent = ({ image, category, ratings, votes, textAreaContent, className, onClick }) => {
  const formatRating = (value) => {
    return (value / 10).toFixed(1);
  };

  const renderRatings = () => {
    if (!ratings) {
      return <div>No ratings available</div>;
    }

    const renderRatingRow = (label, value, color) => (
      <div key={label}>
        <ProgressBar value={value} height={10} width={214} color={color} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{label}</span> <span>{formatRating(value)}</span>
        </div>
      </div>
    );

    const ratingsMap = {
      dating: [
        { label: 'SMART', value: ratings.smart, color: '#1eb771' },
        { label: 'TRUSTWORTHY', value: ratings.trustworthy, color: '#547fd6' },
        { label: 'ATTRACTIVE', value: ratings.attractive, color: '#ef6324' },
      ],
      social: [
        { label: 'CONFIDENT', value: ratings.confident, color: '#1eb771' },
        { label: 'AUTHENTIC', value: ratings.authentic, color: '#547fd6' },
        { label: 'FUN', value: ratings.fun, color: '#ef6324' },
      ],
      business: [
        { label: 'COMPETENT', value: ratings.competent, color: '#1eb771' },
        { label: 'LIKABLE', value: ratings.likable, color: '#547fd6' },
        { label: 'INFLUENTIAL', value: ratings.influential, color: '#ef6324' },
      ],
    };

    return ratingsMap[category.toLowerCase()].map(({ label, value, color }) => renderRatingRow(label, value, color));
  };

  return (
    <div className={`image-card-container ${className}`} onClick={onClick}>
      <img src={image} alt={category} />
      <div className="image-card-details-container">
        <div className="card-category-votes-title">
          <span id={`span-${category}`}>{category}</span>
          <span id="span-votes">{votes} VOTES</span>
        </div>
        {renderRatings()}
        <div className="textarea-content">
          <p>{textAreaContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCardComponent;
