import React from 'react';
import '../App.scss';

const Navbar = () => {
  return (
    <div className="navbar-container"> {/* Container added here */}
      <nav className="navbar">
        <div className="logo">Photofeeler</div>
        <div className="buttons-container"> {/* Container for buttons */}
          <button className="button login">Log In</button>
          <button className="button signup">Signup</button> {/* Added signup class */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
