import React from 'react';

const ProgressBar = ({ value, color }) => {
  const containerStyles = {
    height: 10,
    width: '214px',
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
