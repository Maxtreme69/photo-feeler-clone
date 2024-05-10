import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCog, FaBars } from 'react-icons/fa'; // Importing icons from react-icons library

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div>
          <NavLink exact to="/" style={{ textDecoration: 'none' }}><p className="logo">Photofeeler</p></NavLink>
        </div>
        <div className="buttons-container">
          {authenticated && <NavLink to="/my-tests" className="navbar-item-styling">My Tests</NavLink>}
          {authenticated && <span onClick={handleLogout} className="navbar-item-styling">Logout</span>}
          {!authenticated && <NavLink to="/login" className="nav-link login">Login</NavLink>}
          {!authenticated && <NavLink to="/signup" className="nav-link signup">Sign Up</NavLink>}
          <FaCog className="icon" style={{ color: 'gray', fontSize: '17.5px' }}/> {/* Settings icon */}
          <FaBars className="icon" style={{ color: 'gray', fontSize: '25px' }}/> {/* Hamburger Menu icon */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
