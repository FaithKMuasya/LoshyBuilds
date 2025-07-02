import React, { useState } from "react";
import logo from "./assets/my-logo.png"; 
import './Navbar.css'


function Navbar() {


  return (
    <nav>
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo-image" />
        <span className="logo-text">LoshyBuilds</span>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
