import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; 
import trendingFrameImage from '../assets/aboutus.jpg';
const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <Link to="/" className="back-button">Back to Home</Link> {/* Back button */}
      </div>
      <div className="about-intro">
        <h1>Welcome to FocusFrame</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={trendingFrameImage} alt="Trendy Frames" />
        </div>
        <p>
          At FocusFrame, we blend innovation with style to deliver top-quality eyewear that stands out. 
          Discover our latest collections and find the perfect eyewear that suits your unique style.
        </p>
        <div className="about-text">
          <h2>Our Trendy Collections</h2>
          <p>
            Dive into our diverse range of eyewear. From bold frames to classic styles, each piece is crafted 
            with attention to detail and current fashion trends. Whether you're after cutting-edge designs or timeless elegance, 
            we've got you covered.
          </p>
          <p>
            Our mission is to provide eyewear that not only enhances your vision but also complements your style. 
            Explore our latest arrivals and elevate your eyewear game.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
