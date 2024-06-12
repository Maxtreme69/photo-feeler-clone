import React, { useState } from 'react';
import DotGrid from '../Components/DotGrid.js';
import ImageSlider from '../Components/ImageSlider.js';
import ProgressBar from '../Components/ProgressBar.js';
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

const renderRatingRowMultiStepFrom = (label, value, color) => (
  <div key={label} style={{ marginBottom: '10px' }}>
    <div>
      <div style={{ color: '#333', lineHeight: '1.42', fontFamily: 'roboto', fontSize: '20px', marginTop: '30px' }}>
        <span>{label}</span><span style={{}}>{formatRating(value)}</span>
      </div>
      <ProgressBar value={value} height={25} width={450} color={color} />
    </div>
  </div>
);

function Home() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const textAreaComments = [
    { selectedOption: 'Comment1', textareaContent: 'Warm smile, good eye contact, I like her ' },
    { selectedOption: 'Comment2', textareaContent: 'Great Photo!' },
    { selectedOption: 'Comment3', textareaContent: 'Solid picture, although I wish it were a bit brighter!' },
    { selectedOption: 'Comment4', textareaContent: 'Nice Smile :)' },
    { selectedOption: 'Comment5', textareaContent: 'Looks friendly but also smart' },
    { selectedOption: 'Comment6', textareaContent: 'Background is a little bit busy' },
    { selectedOption: 'Comment7', textareaContent: 'You look very professional' },
    { selectedOption: 'Comment8', textareaContent: 'Solid picture, although I wish it were a bit brighter!' },
    { selectedOption: 'Comment9', textareaContent: 'You can be my accountant any day!' },
    { selectedOption: 'Comment10', textareaContent: 'Photo is too dark!' }
  ];

  const photosData = [
    {
      ratings: { smart: 80, trustworthy: 70, attractive: 90, competent: 91, likable: 89, Influential: 77 },
      colors: ['linear-gradient(90deg,#bcf5f5 0,#537ed5 100%)', 'linear-gradient(90deg,#ffe9b3 0,#f38735 100%)', 'linear-gradient(90deg,#ccffc2 0,#1eb873 100%)', '#547fd6', '#f4b607', '#1eb771'],
    },
    {
      ratings: { smart: 65, trustworthy: 75, attractive: 85 },
    },
    {
      ratings: { smart: 90, trustworthy: 60, attractive: 70 },
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
            {renderRatingRowMultiStepFrom('Competent', ratings.competent, colors[3])}
            {renderRatingRowMultiStepFrom('Likable', ratings.likable, colors[4])}
            {renderRatingRowMultiStepFrom('Influential', ratings.Influential, colors[5])}
          </>
        );
      case 2:
        return (
          <>
            <h3 style={{ marginTop: '10px', marginBottom: '0px', fontFamily: 'roboto', color: '#333', fontSize: '19px', fontWeight: '400' }}>Competent</h3>
            <div style={{ color: '#333', fontFamily: 'roboto', fontSize: '12px', borderBottom: '2px solid black', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>0 VOTES</div>
                <div style={{ width: '100px', height: '0', backgroundColor: '#547fd6' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>2 VOTES</div>
                <div style={{ width: '100px', height: '9.25px', backgroundColor: '#547fd6' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>14 VOTES</div>
                <div style={{ width: '100px', height: '65px', backgroundColor: '#547fd6' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>4 VOTES</div>
                <div style={{ width: '100px', height: '18.66px', backgroundColor: '#547fd6' }}></div>
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'roboto', fontSize: '12px', gap: '45px', marginTop: '3px' }}>
              <div>0 / NO</div><div>1 / SOMEWHAT</div><div style={{ marginRight: '25px' }}>2 / YES</div><div>3 / VERY</div>
            </div>

            <h3 style={{ marginTop: '10px', marginBottom: '0px', fontFamily: 'roboto', color: '#333', fontSize: '19px', fontWeight: '400' }}>Likable</h3>
            <div style={{ color: '#333', fontFamily: 'roboto', fontSize: '12px', borderBottom: '2px solid black', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>0 VOTES</div>
                <div style={{ width: '100px', height: '0', backgroundColor: '#f4b607' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>2 VOTES</div>
                <div style={{ width: '100px', height: '9.25px', backgroundColor: '#f4b607' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>11 VOTES</div>
                <div style={{ width: '100px', height: '50px', backgroundColor: '#f4b607' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>7 VOTES</div>
                <div style={{ width: '100px', height: '32.5px', backgroundColor: '#f4b607' }}></div>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'roboto', fontSize: '12px', gap: '45px', marginTop: '3px' }}>
              <div>0 / NO</div><div>1 / SOMEWHAT</div><div style={{ marginRight: '25px' }}>2 / YES</div><div>3 / VERY</div>
            </div>

            <h3 style={{ marginTop: '10px', marginBottom: '0px', fontFamily: 'roboto', color: '#333', fontSize: '19px', fontWeight: '400' }}>Influential</h3>
            <div style={{ color: '#333', fontFamily: 'roboto', fontSize: '12px', borderBottom: '2px solid black', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>3 VOTES</div>
                <div style={{ width: '100px', height: '14px', backgroundColor: '#1eb771' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>3 VOTES</div>
                <div style={{ width: '100px', height: '14px', backgroundColor: '#1eb771' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>11 VOTES</div>
                <div style={{ width: '100px', height: '50px', backgroundColor: '#1eb771' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>3 VOTES</div>
                <div style={{ width: '100px', height: '14px', backgroundColor: '#1eb771' }}></div>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'roboto', fontSize: '12px', gap: '45px', marginTop: '3px' }}>
              <div>0 / NO</div><div>1 / SOMEWHAT</div><div style={{ marginRight: '25px' }}>2 / YES</div><div>3 / VERY</div>
            </div>
          </>

        ) 
      case 3:
        return (
          <div style={{ fontFamily: 'roboto', color: '#666' }}>
            {textAreaComments.map((comment, index) => (
              <div key={`${comment.selectedOption}-${index}`} style={{ borderBottom: '1px solid lightgray', padding: '5px' }}>
                <span>"{comment.textareaContent}"</span>
              </div>
            ))}
          </div>
        );
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

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div className="image-form-container" style={{ display: 'flex', justifyContent: 'center', borderRadius: '10px' }}>
          <div style={{ fontFamily: 'roboto', padding: '20px' }}>
            <div style={{textAlign: 'center', backgroundColor: '#393f4f', padding: '5px 0', color: 'white', fontSize: '15px', borderRadius: '2.5px' }}>BUSINESS</div>
            <img src={businessImage1} style={{ width: '230px', height: '250px', paddingTop: '20px'}} alt="Business" />
            <span className="context-label">TITLE</span>
            <div>Accountant</div>
          </div>

          <div style={{ color: 'gray', height: '350px', margin: '20px 20px 100px 0', borderRight: '1px solid #ddd' }}></div>

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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'normal' }}>
          <div>
            <div className="how-it-works-header-2">
              Test. Improve. Repeat.
            </div>
            <div className="how-it-works-text">
              <span>
                Every pic is different. Test your<br/> photos, apply suggestions, and retest<br/> to gauge improvements
              </span>
            </div>
          </div>

          <div>
            <div className="how-it-works-header-2">
              The Power of Feedback
            </div>
            <div className="how-it-works-text">
              <span>
                Your input helps people land their<br/> dream job, attract their soulmate, and<br/> communicate their personality.
              </span>
            </div>
          </div>

          <div>
            <div className="how-it-works-header-2">
              Privacy & Control
            </div>
            <div className="how-it-works-text">
              <span>
              You decide exactly when your photos<br/> will be visible, to whome, and for how<br/> long.
              </span>
            </div>
          </div>

        </div>



      </div>

    </div>
  );
}

export default Home;
