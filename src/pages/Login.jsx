import React, { useState } from 'react';
import './Login.css'; // Import your login-specific CSS file

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('UserID:', userId);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot password clicked');
  };

  const handleRegister = () => {
    // Add your register logic here or navigate to the registration page
    console.log('Register clicked');
  };

  return (
    <div className="login-page"> {/* Apply background only to the login page */}
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>

        {/* Additional buttons for Forgot Password and Register */}
        <div className="additional-buttons">
          <button type="button" className="forgot-button" onClick={handleForgotPassword}>
            (?) Forgot Password
          </button>
          <button type="button" className="register-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
