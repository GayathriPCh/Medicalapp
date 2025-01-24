// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-links">
      <Link to="/home" className="nav-button">Home</Link>
      <Link to="/about" className="nav-button">About Us</Link>
      <Link to="/features" className="nav-button">Features</Link>
      <Link to="/tools" className="nav-button">Tools</Link>
    </nav>
  );
};

export default Navbar;