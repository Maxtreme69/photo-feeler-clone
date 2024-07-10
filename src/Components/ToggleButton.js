import React from 'react';

const ToggleButton = ({ isOn, onToggle }) => {
  return (
    <button className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={onToggle}>
      <span className="pin" />
    </button>
  );
};

export default ToggleButton;
