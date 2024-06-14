import React from 'react';
import PropTypes from 'prop-types';

const DotGrid = ({ dotColor, dotWidthVal1, dotWidthVal2, dotHeightVal1, dotHeightVal2, backgroundSizeVal1, backgroundSizeVal2 }) => {
  const style = {
    width: `calc(${dotWidthVal1} * ${dotWidthVal2}px)`, // 17 columns, each dot + gap is 20px
    height: `calc(${dotHeightVal1} * ${dotHeightVal2}px)`, // 8 rows, each dot + gap is 20px
    backgroundImage: `radial-gradient(${dotColor} 3px, transparent 0)`,
    backgroundSize: `${backgroundSizeVal1}px ${backgroundSizeVal2}px`, // Each dot + gap forms a 20px square
  };

  return <div className="dot-grid" style={style}></div>;
};

DotGrid.propTypes = {
  dotColor: PropTypes.string,
};

export default DotGrid;
