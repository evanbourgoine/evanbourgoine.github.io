import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: '#',
      image: 'project1.jpg'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects.',
      technologies: ['React', 'Redux', 'Firebase'],
      link: '#',
      image: 'project2.jpg'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays forecasts using the OpenWeather API.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'REST API'],
      link: '#',
      image: 'project3.jpg'
    }
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <div className="image-placeholder">Project Image</div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;