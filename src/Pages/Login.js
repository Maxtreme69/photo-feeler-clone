import React from 'react';
import '../App.scss';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">Log In</div>
      <p  className='login-paragraph-text'>No account? 
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
            <input type="text" className="input-field" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" className="input-field" placeholder="Password" />
          </div>
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;