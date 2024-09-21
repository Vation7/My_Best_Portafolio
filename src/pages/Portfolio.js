import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';  // Assuming you have Portfolio-specific CSS

// Import screenshots from assets
import project1Screenshot from '../assets/screenshots/project1-screenshot.png';

function Portfolio() {
  // Array containing project information
  const projects = [
    {
      title: 'Project 1',
      image: 'path-to-your-project1-screenshot.png',
      deployedLink: 'https://gamesa007.github.io/HoriseonRise-Elevating-Brands-to-New-Heights',
      githubLink: 'https://github.com/Vation7/Challenge_1',
    },
    {
      title: 'Project 2',
      image: 'path-to-your-project2-screenshot.png',
      deployedLink: 'https://your-project2-deployed-link.com',
      githubLink: 'https://github.com/your-username/project2-repo',
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;