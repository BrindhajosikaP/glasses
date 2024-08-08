// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import Explore from './pages/Explore';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ShopPage from './pages/ShopPage'; // Import the ShopPage component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<ShopPage />} /> {/* Add the route for ShopPage */}
      </Routes>
    </Router>
  );
}

export default App;
