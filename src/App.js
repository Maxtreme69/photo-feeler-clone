import './App.scss';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import SplitPage from './Pages/SplitPage';
import Grid from './Pages/Grid';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Grid />
        <Footer />
    </div>
  );
}

export default App;
