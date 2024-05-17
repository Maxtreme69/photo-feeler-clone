import React from 'react'
import femaleOne from '../images/dating/females/photo-female-1.webp';
import ProgressBar from './ProgressBar';

const ImageCardComponent = () => {
  return (
    <div>
        <div className='image-card-container'>
            <img src={ femaleOne }/>
            <div class="image-card-details-container">
                <div className="card-category-votes-title">
                    <span id="span-dating">DATING</span><span id="span-votes">VOTES</span>
                </div>
                <div>
                    <div>
                    <ProgressBar value={48} color="#1eb771"/>
                    </div>
                        SMART
                </div>
                <div>
                    <ProgressBar value={57} color="#547fd6"/>
                        TRUSTWORTHY
                </div>
                <div>
                    <ProgressBar value={46} color="#ef6324"/>
                        ATTRACTIVE
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageCardComponent