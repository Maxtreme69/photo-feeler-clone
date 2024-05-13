import React from 'react'

const RatingButtonComponent = ({ backgroundColor }) => {
    const buttonStyle = {
      paddingLeft: '10px',
      border: 'none',
      backgroundColor: backgroundColor, // Use the background color prop
    };

  return (
    <div className="rating-style-button-component">
        <div style={buttonStyle}><span>3</span><span style={{paddingLeft: '10px', border: 'none'}}>Very</span></div>
        <div style={buttonStyle}><span>2</span><span style={{paddingLeft: '10px', border: 'none'}}>Yes</span></div>
        <div style={buttonStyle}><span>1</span><span style={{paddingLeft: '10px', border: 'none'}}>Somewhat</span></div>
        <div style={buttonStyle}><span>0</span><span style={{paddingLeft: '10px', border: 'none'}}>No</span></div>
    </div>
  )
}

export default RatingButtonComponent