// src/components/ProductList.js

import React from 'react';
import './ProductList.css';

const ProductList = ({ items }) => {
  return (
    <div className="product-list">
      {items.map((item, index) => (
        <div key={index} className="product-card">
          <img src={item.image} alt={item.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
