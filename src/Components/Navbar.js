// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <NavLink exact to="/" style={{ textDecoration: 'none' }}>Photofeeler</NavLink>
        </div>
        <div className="buttons-container">
          <NavLink to="/my-tests">My Tests</NavLink>
          <NavLink to="/login" className="nav-link login">Login</NavLink>
          <NavLink to="/signup" className="nav-link signup">Sign Up</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
