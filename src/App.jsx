import { BrowserRouter as Router, Route, Routes,HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;
