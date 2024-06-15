import React from 'react';

function ImageSection({ selectedImage, isStep4, activeButton, businessTitle, socialTitle, datingAge, datingGender, datingMultiplePeople, sliderValueProps }) {
  return (
    <div className="image-section">
      {selectedImage && (
        <div className="image-holder">
          {activeButton && (
            <h1 className="image-title">{activeButton.toUpperCase()}</h1>
          )}
          {/* Set fixed width and height for the image */}
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ width: '400px', height: 'auto' }} // Adjust dimensions as needed
          />
          {businessTitle && (
            <div>
              <h5 className="image-details">Business Title</h5>
              <p className="image-details" style={{ color: 'black' }}>{businessTitle}</p>
            </div>
          )}
          {socialTitle && (
            <div>
              <h5 className="image-details">Social Title</h5>
              <p className="image-details" style={{ color: 'black' }}>{socialTitle}</p>
            </div>
          )}

          <div>
            {datingMultiplePeople && (
              <div>
                <h5 className="image-details">SUBJECT</h5>
                <p className="image-details" style={{ color: 'black' }}>{datingMultiplePeople}</p>
              </div>
            )}
            {(datingGender && datingAge) || sliderValueProps ? (
              <div>
                <div className="dating-subject-details">
                  {datingGender && datingAge && (
                    <div>
                      <h5 className="image-details">SUBJECT</h5>
                      <p className="image-details" style={{ color: 'black' }}> - {datingAge}/{datingGender.toUpperCase()}</p>
                      {sliderValueProps && (
                        <div>
                          <h5 className="image-details">VOTERS</h5>
                          <p className="image-details" style={{ color: 'black' }}>AGE - ≤ {sliderValueProps}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageSection;
