import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">JewelryBrand</a>
        </div>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-link">Home</a>
          <a href="/gallery" className="navbar-link">Gallery</a>
          <a href="/about" className="navbar-link">About</a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
