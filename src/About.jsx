import React from "react";
import { FaCode, FaLightbulb, FaMugHot } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section id="about">
      {/* Section title and subtitle */}
      <h2>About Me</h2>
      <p>A passionate Software Developer on a journey to create meaningful digital solutions</p>

      <div className="about-content">
        {/* Left side: journey text and stats */}
        <div className="about-left">
          <h3>My Journey</h3>
          <p>
            I'm a Software developer with a passion for creating clean, efficient web applications.
            While I'm early in my career, I bring fresh perspectives, eagerness to learn, and dedication to delivering quality work.
          </p>
          <p>
            I specialize in modern web technologies and enjoy tackling challenges that help businesses grow.
            Whether you're looking to hire a dedicated team member or need affordable web solutions, I'm here to help.
          </p>

          <div className="about-stats">
            <div>
              <h4>5+</h4>
              <p>Projects Built</p>
            </div>
            <div>
              <h4>1+</h4>
              <p>Years Learning</p>
            </div>
            <div>
              <h4>100%</h4>
              <p>Commitment</p>
            </div>
          </div>
        </div>

        {/* Right side: cards with icons */}
        <div className="about-right">
          <div className="card">
            <div className="card-header">
              <span className="icon-bg"><FaCode /></span>
              <h4>Clean Code</h4>
            </div>
            <p>I write maintainable, well-documented code that follows best practices</p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="icon-bg"><FaLightbulb /></span>
              <h4>Problem Solving</h4>
            </div>
            <p>I approach challenges with creativity and persistence</p>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="icon-bg"><FaMugHot /></span>
              <h4>Continuous Learning</h4>
            </div>
            <p>Always exploring new technologies and improving my skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
