import React, { useState } from 'react';
import DotGrid from '../Components/DotGrid.js';
import ImageSlider from '../Components/ImageSlider.js';
import ProgressBar from '../Components/ProgressBar.js';
import MultiStepActiveForm from '../Components/MultiStepForm';
import businessImage1 from '../images/business/photo-female-business-1.jpg';

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
  const [currentStep, setCurrentStep] = useState(1);

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

  const handlePhotoChange = (index) => {
    setCurrentPhotoIndex(index);
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const { ratings, colors } = photosData[currentPhotoIndex];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            {renderRatingRow('SMART', ratings.smart, colors[0])}
            {renderRatingRow('TRUSTWORTHY', ratings.trustworthy, colors[1])}
            {renderRatingRow('ATTRACTIVE', ratings.attractive, colors[2])}
          </>
        );
      case 2:
        return <div>Data content goes here</div>;
      case 3:
        return <div>Notes content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='home-container'>
        <div style={{ marginTop: '10%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '450px' }}>
          <ImageSlider onPhotoChange={handlePhotoChange} />
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
                <DotGrid dotColor="#924fb1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works-section" style={{marginTop: '100px'}}>
        <span className="how-it-works-header">How it works.</span>
        <div className="how-it-works-text">
          <span>
            Upload photos, receive scores on key traits from real people, and get feedback to improve your online <br/>
            image. Vote on photos for a free test, or purchase credits for faster results!
          </span>
        </div>
      </div>

      <div className="image-form-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '230px', fontFamily: 'roboto', padding: '20px' }}>
          <div style={{textAlign: 'center', backgroundColor: '#393f4f', padding: '5px 0', color: 'white', fontSize: '15px' }}>BUSINESS</div>
          <img src={businessImage1} style={{ width: '230px', height: '250px', paddingTop: '20px'}} alt="Business" />
          <span className="context-label">TITLE</span>
          <div>Accountant</div>
        </div>

        <div>
          <div className="multi-step-form">
            <div style={{ width: '80%', marginTop: '20px' }} className="step-list">
              <div
                className={`step ${currentStep === 1 ? 'active' : ''}`}
                onClick={() => handleStepChange(1)}
              >
                SCORES
              </div>
              <div
                className={`step ${currentStep === 2 ? 'active' : ''}`}
                onClick={() => handleStepChange(2)}
              >
                DATA
              </div>
              <div
                className={`step ${currentStep === 3 ? 'active' : ''}`}
                onClick={() => handleStepChange(3)}
              >
                NOTES
              </div>
            </div>
          </div>
          <div>
            {renderStepContent()}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
