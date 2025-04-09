import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, Monitor } from 'lucide-react';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'Retro Arcade Collection',
      description: 'A web-based collection of classic arcade games reimagined with modern web technologies.',
      technologies: ['React', 'Canvas API', 'Web Audio', 'Firebase'],
      link: '#',
      image: 'project1.jpg',
      icon: <Monitor size={32} />
    },
    {
      id: 2,
      title: 'Synthwave Music Player',
      description: 'An interactive music player featuring custom audio visualizations and a retro UI.',
      technologies: ['React', 'Web Audio API', 'Three.js', 'GSAP'],
      link: '#',
      image: 'project2.jpg',
      icon: <Layers size={32} />
    },
    {
      id: 3,
      title: 'Pixel Art Creator',
      description: 'A tool for creating, editing and exporting pixel art with various retro console color palettes.',
      technologies: ['JavaScript', 'Canvas API', 'Electron', 'IndexedDB'],
      link: '#',
      image: 'project3.jpg',
      icon: <Code size={32} />
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="projects-section">
      <div className="retro-grid"></div>
      
      <h2 className="glitch" data-text="My Projects">My Projects</h2>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div 
            className="project-card"
            key={project.id}
            variants={itemVariants}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-icon">
              {project.icon}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="tech-tag"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: hoveredProject === project.id ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      repeat: hoveredProject === project.id ? Infinity : 0,
                      repeatDelay: 0.5
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <motion.a 
                href={project.link} 
                className="project-link"
                whileHover={{ 
                  scale: 1.05,
                  x: 5
                }}
              >
                View Project <ExternalLink size={16} className="link-icon" />
              </motion.a>
            </div>
            
            {/* Animated corner */}
            <motion.div 
              className="corner-fold"
              initial={{ opacity: 0.6 }}
              animate={{ 
                opacity: hoveredProject === project.id ? 1 : 0.6
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Animated border */}
            <motion.div 
              className="animated-border"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: hoveredProject === project.id ? 1 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <div className="cta-container">
        <p className="cta-text">Want to see more of my work?</p>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="github-link">
          Check out my GitHub <ExternalLink size={16} className="link-icon" />
        </a>
      </div>
    </section>
  );
}

export default Projects;