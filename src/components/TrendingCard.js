import React from 'react';
import './TrendingCard.css';

const TrendingCard = ({ product, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="trending-card">
      <img src={product.image} alt={product.title} className="trending-card-image" />
      <div className="trending-card-content">
        <h3 className="trending-card-title">{product.title}</h3>
        <p className="trending-card-price">{product.price}</p>
        <div className="trending-card-buttons">
          <button className="trending-card-button add-to-cart" onClick={() => onAddToCart(product)}>Add to Cart</button>
          <button className="trending-card-button add-to-wishlist" onClick={() => onAddToWishlist(product)}>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
