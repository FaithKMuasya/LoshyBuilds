import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-about">
          <h3>Junior Developer</h3>
          <p>
            Passionate about creating modern web solutions and bringing ideas to life through code.
          </p>
          <div className="footer-icons">
            <a href="https://github.com/FaithKMuasya?tab=repositories" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/faith-muasya-034a0b313/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:loshyfaith@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Services List */}
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Frontend Development</li>
            <li>Mobile-First Design</li>
            <li>Website Maintenance</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line and Info */}
      <hr />
      <div className="footer-bottom">
        <p>© 2025 Portfolio. Designed by Faith.</p>
        <p>Made with &#9829; and lots of coffee.</p>
      </div>
    </footer>
  );
};

export default Footer;
