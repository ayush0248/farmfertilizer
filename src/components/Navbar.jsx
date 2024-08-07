import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import '../styles/Navbar.css'; // Import the CSS file
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
          <span className="company-name">Organic Farm</span>
        </a>
        <ul className="navbar-menu">
          <li><Link to="home" smooth={true} duration={500} className="navbar-item">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="navbar-item">About</Link></li>
          <li><Link to="products" smooth={true} duration={500} className="navbar-item">Products</Link></li>
          <li><Link to="services" smooth={true} duration={500} className="navbar-item">Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="navbar-item">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
