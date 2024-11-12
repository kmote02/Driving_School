import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase'; 
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div className="dashboard">
      <header className="navbar">
        <h1>Dashboard</h1>
        <div className="nav-links">
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>
      <div className="dashboard-content">
        <h2>Welcome to your Dashboard</h2>
        <p>This is the main dashboard area.</p>
      </div>
    </div>
  );
};

export default Dashboard;
