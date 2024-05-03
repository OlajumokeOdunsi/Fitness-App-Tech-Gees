// Landing page will be the one holding the pages, it will be the one holding the (header, footer, main)
import React from 'react';
import logo from "../../assets/logo.jpg"
import './Footer.css';

const Footer = () => {
  return (
    <div className='Border'>
      <div className="footer-column">
        <img src={logo} alt="Logo" />
        <p>"Your Health is vital to us"</p>
      </div>

      <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>123 Sail, Ebute, Lagos, Nigeria<br /> Email: vitality@gmail.com<br /> Phone: +2347080594185</p>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 The Vitality. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;


           