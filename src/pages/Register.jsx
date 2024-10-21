import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the createUserWithEmailAndPassword method from Firebase
import { auth } from '../../firebase'; // Import the auth instance from your firebase configuration
import './Register.css'; // Import the Register-specific CSS file

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle registration errors
  const [message, setMessage] = useState(null); // To show success messages after registration

  const handleRegister = (e) => {
    e.preventDefault();

    // Reset message and error before new action
    setError(null);
    setMessage(null);

    // Firebase registration logic
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        console.log('User registered:', user);
        setMessage('Registration successful! You can now log in.');
      })
      .catch((error) => {
        // Handle registration errors
        setError(error.message);
        console.error('Registration error:', error);
      });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
