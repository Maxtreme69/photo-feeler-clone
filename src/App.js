import React, { useState } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Grid from './Pages/Grid';
import MyTests from './Pages/MyTests';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RatedPhotos from './Pages/RatedPhotos';
import Vote from './Pages/Vote';
import { SubmissionDataProvider } from './Context/SubmissionDataContext'; // Import the SubmissionDataProvider

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Grid />} />
              <Route path="/my-tests" element={<MyTests />} />
              <Route path="/vote" element={<Vote onSubmission={handleSubmissionData} />} />
              <Route path="/rated-photos" element={<RatedPhotos submissionData={submissionData} />} />
            </Routes>
          </SubmissionDataProvider>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;