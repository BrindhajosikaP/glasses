import React from 'react';
import './ExploreCard.css';

const ExploreCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="explore-card">
      <img src={image} alt={name} className="explore-card-image" />
      <div className="explore-card-content">
        <h3 className="explore-card-title">{name}</h3>
        <p className="explore-card-price">${price}</p>
        <div className="explore-card-buttons">
          <button className="explore-card-button add-to-cart">Add to Cart</button>
          <button className="explore-card-button add-to-wishlist">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
