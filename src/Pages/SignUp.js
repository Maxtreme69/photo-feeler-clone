import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons
import '../App.scss';

const Signup = () => {
  return (
    <div> {/* Updated container class */}
      <div>
        <div>
          <h1>Sign Up</h1>
          <div className="signup-buttons">
            <button className="facebook-button">
              <FaFacebook className="icon" />
              Sign up with Facebook
            </button>
            <button className="linkedin-button">
              <FaLinkedin className="icon" />
              Sign up with LinkedIn
            </button>
          </div>
          <p>Photofeeler does not post to socials.</p>
          <a>Sign up with Email</a>
          <p>Already have an account? <a href="#">Log in</a></p>
        </div>
        <div></div>
        <div>
          {/* Right content here */}
        </div>
      </div>
    </div>
  );
}

export default Signup;
