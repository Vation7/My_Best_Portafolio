import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';  // Assuming you have Portfolio-specific CSS

// Import screenshots from assets
import project1Screenshot from '../assets/screenshots/project1-screenshot.jpeg';
import project2Screenshot from '../assets/screenshots/project2-screenshot.gif';
import project3Screenshot from '../assets/screenshots/project3-screenshot.gif';
import project4Screenshot from '../assets/screenshots/project4-screenshot.gif';
import project5Screenshot from '../assets/screenshots/project5-screenshot.gif';
import project6Screenshot from '../assets/screenshots/project6-screenshot.png';
import project10Screenshot from '../assets/screenshots/project10-screenshot.png';
import project11Screenshot from '../assets/screenshots/project11-screenshot.gif';
import project13Screenshot from '../assets/screenshots/project13-screenshot.gif';
import project14Screenshot from '../assets/screenshots/project14-screenshot.gif';
import project18Screenshot from '../assets/screenshots/project18-screenshot.gif';
import project19Screenshot from '../assets/screenshots/project19-screenshot.gif';
import project20Screenshot from '../assets/screenshots/project20-screenshot.gif';
import project21Screenshot from '../assets/screenshots/project21-screenshot.gif';
import project22Screenshot from '../assets/screenshots/project22-screenshot.gif';

function Portfolio() {
  // Array containing project information
  const projects = [
    {
      title: 'Project 1: Code Refactor',
      image: project1Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_1',
    },
    {
      title: 'Project 2: Professional Portfolio',
      image: project2Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_2',
    },
    {
      title: 'Project 3: Personal Blog',
      image: project3Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_3',
    },
    {
      title: 'Project 4: Personal Blog',
      image: project4Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_4',
    },
    {
      title: 'Project 5: Task Board',
      image: project5Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_5',
    },
    {
      title: 'Project 6: Weather Dashboard',
      image: project6Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_6',
    },
    {
      title: 'Project 10: SVG Logo Maker',
      image: project10Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_10',
    },
    {
      title: 'Project 11: Note Taker',
      image: project11Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_11',
    },
    {
      title: 'Project 13: E-commerce Back End',
      image: project13Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_13',
    },
    {
      title: 'Project 14: Tech Blog',
      image: project14Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/RoutesPro',
    },
    {
      title: 'Project 18: Social Network API',
      image: project18Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/RoutesPro',
    },
    {
      title: 'Project 19: Text Editor',
      image: project19Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_19',
    },
    {
      title: 'Project 20: My Portfolio',
      image: project20Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/My_Best_Portafolio',
    },
    {
      title: 'Project 21: Book Search Engine',
      image: project21Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_21',
    },
    {
      title: 'Project 22: The Store',
      image: project22Screenshot,
      deployedLink: 'render_link',
      githubLink: 'https://github.com/Vation7/Challenge_22',
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