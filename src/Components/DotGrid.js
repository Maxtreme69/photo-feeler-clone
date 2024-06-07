import React from 'react';
import PropTypes from 'prop-types';

const DotGrid = ({ dotColor }) => {
  const style = {
    width: 'calc(17 * 30px)', // 17 columns, each dot + gap is 20px
    height: 'calc(8 * 30px)', // 8 rows, each dot + gap is 20px
    backgroundImage: `radial-gradient(${dotColor} 3.5px, transparent 0)`,
    backgroundSize: '30px 30px', // Each dot + gap forms a 20px square
  };

  return <div className="dot-grid" style={style}></div>;
};

DotGrid.propTypes = {
  dotColor: PropTypes.string,
};

export default DotGrid;
