import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the Dashboard-specific CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="navbar">
        <h1>Dashboard</h1>
        <div className="nav-links">
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
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
