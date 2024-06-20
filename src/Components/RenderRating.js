// // RenderRating.js

// import React from 'react';
// import ProgressBar from './ProgressBar';

// const RenderRating = ({ ratings, category }) => {
//   const formatRating = (value) => {
//     return (value / 10).toFixed(1);
//   };

//   const calculateLeftPosition = (value) => {
//     const maxLeft = 600; // The maximum width of the progress bar
//     const minRating = 0;
//     const maxRating = 100;
//     return ((value - minRating) / (maxRating - minRating)) * maxLeft; // Scale value to progress bar width
//   };

//   const renderRatingRow = (width, height, label, value, color) => {
//     let descriptionSpan;
//     if (value <= 10.0) {
//       descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Bottom 10%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
//     } else if (value <= 20.0) {
//       descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Bottom 20%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
//     } else if (value <= 39.0) {
//       descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Below Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
//     } else if (value <= 60.0) {
//       descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
//     } else if (value <= 79.0) {
//       descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Above Average<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
//     } else if (value <= 89.0) {
//       descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Top 20%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
//     } else {
//       descriptionSpan = <span className="description" style={{ left: calculateLeftPosition(value) }}>Top 10%<span className="triangle" style={{ borderBottom: `5px solid ${color}` }}></span></span>;
//     }
//   };

//     return (
//       <div style={{ fontFamily: 'roboto' }} key={label}>
//         <div>
//           <span>{label} </span><span>{formatRating(value)}</span>
//         </div>
//         <ProgressBar width={300} height={12.5} value={value} color={color} /> {/* Pass width prop */}
//         <div style={{ paddingBottom: '35px', position: 'relative' }}>
//             {descriptionSpan}
//           </div>       
//       </div>
//     );
//   };

//   const renderRatings = () => {
//     if (!ratings) {
//       return <div>No ratings available</div>;
//     }

//     return ratingsMap[category.toLowerCase()].map(({ label, value, color }) => renderRatingRow(label, value, color));
//   };

//   return (
//     <div>{renderRatings()}</div>
//   );
// };

// export default RenderRating;
