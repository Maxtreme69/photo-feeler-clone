import React, { useState, useEffect } from 'react';
import RatingButtonComponent from './RatingButtonComponent';
import CommentComponent from './CommentComponent';

const Rating = ({ onSelectionChange, reset }) => {
  const [selections, setSelections] = useState({
    smart: null,
    trustworthy: null,
    attractive: null,
  });

  useEffect(() => {
    if (reset) {
      setSelections({
        smart: null,
        trustworthy: null,
        attractive: null,
      });
    }
  }, [reset]);

  const handleSelection = (category, index) => {
    const newSelections = { ...selections, [category]: index };
    setSelections(newSelections);
    onSelectionChange(newSelections);
  };

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
            <td>
              <RatingButtonComponent 
                backgroundColor="#1eb771" 
                category="smart"
                onRatingSelect={handleSelection}
                selected={selections.smart} // pass the selected state
              />
            </td>
            <td>
              <RatingButtonComponent 
                backgroundColor="#547fd6" 
                category="trustworthy"
                onRatingSelect={handleSelection}
                selected={selections.trustworthy} // pass the selected state
              />
            </td>
            <td>
              <RatingButtonComponent 
                backgroundColor="#ef6324" 
                category="attractive"
                onRatingSelect={handleSelection}
                selected={selections.attractive} // pass the selected state
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Rating;
