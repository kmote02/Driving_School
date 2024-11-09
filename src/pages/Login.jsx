import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (auth.currentUser) {
      navigate('/dashboard'); // Redirect to dashboard if user is already logged in
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset error and message before a new action
    setError(null);
    setMessage(null);

    // Firebase authentication logic
    signInWithEmailAndPassword(auth, userId, password)
      .then((userCredential) => {
        // Signed in successfully
        console.log('User signed in:', userCredential.user);
        
        // Redirect to the dashboard after successful login
        navigate('/dashboard'); 
      })
      .catch((error) => {
        // Handle login errors
        setError(error.message);
        console.error('Login error:', error);
      });
  };

  const handleForgotPassword = () => {
    // Reset message and error before a new action
    setError(null);
    setMessage(null);

    if (!userId) {
      setError('Please enter your email to reset the password.');
      return;
    }

    sendPasswordResetEmail(auth, userId)
      .then(() => {
        console.log('Password reset email sent');
        setMessage('Password reset email sent! Please check your inbox.');
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
        setError(error.message);
      });
  };

  const handleRegister = () => {
    // Navigate to the register page
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="userId">User ID (Email)</label>
            <input
              type="email"
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
          {error && <p className="error-message">{error}</p>} {/* Display error messages */}
          {message && <p className="success-message">{message}</p>} {/* Display success messages */}
          <button type="submit">Login</button>
        </form>

        <div className="additional-buttons">
          <button
            type="button"
            className="forgot-button"
            onClick={handleForgotPassword}
          >
            (?) Forgot Password
          </button>
          <button
            type="button"
            className="register-button"
            onClick={handleRegister} // Navigate to the register page
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
