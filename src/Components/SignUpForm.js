import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.scss';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, let's assume signup is successful and generate a token
    const token = generateToken(); // Generate a token (you'll implement this function)
    localStorage.setItem('token', token); // Save the token to local storage
    // Redirect to My Tests page upon successful signup
    navigate('/my-tests');
    window.location.reload(); // Refresh the page
  };

  // Function to generate a token (you'll implement the actual token generation logic)
  const generateToken = () => {
    // You can use a library like jsonwebtoken to generate a secure token
    // For demonstration, let's use a simple method of generating a random string
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
        <button onClick={handleSubmit}>Go</button>
      </div>
    </div>

    </div>

  );
}

export default SignUpForm;
