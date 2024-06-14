import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import '../App.scss';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!email) {
      setFlashMessage('Please enter an email address.');
      return false;
    }
    if (!validateEmail(email)) {
      setFlashMessage('Please enter a valid email address.');
      return false;
    }
    if (!password) {
      setFlashMessage('Please enter a password.');
      return false;
    }
    if (password.length < 6) {
      setFlashMessage('Password must be at least 6 characters long.');
      return false;
    }
    if (!firstName) {
      setFlashMessage('Please enter a first name.');
      return false;
    }
    setFlashMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const token = generateToken();
    localStorage.setItem('token', token);
    navigate('/my-tests');
    window.location.reload();
  };

  const generateToken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  return (
    <div>
      <div className="signup-form">
        <h4>Email:</h4>
        <input type="email" value={email} onChange={handleEmailChange} />
        <h4>Password:</h4>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <h4>First Name:</h4>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
        <div>
          <button className="sign-up-form-button" onClick={handleSubmit}>Go!</button>
        </div>
        {flashMessage && (
          <div className="flash-message">
            <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: '#d72b3f', marginRight: '10px' }} />
            {flashMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpForm;
