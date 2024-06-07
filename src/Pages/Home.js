import React from 'react';
import DotGrid from '../Components/DotGrid.js';
import ImageCardComponent from '../Components/ImageCardComponent.js';
import datingImage from '../images/dating/females/photo-female-1.webp';

function Home() {
  // Sample data for the ImageCardComponent
  const sampleCategory = 'Dating';
  const sampleRatings = {
    smart: 80,
    trustworthy: 70,
    attractive: 90,
  };
  const sampleVotes = 150;
  // const sampleTextAreaContent = 'This is a sample comment about the image.';

  return (
    <div>
      <div className='home-container'>
      <ImageCardComponent
            image={datingImage}
            category={sampleCategory}
            ratings={sampleRatings}
            votes={sampleVotes}
            // textAreaContent={sampleTextAreaContent}
          />
        <div className='left-column'>

        </div>
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
      <div className="how-it-works-section">
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
