import React, { useState, useContext, useEffect } from 'react';
import { useRef } from 'react'; // Import useRef from React
import ProgressBar from './ProgressBar';
import { SubmissionDataContext } from '../Context/SubmissionDataContext';
import ImageCardComponent from './ImageCardComponent';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Import the download icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import html2canvas from 'html2canvas';


const MultiStepFormActiveTest = ({ ratings, category, image, hash }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hashedImage, setHashedImage] = useState(hash || null);
  const { submissionDataList } = useContext(SubmissionDataContext);
  const imageStepContainerRef = useRef(null); // Ref for the image-step-container

  const generateHash = async (blobUrl) => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  useEffect(() => {
    const hashBlobImage = async () => {
      if (image.startsWith('blob:')) {
        const imageHash = await generateHash(image);
        setHashedImage(imageHash);
      } else {
        setHashedImage(image);
      }
    };

    hashBlobImage();
  }, [image]);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const formatRating = (value) => {
    return (value / 10).toFixed(1);
  };

  const calculateLeftPosition = (value) => {
    const maxLeft = 600; // The maximum width of the progress bar
    const minRating = 0;
    const maxRating = 100;
    return ((value - minRating) / (maxRating - minRating)) * maxLeft; // Scale value to progress bar width
  };

  const ratingsMap = {
    dating: [
      { label: 'Smart', value: ratings.smart, color: '#1eb771' },
      { label: 'Trustworthy', value: ratings.trustworthy, color: '#547fd6' },
      { label: 'Attractive', value: ratings.attractive, color: '#ef6324' },
    ],
    social: [
      { label: 'Confident', value: ratings.confident, color: '#1eb771' },
      { label: 'Authentic', value: ratings.authentic, color: '#547fd6' },
      { label: 'Fun', value: ratings.fun, color: '#ef6324' },
    ],
    business: [
      { label: 'Competent', value: ratings.competent, color: '#1eb771' },
      { label: 'Likable', value: ratings.likable, color: '#547fd6' },
      { label: 'Influential', value: ratings.influential, color: '#ef6324' },
    ],
  };

  const renderRatings = () => {
    if (!ratings) {
      return <div>No ratings available</div>;
    }
  
    const renderRatingRow = (width, height, label, value, color) => {
      let descriptionSpan;
      let adjustedValue = value; // Create a variable to store the adjusted value
    
      // Adjust value for descriptionSpan if currentStep is 4
      if (currentStep === 4) {
        adjustedValue /= 2; // Divide value by 2
      }
    
      if (adjustedValue <= 10.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(adjustedValue) }}>Bottom 10%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (adjustedValue <= 20.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(adjustedValue) }}>Bottom 20%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (adjustedValue <= 39.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(adjustedValue) }}>Below Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (adjustedValue <= 60.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(adjustedValue) }}>Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (adjustedValue <= 79.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(adjustedValue) }}>Above Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else if (adjustedValue <= 89.0) {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(adjustedValue) }}>Top 20%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      } else {
        descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(adjustedValue) }}>Top 10%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
      }
    
      return (
        <div style={{ fontFamily: 'roboto' }} key={label}>
          <div>
            <span>{label} </span><span>{formatRating(value)}</span>
          </div>
          <ProgressBar width={width} height={height} value={value} color={color} />
          <div style={{ paddingBottom: '35px', position: 'relative' }}>
            {descriptionSpan}
          </div>
        </div>
      );
    };
    
  
    if (currentStep === 1) {
      console.log('current step 1', currentStep);
      return ratingsMap[category.toLowerCase()].map(({ label, value, color }) =>
        renderRatingRow(600, 25, label, value, color)
      );
    }
  
    if (currentStep === 4) {
      console.log('current step 4', currentStep);
      return ratingsMap[category.toLowerCase()].map(({ label, value, color }) =>
        renderRatingRow(300, 12.5, label, value, color) // Assuming you want to render a fixed value
      );
    }
  
    return null; // Return null if neither condition is met
  };
  

  const textAreaComments = submissionDataList.filter(submission => {
    if (image.startsWith('blob:')) {
      // For the current blob image, match by the image hash directly
      return submission.selectedOption === image && submission.hash === hash && submission.textareaContent;
    } else {
      // For the current non-blob image, match by selectedOption (image URL)
      return submission.selectedOption === image && submission.textareaContent;
    }
  });

  const countSelections = (selectionsArray) => {
    const counts = {};

    selectionsArray.forEach(submission => {
      Object.entries(submission.selections).forEach(([label, value]) => {
        if (!counts[label]) {
          counts[label] = { '0/No': 0, '1/SOMEWHAT': 0, '2/YES': 0, '3/VERY': 0 };
        }
        if (value === 0) {
          counts[label]['0/No']++;
        } else if (value === 33.33333) {
          counts[label]['1/SOMEWHAT']++;
        } else if (value === 66.66666) {
          counts[label]['2/YES']++;
        } else if (value === 99.99999) {
          counts[label]['3/VERY']++;
        }
      });
    });
    console.log('Selection Counts:', counts);
    return counts;
  };

  const imageSelections = submissionDataList.filter(submission => {
    if (image.startsWith('blob:')) {
      return submission.selectedOption === image && submission.hash === hash;
    } else {
      return submission.selectedOption === image;
    }
  });

  console.log('imageSelections:', imageSelections);

  const categorizedSelections = imageSelections.map(submission => ({
    image: submission.selectedOption,
    category,
    selections: submission.selections,
  }));

  console.log('categorizedSelections:', categorizedSelections);
  const selectionCounts = countSelections(categorizedSelections);
  console.log('selectionCounts:', selectionCounts);

  const renderRectangles = (count, color) => {
    const rectangles = [];
    for (let i = 0; i < count; i++) {
      rectangles.push(
        <div
          key={i}
          style={{
            width: '150px',
            height: '10px',
            backgroundColor: color,
            // marginBottom: '2px',
            marginLeft: '2px',
            marginRight: '2px',
            border: `1px solid ${color}`
          }}
        />
      );
    }
    return rectangles;
  };

  const renderSelectionCounts = () => {
    return Object.entries(selectionCounts).map(([label, counts]) => {
      // Determine the color based on the label
      let color;
      switch (label.toLowerCase()) {
        //Dating category selection labels
        case 'smart':
          color = 'rgb(30, 183, 113)';
          break;
        case 'trustworthy':
          color = 'rgb(84, 127, 214)';
          break;
        case 'attractive':
          color = 'rgb(239, 99, 36)';
          break;

        //Social category selection labels
        case 'confident':
          color = 'rgb(243, 134, 52)';
          break;
        case 'authentic':
          color = 'rgb(30, 183, 113)';
          break;
        case 'fun':
          color = 'rgb(103, 54, 132)';
          break;

        //Business category selection labels
        case 'competent':
          color = 'rgb(84, 127, 214)';
          break;
        case 'likable':
          color = 'rgb(244, 182, 7)';
          break;
        case 'influential':
          color = 'rgb(222, 71, 58)';
          break;

        default:
          color = '#ccc'; // Default color if label does not match
          break;
      }

      const renderEmptyRectangle = () => {
        return <div style={{ width: '150px', marginLeft: '2px', marginRight: '2px' }} />
      }

      return (
        <div style={{ fontFamily: 'roboto', color: '#333', marginBottom: '20px' }} key={label}>
          <label>{label.toUpperCase()}</label>

          <div style={{ paddingLeft: '25px', textAlign: 'center', color: '#333' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <span style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
                <span style={{ color: '#949494', fontSize: '14px', marginTop: '5px' }}>0/NO</span>
                <span style={{ display: 'flex', flexDirection: 'column-reverse' }}>{counts['0/No'] === 0 ? renderEmptyRectangle() : renderRectangles(counts['0/No'], color)}</span>
                <span style={{ marginBottom: '3px' }}>{counts['0/No']} votes</span>
              </span>

              <span style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
                <span style={{ color: '#949494', fontSize: '14px', marginTop: '5px' }}>1/SOMEWHAT</span>
                <span style={{ display: 'flex', flexDirection: 'column-reverse' }}>{counts['1/SOMEWHAT'] === 0 ? renderEmptyRectangle() : renderRectangles(counts['1/SOMEWHAT'], color)}</span>
                <span style={{ marginBottom: '3px' }}>{counts['1/SOMEWHAT']} votes</span>
              </span>

              <span style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
                <span style={{ color: '#949494', fontSize: '14px', marginTop: '5px' }}>2/YES</span>
                <span style={{ display: 'flex', flexDirection: 'column-reverse' }}>{counts['2/YES'] === 0 ? renderEmptyRectangle() : renderRectangles(counts['2/YES'], color)}</span>
                <span style={{ marginBottom: '3px' }}>{counts['2/YES']} votes</span>
              </span>

              <span style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
                <span style={{ color: '#949494', fontSize: '14px', marginTop: '5px' }}>3/VERY</span>
                <span style={{ display: 'flex', flexDirection: 'column-reverse' }}>{counts['3/VERY'] === 0 ? renderEmptyRectangle() : renderRectangles(counts['3/VERY'], color)}</span>
                <span style={{ marginBottom: '3px' }}>{counts['3/VERY']} votes</span>
              </span>

              {/* Add the border div here */}
              <div style={{ position: 'absolute', bottom: '20px', left: '0', width: '100%', borderTop: '2px solid rgb(51, 51, 51)' }}></div>
            </div>
          </div>
        </div>
      );
    });
  };

  const downloadImage = async () => {
    const canvas = await html2canvas(imageStepContainerRef.current);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'step_image.png';
    link.click();
  };

  return (
    <div className="multi-step-form">
      <div className="step-list">
        <div
          className={`step ${currentStep === 1 ? 'active' : ''}`}
          onClick={() => handleStepChange(1)}
        >
          SCORES
        </div>
        <div
          className={`step ${currentStep === 2 ? 'active' : ''}`}
          onClick={() => handleStepChange(2)}
          // style={{  paddingRight: '100px' }}
        >
          DATA
        </div>
        <div
          className={`step ${currentStep === 3 ? 'active' : ''}`}
          onClick={() => handleStepChange(3)}
        >
          NOTES <span style={{ color: 'orange' }}>({textAreaComments.length})</span>
        </div>
        <div
          className={`step ${currentStep === 4 ? 'active' : ''}`}
          onClick={() => handleStepChange(4)}
        >
          IMAGE
        </div>
      </div>

      <div className="step-content" style={{ paddingTop: '25px' }}>

        {currentStep === 1 && renderRatings()}

        {currentStep === 2 && (
          <div>
            {renderSelectionCounts()}
          </div>
        )}

        {currentStep === 3 && (
          <div style={{ fontFamily: 'roboto', color: '#666' }}>
            {textAreaComments.map((comment, index) => (
              <div key={`${comment.selectedOption}-${index}`} style={{ borderBottom: '1px solid lightgray', padding: '5px' }}>
                <span>"{comment.textareaContent}"</span>
              </div>
            ))}
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <div className="image-step-container" ref={imageStepContainerRef}>
                    <div className="image-step-container-row">
                  <div className="image-step-container-column">
                    <img style={{ width: '150px', height: '200px' }} src={image} alt="Selected" />
                  </div>
                  <div className="image-step-container-column">
                    <h4>Tested on</h4>
                    <h3>Photofeeler</h3>
                    <h4>VOTES</h4>
                    <h3>15</h3>
                    <h4>VOTERS</h4>
                    <h3>AGE 34 </h3>
                  </div>
                </div>
                <div className="image-step-container-row">
                  <div className="image-step-container-column full-width">
                    {renderRatings()}
                  </div>
                </div>

              </div>
              <div className="download-button" onClick={downloadImage}>
                  <FontAwesomeIcon icon={faDownload} />
                </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MultiStepFormActiveTest;