import React from 'react';
import '../App.scss';
// import Signup from '../Pages/Signup.js';
import SignUpForm from '../Components/SignUpForm.js';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-left">
      <div style={{ height: '1000px', width: '100%'}} className="sign-up-background">
      </div>
      </div>
      {/* <div className="grid-right"> */}
      <div>
        <div style={{marginRight: '250px'}}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default Grid;
