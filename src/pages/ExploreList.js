// src/pages/ExploreList.js
import React from 'react';
import './ExploreList.css';

const ExploreList = ({ products }) => {
  return (
    <div className="explore-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-category">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ExploreList;
