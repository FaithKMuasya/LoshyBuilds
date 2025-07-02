import React, { useState } from "react";
import logo from "./assets/my-logo.png"; 
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-image" />
        <span className="logo-text">LoshyBuilds</span>
      </div>

      <div className="nav-toggle">
        <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
