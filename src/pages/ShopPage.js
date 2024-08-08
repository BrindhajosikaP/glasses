import React from 'react';
import './ShopPage.css';

const products = [
  { id: 1, name: 'Classic Sunglasses', price: '$99', image: 'path/to/sunglasses1.jpg' },
  { id: 2, name: 'Modern Magnifiers', price: '$79', image: 'path/to/magnifiers1.jpg' },
  { id: 3, name: 'Stylish Sunglasses', price: '$129', image: 'path/to/sunglasses2.jpg' },
  { id: 4, name: 'Premium Magnifiers', price: '$89', image: 'path/to/magnifiers2.jpg' },
];

const ShopPage = () => {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop Our Collection</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
