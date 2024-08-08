// src/pages/Explore.js
import React from 'react';
import ExploreList from './ExploreList';
import HomeIcon from '../components/HomeIcon';
import './Explore.css';

const products = [
  { name: 'Caper Active', price: 1299, category: 'Sports', image: require('../assets/vision1.png') },
  { name: 'Black Boss', price: 2999, category: 'Sunglasses', image: require('../assets/vision2.png') },
  { name: 'Hip Hop Candy', price: 1499, category: 'Sports', image: require('../assets/vision3.png') },
  { name: 'Punk Cut Out', price: 2999, category: 'Sports', image: require('../assets/vision4.png') },
  { name: 'Rounded Gold', price: 1299, category: 'Vision', image: require('../assets/vision5.png') },
  { name: 'Caper Active', price: 1299, category: 'Sports', image: require('../assets/vision6.png') },
  { name: 'Black Boss', price: 2999, category: 'Sunglasses', image: require('../assets/vision7.png') },
  { name: 'Hip Hop Candy', price: 1499, category: 'Sports', image: require('../assets/vision8.png') },
  { name: 'Punk Cut Out', price: 2999, category: 'Sports', image: require('../assets/vision9.png') },
];

const Explore = () => {
  return (
    <div className="explore-page">
      <HomeIcon />
      <h1 className="explore-title">Explore Trending Products</h1>
      <ExploreList products={products} />
    </div>
  );
};

export default Explore;
