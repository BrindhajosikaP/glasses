// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Ensure this CSS file is created for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Add your login logic here
      navigate('/');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup" className="signup-button">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
