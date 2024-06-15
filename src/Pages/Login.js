import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons
import FlashMessage from '../Components/FlashMessage';
import '../App.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('token', 'your_generated_token'); // Save the token to local storage
      navigate('/my-tests'); // Redirect to MyTests page
      window.location.reload(); // Refresh the page
    } else {
      setFlashMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">Log In</div>
      <p className='login-paragraph-text'>No account? 
        <NavLink style={{ textDecoration: 'none', color: 'orange'}} to="/signup"> Sign up now</NavLink>
      </p>
      <div className="grid-container">
        <div className="social-login">
          <div className="login-header">Social Login</div>
          <button className="facebook-button">
              <FaFacebook className="icon" />
              Sign up with Facebook
          </button>
          <button className="linkedin-button">
              <FaLinkedin className="icon" />
              Sign up with LinkedIn
          </button>          
        </div>
        <div className="email-login">
          <div className="login-header">Email Login</div>
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="login-button" onClick={handleSubmit}>Login</button>
          <span id="login-button-span">{flashMessage && <FlashMessage message={flashMessage} />}</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
