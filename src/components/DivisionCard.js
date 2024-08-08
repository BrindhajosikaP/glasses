// src/components/DivisionCard.js

import React, { useState } from 'react';
import './DivisionCard.css';

const DivisionCard = ({ division, onClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
    onClick(division);
  };

  return (
    <div className="division-card" onClick={handleClick}>
      <div className="division-image-container">
        <img src={division.image} alt={division.name} className="division-image" />
      </div>
      <div className="division-info">
        <h2 className="division-title">{division.name}</h2>
      </div>
      {showDetails && (
        <div className="division-details">
          <ul className="division-items">
            {division.items.map((item, index) => (
              <li key={index} className="division-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-price">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DivisionCard;
