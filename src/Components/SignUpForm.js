import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DotGrid from './DotGrid';
import FlashMessage from '../Components/FlashMessage.js';

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

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isDuplicate = users.some(user => user.email === email || user.firstName === firstName);

    if (isDuplicate) {
      setFlashMessage('Email or first name is already in use.');
      return;
    }

    const newUser = { email, password, firstName };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

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
      <div style={{ margin: '5px' }}>
        <DotGrid 
          dotColor="#f08b60" 
          dotWidthVal1={12} 
          dotWidthVal2={20} 
          dotHeightVal1={6} 
          dotHeightVal2={20} 
          backgroundSizeVal1={20} 
          backgroundSizeVal2={20} 
        />
      </div>
      <div className="signup-form" style={{ marginLeft: '30px', marginTop: '50px' }}>
        <h4>Email:</h4>
        <input className="singup-form-input" type="email" value={email} onChange={handleEmailChange} />
        <h4>Password:</h4>
        <input className="singup-form-input" type="password" value={password} onChange={handlePasswordChange} />
        <h4>First Name:</h4>
        <input className="singup-form-input" type="text" value={firstName} onChange={handleFirstNameChange} />
        <div>
          <button className="sign-up-form-button" onClick={handleSubmit}>Go!</button>
        </div>
        {flashMessage && <FlashMessage message={flashMessage} />}
      </div>
    </div>
  );
};

export default SignUpForm;