import React, { useState } from 'react';
import DotGrid from '../Components/DotGrid.js';
import ImageSlider from '../Components/ImageSlider.js';
import ProgressBar from '../Components/ProgressBar.js';

const formatRating = (value) => {
  return (value / 10).toFixed(1);
};

const renderRatingRow = (label, value, color) => (
  <div key={label} style={{ marginBottom: '10px' }}>
    <ProgressBar value={value} height={20} width={314} color={color} />
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
      <span>{label}</span> <span>{formatRating(value)}</span>
    </div>
  </div>
);

function Home() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Define the ratings and gradient colors for each photo
  const photosData = [
    {
      ratings: { smart: 80, trustworthy: 70, attractive: 90 },
      colors: ['linear-gradient(90deg,#bcf5f5 0,#537ed5 100%)', 'linear-gradient(90deg,#ffe9b3 0,#f38735 100%)', 'linear-gradient(90deg,#ccffc2 0,#1eb873 100%)'],
    },
    {
      ratings: { smart: 65, trustworthy: 75, attractive: 85 },
      colors: ['linear-gradient(90deg,#ffe9b3 0,#f38735 100%)'],
    },
    {
      ratings: { smart: 90, trustworthy: 60, attractive: 70 },
      colors: ['linear-gradient(90deg,#fadb9e 0,#ef6525 100%)'],
    },
  ];

  // Handle photo change
  const handlePhotoChange = (index) => {
    setCurrentPhotoIndex(index);
  };

  const { ratings, colors } = photosData[currentPhotoIndex];

  return (
    <div>
      <div className='home-container'>
        <div style={{ marginTop: '10%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '450px' }}>
          <ImageSlider onPhotoChange={handlePhotoChange} />
          {/* <div style={{ backgroundColor: 'green', width: '100px', height: '10px'}}></div> */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <div style={{ backgroundColor: '#393f4f', padding: '10px 60px', color: 'white', fontSize: '15px' }}>DATING</div>
            <div style={{ color: '#a3a3a3', backgroundColor: '#f0f8fa', padding: '10px 40px', fontSize: '15px' }}><span style={{ color: '#333' }}>20</span> VOTES</div>
          </div>
          <div style={{ padding: '20px' }}>
            {renderRatingRow('SMART', ratings.smart, colors[0])}
            {renderRatingRow('TRUSTWORTHY', ratings.trustworthy, colors[1])}
            {renderRatingRow('ATTRACTIVE', ratings.attractive, colors[2])}
          </div>
        </div>

        <div className='left-column'></div>
        <div className='right-column'>
          <div className="home-main-text">What are your <br />photos saying <br />about you?</div>
          <p className="home-description-text">
            Stop guessing, start testing. Choose your <span className="home-bold">business, social</span>
            <br /> and dating photos with the world's #1 photo testing tool.
          </p>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <button className="test-photos-button">Test my photos</button>
                <h6>Get Started Rating Photos</h6>
              </div>
              <div>
                <DotGrid dotColor="#924fb1" /> {/* Pass the dotColor prop */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works-section" style={{marginTop: '100px'}}>
        <span className="how-it-works-header">How it works.</span>
        <div className="how-it-works-text">
          <span>
            Upload photos, receive scores on key traits from real people, and get feedback to improve your online
            image. Vote on photos for a free test, or purchase credits for faster results!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
