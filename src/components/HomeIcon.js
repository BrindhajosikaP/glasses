// src/components/HomeIcon.js
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.png';
import './HomeIcon.css';

const HomeIcon = () => {
  return (
    <Link to="/" className="home-icon">
      <img src={homeIcon} alt="Home" className="home-icon-image" />
    </Link>
  );
};

export default HomeIcon;
