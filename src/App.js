// App.js
import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Grid from './Pages/Grid';
import MyTests from './Pages/MyTests';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageCardComponent from './Components/ImageCardComponent';

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
            <Route path="rated-photos" element={<ImageCardComponent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

