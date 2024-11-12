import { BrowserRouter as Router, Route, Routes,HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

// Dashboard configuration
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import Settings from './pages/Dashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} /> 

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />




      </Routes>
    </Router>
  );
}

export default App;
