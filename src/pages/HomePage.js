// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Elegant Eyewear Solutions</h1>
          <p>Explore our premium collection of sunglasses and magnifiers, crafted for quality and style. Find the perfect pair for every occasion.</p>
          <Link to="/shop" className="cta-button">Shop Now</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
