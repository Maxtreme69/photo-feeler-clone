import React, { useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Grid from './Pages/Grid.js';
import MyTests from './Pages/MyTests.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RatedPhotos from './Pages/RatedPhotos';
import Vote from './Pages/Vote';
import { SubmissionDataProvider } from './Context/SubmissionDataContext'; // Import the SubmissionDataProvider
import { RectanglesProvider } from './Context/RectanglesContext'; // Import RectanglesProvider
import CardFlip from './Components/CardFlip';

function App() {
  const [submissionData, setSubmissionData] = useState(null);

  const handleSubmissionData = (data) => {
    setSubmissionData(data);
  };

  return (
    <Router>
      <div className="App">
        <div className="navbar-container">
          <Navbar />
          <SubmissionDataProvider>
            <RectanglesProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Grid />} />
                <Route path="/my-tests" element={<MyTests />} />
                <Route path="/cardflip" element={<CardFlip />} />
                <Route path="/vote" element={<Vote onSubmission={handleSubmissionData} />} />
                <Route path="/rated-photos" element={<RatedPhotos submissionData={submissionData} />} />
              </Routes>
            </RectanglesProvider>
          </SubmissionDataProvider>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
