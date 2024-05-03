import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
        <div className="logo">
          <NavLink exact to="/" style={{ textDecoration: 'none' }}>Photofeeler</NavLink>
        </div>
        <div className="buttons-container">
          {authenticated && <NavLink to="/my-tests">My Tests</NavLink>}
          {authenticated && <button onClick={handleLogout}>Logout</button>}
          {!authenticated && <NavLink to="/login" className="nav-link login">Login</NavLink>}
          {!authenticated && <NavLink to="/signup" className="nav-link signup">Sign Up</NavLink>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
