import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const FlashMessage = ({ message }) => {
  return (
    <div className="flash-message">
      <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: '#d72b3f', marginRight: '10px' }} />
      {message}
    </div>
  );
};

export default FlashMessage;
