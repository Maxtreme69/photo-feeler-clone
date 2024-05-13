import React from 'react';
import { FaArrowDown, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <table className="footer-table">
        <tbody>
          <tr>
            <th>Account</th>
            <th>Resources</th>
            <th style={{ color: 'white', fontWeight: '200', textAlign: 'right' }}> Help a Friend! <FaArrowDown className="icon"/></th>
          </tr>
          <tr>
            <td>My Tests</td>
            <td>Home</td>
            <td className='social-media-button-container-footer'>
              <button className="facebook-button-footer">
                <FaFacebook style={{ width: '50px' }} className="icon" />
                Share
              </button>
              <button style={{ backgroundColor: '#40b9e7' }} className="facebook-button-footer">
                <FaTwitter style={{ width: '50px' }} className="icon" />
                Tweet
              </button>
              <button style={{ backgroundColor: '#4a99bf' }} className="linkedin-button-footer">
                In <span style={{ marginRight: '5px', paddingLeft: '5px' }}> Post</span>
              </button>
            </td>
          </tr>
          <tr>
            <td>Vote</td>
            <td>About Us</td>
          </tr>
          <tr>
            <td>Settings</td>
            <td>FAQ</td>
          </tr>
          <tr>
            <td>Logout</td>
            <td>Need Help?</td>
            <td style={{ textAlign: 'right', fontSize: '14px' }}>
              Terms of Use<br /> Privacy Policy<br />
              © 2024 Photofeeler Inc.
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Give Feedback</td>
          </tr>
          <tr>
            <td></td>
            <td>Report a Bug</td>
          </tr>
          <tr>
            <td></td>
            <td>Blog</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Footer;
