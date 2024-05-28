// App.js
import './App.scss';
import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Grid from './Pages/Grid.js';
import MyTests from './Pages/MyTests.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Grid />} />
            <Route path="/my-tests" element={<MyTests />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

