// Rating.js
import React from 'react';
import RatingButtonComponent from './RatingButtonComponent';

const Rating = () => {
  return (
    <div>
      <table className="rating-table">
        <thead>
          <tr>
            <th>Smart</th>
            <th>Trustworthy</th>
            <th>Attractive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingLeft: '12px' }}>INSIGHTFUL, PERCEPTIVE</td>
            <td style={{ paddingLeft: '12px' }}>PRINCIPLED, RELIABLE</td>
            <td style={{ paddingLeft: '12px' }}>PRETTY/HANDSOME</td>
          </tr>
          <tr>
            <td><RatingButtonComponent backgroundColor="#1eb771"/></td>
            <td><RatingButtonComponent backgroundColor="#547fd6"/></td>
            <td><RatingButtonComponent backgroundColor="#ef6324"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rating;
