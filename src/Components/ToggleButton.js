import React from 'react';

const ToggleButton = () => {
  const [on, setOnState] = React.useState(false);
  const toggle = () => setOnState(o => !o);

  return (
    <button className={`toggle-button ${on ? 'on' : 'off'}`} onClick={toggle}>
      <span className="pin" />
    </button>
  );
};

export default ToggleButton;
