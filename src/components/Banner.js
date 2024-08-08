import React from 'react';
import './Banner.css';
import bannerImage from '../assets/display1.jpg'; // Adjust path if necessary

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Discover Elegant Eyewear Solutions</h1>
          <p>Explore our premium collection of sunglasses and magnifiers, crafted for quality and style. Find the perfect pair for every occasion.</p>
          <div className="banner-buttons">
            <button className="browse-button">Explore Collection</button>
            <button className="more-button">Learn More <span>&#10148;</span></button>
          </div>
        </div>
        <div className="banner-image">
          <img src={bannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
