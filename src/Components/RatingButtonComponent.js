import React from 'react';

const RatingButtonComponent = ({ backgroundColor, category, onRatingSelect, selected }) => {
  const handleButtonClick = (index) => {
    const invertedIndex = 3 - index; // Invert the index
    onRatingSelect(category, invertedIndex); // Notify parent component
  };

  const darkenColor = (color, amount) => {
    let usePound = false;

    if (color[0] === '#') {
      color = color.slice(1);
      usePound = true;
    }

    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00ff) + amount;
    let b = (num & 0x0000ff) + amount;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
  };

  const buttonStyle = (index) => ({
    paddingLeft: '10px',
    border: 'none',
    backgroundColor: selected === 3 - index ? darkenColor(backgroundColor, -30) : backgroundColor,
    position: 'relative',
    cursor: 'pointer'
  });

  return (
    <div className="rating-style-button-component">
      {[3, 2, 1, 0].map((rating, index) => (
        <div
          key={index}
          style={buttonStyle(index)}
          onClick={() => handleButtonClick(index)}
        >
          <span>{rating}</span>
          <span style={{ paddingLeft: '10px', border: 'none' }}>
            {['Very', 'Yes', 'Somewhat', 'No'][index]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RatingButtonComponent;
