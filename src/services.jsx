import React from "react";
import "./Services.css";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Node.js, and more.",
    points: ["Responsive Design", "Fast Loading", "SEO Optimized", "Modern UI/UX"],
  },
  {
    icon: "💻",
    title: "Frontend Development",
    description: "Interactive user interfaces that provide excellent user experiences across all devices.",
    points: ["React", "Tailwind CSS", "JavaScript", "State Management"],
  },
  {
    icon: "🔧",
    title: "Backend Development",
    description: "Secure and scalable backend systems built to power your web applications and handle business logic efficiently.",
    points: ["RESTful APIs", "Node.js", "Authentication & Authorization", "Postgresql", "Server Deployment"],
  },
  {
    icon: "🛠️",
    title: "Website Maintenance",
    description: "Keep your website updated, secure, and running smoothly with ongoing support.",
    points: ["Bug Fixes", "Content Updates", "Security Updates", "Performance Monitoring"],
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">
        Affordable, modern web solutions for small businesses and startups.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Why Choose Me section */}
      <div className="why-choose-card">
        <h3>Why Choose Me?</h3>
        <p>
          As a junior developer, I offer competitive rates while delivering quality work.
          I'm dedicated to your project's success and bring fresh perspectives to every challenge.
        </p>
        <div className="features">
          <div>
            <strong>Affordable</strong>
            <p>Competitive Pricing</p>
          </div>
          <div>
            <strong>Dedicated</strong>
            <p>Personal Attention</p>
          </div>
          <div>
            <strong>Modern</strong>
            <p>Latest Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
