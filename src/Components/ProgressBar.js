import React from 'react';

const ProgressBar = ({ value, height, width, color }) => {
  const containerStyles = {
    height: height,
    width: width,
    backgroundColor: '#f0f8fa',
    borderRadius: 50,
    marginTop: 5,
    marginBottom: 5
  };

  const fillerStyles = {
    height: '100%',
    width: `${value}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.2s ease-in',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
