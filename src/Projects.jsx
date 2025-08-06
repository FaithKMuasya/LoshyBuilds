import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A responsive e-commerce website with product listings, a functional shopping cart, and a checkout page. ",
    demo: "https://faith-online-shop.vercel.app/dashboard.html",
    code: "https://github.com/FaithKMuasya/Faith-OnlineShop",
    status: "Deployed",
    stacks: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Sunflower Sunrays Care Home",
    description: "A responsive React website built for a healthcare client. Features include smooth scrolling navigation, clean UI, reusable components, and deployment via Vercel with a custom domain. ",
    demo: "https://www.sunflowersunrays.com/",
    code: "https://github.com/FaithKMuasya/Private-Care-Home",
    status: "Deployed",
    stacks: ["React", "CSS", "Emailjs"],
  },

  {
    title: "Healjunction Homepage",
    description: "Developed a clean, responsive homepage for a healthcare platform as part of an interview assignment. Focused on layout, accessibility, and mobile-first design using React and Tailwind CSS. ",
    demo: "https://heal-junction-homepage.vercel.app/",
    code: "https://github.com/FaithKMuasya/HealJunction-Homepage",
    status: "Deployed",
    stacks: ["React", "Tailwind CSS"],
  },

  {
    title: "Pharmacy System",
    description: "Stock and sales management system with MPESA integration.",
    demo: "https://your-pharmacy-demo.com",
    code: "https://github.com/yourusername/pharmacy-system",
    status: "planning",
    stacks: ["PHP", "MySQL", "XAMPP"],
  },

  {
    title: "HRMS System",
    description: "A hospital management system for storing and managing patient records,clinical details and hospital operations efficiently.",
    demo: "",
    code: "",
    status: "In Development",
    stacks: ["React", "Python", "Flask", "Progresql"],
  },
  {
    title: "Tech Blog",
    description: "A responsive tech blog built with React and Vite, supporting dark mode & light mode and developer-focused content.",
    demo: "https://faith-tech-blog.vercel.app/",
    code: "https://github.com/FaithKMuasya/My-Tech-Blog",
    status: "Deployed",
    stacks: ["React", "Vite", "CSS"],
  },

    {
    title: "Advanced Calculator",
    description: "Scientific calculator with history, memory functions, and multiple calculation modes.",
    demo: "https://faith-calculator-app.vercel.app/",
    code: "https://github.com/FaithKMuasya/Calculator-App",
    status: "Deployed",
    stacks: ["HTML", "CSS", "Javascript"],
  },

  {
    title: "Zoo App",
    description: "A simple animal zoo showcase app with interactive animal profiles and images, built using only HTML.",
    demo: "",
    code: "https://github.com/FaithKMuasya/PineCityZoo-App",
    status: "In Development",
    stacks: ["HTML"],
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Projects</h2>
      <p id="description">Here are some projects I've been working on. More coming soon as I continue to build and deploy!</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className={`status-badge ${project.status.toLowerCase().replace(" ", "-")}`}>
                {project.status}
              </span>
            </div>
            <p className="project-desc">{project.description}</p>

            <div className="stack-list">
              {project.stacks.map((stack, i) => (
                <span className="stack-pill" key={i}>{stack}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <span className="btn-icon">🔗</span> Demo
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <span className="btn-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 
                      5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49
                      -2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72
                      1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
                      -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2
                      -.36-1.01.08-2.11 0 0 .67-.21 2.2.82.64-.18 1.32-.27
                      2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82
                      .44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07
                      -1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
                      1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0
                      -4.42-3.58-8-8-8z"
                    />
                  </svg>
                </span>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

     {/* Footer with GitHub button */}
      <div className="github-footer">
        <p>More projects coming soon...</p>
        <a
          href="https://github.com/FaithKMuasya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          id="git-btn"
        >
          View All on GitHub
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
