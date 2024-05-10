import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>Account</h3>
        <ul>
          <li>My Tests</li>
          <li>Vote</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Need Help?</li>
          <li>Give Feedback</li>
          <li>Report a Bug</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
