import React from "react";
import "./Skills.css";

const skillData = [
  {
    category: "Frontend",
    description: "Building responsive and interactive user interfaces with modern frontend tools and frameworks.",
    stacks: [
      "React", "JavaScript", "TypeScript", "HTML5", "CSS3",
      "Tailwind CSS", "Next.js", "Responsive Design"
    ],
  },
  {
    category: "Backend",
    description: "Creating secure and scalable server-side logic and APIs for web applications.",
    stacks: [
      "Node.js", "Express", "RESTful APIs", "JSON", "Authentication", "Database Design","Python","Flask","Laravel"
    ],
  },
  {
    category: "Database",
    description: "Storing and managing data with structured and NoSQL database systems.",
    stacks: [
      "MongoDB", "MySQL", "Firebase", "Supabase", "Data Modeling"
    ],
  },
  {
    category: "Tools & Others",
    description: "Development and collaboration tools that streamline the workflow and improve productivity.",
    stacks: [
      "Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify", "Postman", "Chrome DevTools"
    ],
  },
];

const learning = [
  "AWS", "Docker", "GraphQL", "Testing (Jest)", "Redux", "Python", "React Native"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Technologies I work with and continuously improve upon
      </p>

      <div className="skills-grid">
        {skillData.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3>{group.category}</h3>
            <p>{group.description}</p>
            <div className="stack-list">
              {group.stacks.map((stack, i) => (
                <span className="stack-pill" key={i}>{stack}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently Learning Section */}
      <div className="currently-learning">
        <h4>Currently Learning</h4>
        <div className="stack-list center">
          {learning.map((item, i) => (
            <span className="stack-pill" key={i}>{item}</span>
          ))}
        </div>
        <p className="learning-note">
          Always expanding my skillset to stay current with industry trends
        </p>
      </div>
    </section>
  );
};

export default Skills;
