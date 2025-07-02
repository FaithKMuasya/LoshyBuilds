
import React from "react";
import './Hero.css'
import './App.css'

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section id="home">
      <h2>Software Developer</h2>
      <h3>Building Modern Web Solutions</h3>
      <p>
        Passionate about creating clean, efficient code and meaningful digital experiences
      </p>

      {/* Buttons */}
      <div id="hero-btns">
        <button><a href="#portfolio">View My Work</a></button>
        <button id="contact-button"><a href="#contact">Get In Touch</a></button>
      </div>

      {/* Icons */}
      <div>
        <a href="https://github.com/FaithKMuasya?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/faith-muasya-034a0b313/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:loshyfaith@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Downward arrow (will animate later) */}
    <div>
        <a href="#about" className="scroll-arrow">
        <FaArrowDown size={25} />
        </a>
    </div>


    </section>
  );
}

export default Hero;
