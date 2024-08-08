// src/pages/Signup.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Ensure this CSS file is created for styling

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Add your signup logic here
      navigate('/');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form" onSubmit={handleSignup}>
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
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login" className="login-button">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
