import React from 'react';
import './TrendingList.css'; // Ensure you have this CSS file for styling
import TrendingCard from './TrendingCard'; // Make sure this component is defined

const products = [
  { name: 'Caper Active', price: 1299, category: 'Sports', image: require('../assets/vision1.png') },
  { name: 'Black Boss', price: 2999, category: 'Sunglasses', image: require('../assets/vision2.png') },
  { name: 'Hip Hop Candy', price: 1499, category: 'Sports', image: require('../assets/vision3.png') },
  { name: 'Punk Cut Out', price: 2999, category: 'Sports', image: require('../assets/vision4.png') },
  { name: 'Rounded Gold', price: 1299, category: 'Vision', image: require('../assets/vision5.png') },
];

const TrendingList = () => {
  return (
    <div className="trending-list">
      <div className="product-grid">
        {products.map((product, index) => (
          <TrendingCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingList;