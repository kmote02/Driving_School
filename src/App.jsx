import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import ImageSlider from './components/ImageSlider'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div>
        <div ><ImageSlider /></div>
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/about" element={<About />} /> {/* About page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
