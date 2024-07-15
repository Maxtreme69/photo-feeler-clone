import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../Components/SignUpForm.js';
import DotGrid from '../Components/DotGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.scss';

const Grid = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = '#3b76a1'; // Darker shade for hover effect
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = '#4999bf'; // Original color
  };

  return (
    <div className="grid-container">
      <div className="grid-left">
        <div className="sign-up-background" style={{ height: '80vh' }}>
          <h1>Sign up</h1>
          <div className="social-buttons-container">
          <button className="signup-social-media-button">
              <FontAwesomeIcon icon={faFacebookF} style={{ color: '#ffffff', marginRight: '10px', fontSize: '35px' }} />
              <span style={{ paddingLeft: '100px' }}>Sign up with Facebook</span>
            </button>
            <button
              className="signup-social-media-button"
              style={{ backgroundColor: '#4999bf' }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#ffffff', marginRight: '10px', fontSize: '35px' }} />
              <span style={{ paddingLeft: '100px' }}>Sign up with LinkedIn</span>
            </button>
            <p>Photofeeler does not post to socials.</p>
            <p style={{ marginTop: '80px' }}>Already have an account?</p>
            <Link to="/login" className="login-link">
              <h3>Log in</h3>
            </Link>
          </div>
          <div style={{ marginTop: '50px'}}>
            <DotGrid
              dotColor="#8e56cb 3px,transparent 0"
              dotWidthVal1={18}
              dotWidthVal2={20}
              dotHeightVal1={4}
              dotHeightVal2={20}
              backgroundSizeVal1={20}
              backgroundSizeVal2={20}
            />
          </div>
        </div>
      </div>
      <div className="grid-right">
        <div className="sign-up-form-container">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default Grid;