import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const glasses = [
    'Aviator',
    'Wayfarer',
    'Round',
    'Cat Eye',
    'Square',
    'Rectangle',
    'Oval',
    'Clubmaster',
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGlasses, setFilteredGlasses] = useState([]);

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    setFilteredGlasses(
      input ? glasses.filter(glass => glass.toLowerCase().includes(input.toLowerCase())) : []
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">FOCUSFRAME</div>
      <div className="navbar-links">
        {['explore', 'about', 'login', 'signup', 'home'].map((path) => (
          <Link key={path} to={`/${path}`}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        ))}
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search Glasses"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {filteredGlasses.length > 0 && (
          <ul className="search-suggestions">
            {filteredGlasses.map((glass, index) => (
              <li key={index} className="search-suggestion">
                {glass}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
