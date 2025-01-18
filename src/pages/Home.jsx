import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <nav className="nav-links">
          <a href="/home" className="nav-button">Home</a>
          <a href="/about" className="nav-button">About Us</a>
          <a href="/features" className="nav-button">Features</a>
          <a href="/tools" className="nav-button">Tools</a>
        </nav>
      </header>
      <div className="content">
        <h1>Welcome to Home Page</h1>
      </div>
    </div>
  );
};

export default Home;