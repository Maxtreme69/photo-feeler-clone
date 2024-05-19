import React, { useState, useEffect } from 'react';
import RatingButtonComponent from './RatingButtonComponent';

const Rating = ({ selectedCategory, onSelectionChange, reset, voteReceived }) => {
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

  useEffect(() => {
    if (voteReceived) {
      setSelections({
        smart: null,
        trustworthy: null,
        attractive: null,
      });
    }
  }, [voteReceived]);

  const handleSelection = (category, index) => {
    const newSelections = { ...selections, [category]: index };
    setSelections(newSelections);
    onSelectionChange(newSelections);
  };

  return (
    <div>
      {voteReceived && <p>Vote Received!</p>}
      {selectedCategory === 'dating' && (
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
                  selected={selections.smart}
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#547fd6" 
                  category="trustworthy"
                  onRatingSelect={handleSelection}
                  selected={selections.trustworthy}
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#ef6324" 
                  category="attractive"
                  onRatingSelect={handleSelection}
                  selected={selections.attractive}
                />
              </td>
            </tr>
            <tr>
              <td>{`smart ${selections.smart}`}</td>
              <td>{`trustworthy ${selections.trustworthy}`}</td>
              <td>{`attractive ${selections.attractive}`}</td>
            </tr>
          </tbody>
        </table>
      )}

      {selectedCategory === 'social' && (
        <table className="rating-table">
          <thead>
            <tr>
              <th>Confident</th>
              <th>Authentic</th>
              <th>Fun</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ paddingLeft: '12px' }}>SELF-ASSURED</td>
              <td style={{ paddingLeft: '12px' }}>REAL, GENUINE</td>
              <td style={{ paddingLeft: '12px' }}>ENGAGING, INTERESTING</td>
            </tr>
            <tr>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#f38634" 
                  category="smart"
                  onRatingSelect={handleSelection}
                  selected={selections.smart}
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#1eb771" 
                  category="trustworthy"
                  onRatingSelect={handleSelection}
                  selected={selections.trustworthy}
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#673684" 
                  category="attractive"
                  onRatingSelect={handleSelection}
                  selected={selections.attractive}
                />
              </td>
            </tr>
            <tr>
              <td>{`Confident ${selections.smart}`}</td>
              <td>{`Authentic ${selections.trustworthy}`}</td>
              <td>{`Fun ${selections.fun}`}</td>
            </tr>
          </tbody>
        </table>
      )}

      {selectedCategory === 'business' && (
        <table className="rating-table">
          <thead>
            <tr>
              <th>Competent</th>
              <th>Likable</th>
              <th>Influential</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ paddingLeft: '12px' }}>SMART, CAPABLE</td>
              <td style={{ paddingLeft: '12px' }}>FRIENDLY, KIND</td>
              <td style={{ paddingLeft: '12px' }}>LEADING, IN CHARGE</td>
            </tr>
            <tr>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#547fd6" 
                  category="smart"
                  onRatingSelect={handleSelection}
                  selected={selections.smart}
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#f4b607" 
                  category="trustworthy"
                  onRatingSelect={handleSelection}
                  selected={selections.trustworthy}
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#de473a" 
                  category="attractive"
                  onRatingSelect={handleSelection}
                  selected={selections.attractive}
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Rating;