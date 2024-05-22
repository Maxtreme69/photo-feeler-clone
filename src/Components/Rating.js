import React, { useState, useEffect } from 'react';
import RatingButtonComponent from './RatingButtonComponent';

const Rating = ({ selectedCategory, onSelectionChange, reset, voteReceived }) => {
  const initialSelections = {
    dating: { smart: null, trustworthy: null, attractive: null },
    social: { confident: null, authentic: null, fun: null },
    business: { competent: null, likable: null, influential: null }
  };

  const [selections, setSelections] = useState(initialSelections[selectedCategory] || {});

  useEffect(() => {
    setSelections(initialSelections[selectedCategory] || {});
  }, [selectedCategory]);

  useEffect(() => {
    if (reset || voteReceived) {
      setSelections(initialSelections[selectedCategory] || {});
    }
  }, [reset, voteReceived, selectedCategory]);

  const handleSelection = (category, index) => {
    const percentage = index * 33.33333; // Convert rating to percentage
    const newSelections = { ...selections, [category]: percentage }; // Store the percentage directly
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
                  selected={selections.smart !== null ? selections.smart / 33.33333 : null} // Convert percentage back to index
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#547fd6" 
                  category="trustworthy"
                  onRatingSelect={handleSelection}
                  selected={selections.trustworthy !== null ? selections.trustworthy / 33.33333 : null} // Convert percentage back to index
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#ef6324" 
                  category="attractive"
                  onRatingSelect={handleSelection}
                  selected={selections.attractive !== null ? selections.attractive / 33.33333 : null} // Convert percentage back to index
                />
              </td>
            </tr>
            <tr>
              <td>{`smart ${selections.smart !== null ? selections.smart + '%' : ''}`}</td>
              <td>{`trustworthy ${selections.trustworthy !== null ? selections.trustworthy + '%' : ''}`}</td>
              <td>{`attractive ${selections.attractive !== null ? selections.attractive + '%' : ''}`}</td>
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
                  category="confident"
                  onRatingSelect={handleSelection}
                  selected={selections.confident !== null ? selections.confident / 33.33333 : null} // Convert percentage back to index
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#1eb771" 
                  category="authentic"
                  onRatingSelect={handleSelection}
                  selected={selections.authentic !== null ? selections.authentic / 33.33333 : null} // Convert percentage back to index
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#673684" 
                  category="fun"
                  onRatingSelect={handleSelection}
                  selected={selections.fun !== null ? selections.fun / 33.33333 : null} // Convert percentage back to index
                />
              </td>
            </tr>
            <tr>
              <td>{`Confident ${selections.confident !== null ? selections.confident + '%' : ''}`}</td>
              <td>{`Authentic ${selections.authentic !== null ? selections.authentic + '%' : ''}`}</td>
              <td>{`Fun ${selections.fun !== null ? selections.fun + '%' : ''}`}</td>
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
                  category="competent"
                  onRatingSelect={handleSelection}
                  selected={selections.competent !== null ? selections.competent / 33.33333 : null} // Convert percentage back to index
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#f4b607" 
                  category="likable"
                  onRatingSelect={handleSelection}
                  selected={selections.likable !== null ? selections.likable / 33.33333 : null} // Convert percentage back to index
                />
              </td>
              <td>
                <RatingButtonComponent 
                  backgroundColor="#de473a" 
                  category="influential"
                  onRatingSelect={handleSelection}
                  selected={selections.influential !== null ? selections.influential / 33.33333 : null} // Convert percentage back to index
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