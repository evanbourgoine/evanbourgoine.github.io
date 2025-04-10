import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone, Database, Cpu } from 'lucide-react';
import '../styles/Projects.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ios', name: 'iOS Development' },
    { id: 'vr', name: 'VR Development' },
    { id: 'datastructures', name: 'Data Structures' }
  ];
  
  // Projects data organized by category
  const projectsData = {
    ios: [
      {
        id: 1,
        title: 'Fitness Tracker App',
        description: 'A mobile fitness tracking application built with Swift, allowing users to track workouts, set goals, and view progress over time.',
        technologies: ['Swift', 'UIKit', 'Core Data', 'HealthKit'],
        link: '#',
        image: 'fitness-app.jpg',
        icon: <Smartphone size={32} />
      },
      {
        id: 2,
        title: 'Recipe Finder',
        description: 'iOS app that helps users discover recipes based on ingredients they have at home, with filtering options for dietary restrictions.',
        technologies: ['SwiftUI', 'Combine', 'Firebase', 'REST API'],
        link: '#',
        image: 'recipe-app.jpg',
        icon: <Smartphone size={32} />
      }
    ],
    vr: [
      {
        id: 3,
        title: 'VR Escape Room',
        description: 'A virtual reality escape room experience with multiple puzzle rooms and interactive objects. Developed for Oculus Quest.',
        technologies: ['Unity', 'C#', 'Oculus SDK', '3D Modeling'],
        link: '#',
        image: 'vr-escape.jpg',
        icon: <Cpu size={32} />
      },
      {
        id: 4,
        title: 'Virtual Art Gallery',
        description: 'An immersive VR art gallery showcasing digital artwork in a customizable virtual space.',
        technologies: ['Unity', 'VR Interaction', 'Shader Programming', 'Blender'],
        link: '#',
        image: 'vr-gallery.jpg',
        icon: <Cpu size={32} />
      }
    ],
    datastructures: [
      {
        id: 5,
        title: 'Graph Algorithm Visualizer',
        description: 'An interactive tool for visualizing various graph algorithms like Dijkstra, A*, and BFS. Helps students understand complex algorithms.',
        technologies: ['JavaScript', 'D3.js', 'React', 'Data Structures'],
        link: '#',
        image: 'graph-visualizer.jpg',
        icon: <Database size={32} />
      },
      {
        id: 6,
        title: 'Binary Tree Explorer',
        description: 'A web application that allows users to create, modify, and analyze binary trees with various operations.',
        technologies: ['React', 'Canvas API', 'Algorithms', 'TypeScript'],
        link: '#',
        image: 'tree-explorer.jpg',
        icon: <Database size={32} />
      }
    ]
  };
  
  // Get all projects for "All" category
  const allProjects = [
    ...projectsData.ios,
    ...projectsData.vr,
    ...projectsData.datastructures
  ];
  
  // Get active projects based on selected category
  const getActiveProjects = () => {
    if (activeCategory === 'all') {
      return allProjects;
    }
    return projectsData[activeCategory] || [];
  };
  
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
      {/* Category Showcase */}
      <div className="category-showcase">
        <h2>Project Categories</h2>
        
        <motion.div 
          className="category-cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* iOS Development */}
          <motion.div 
            className="category-card"
            variants={itemVariants}
            onClick={() => setActiveCategory('ios')}
            whileHover={{ y: -10 }}
          >
            <div className="category-icon">
              <Smartphone size={48} />
            </div>
            <h3>iOS Development</h3>
            <p>Mobile applications built with Swift and SwiftUI for iOS devices.</p>
            <div className="category-more">
              View iOS Projects <ExternalLink size={16} />
            </div>
          </motion.div>
          
          {/* VR Development */}
          <motion.div 
            className="category-card"
            variants={itemVariants}
            onClick={() => setActiveCategory('vr')}
            whileHover={{ y: -10 }}
          >
            <div className="category-icon">
              <Cpu size={48} />
            </div>
            <h3>VR Development</h3>
            <p>Immersive virtual reality experiences built with Unity and Oculus SDK.</p>
            <div className="category-more">
              View VR Projects <ExternalLink size={16} />
            </div>
          </motion.div>
          
          {/* Data Structures */}
          <motion.div 
            className="category-card"
            variants={itemVariants}
            onClick={() => setActiveCategory('datastructures')}
            whileHover={{ y: -10 }}
          >
            <div className="category-icon">
              <Database size={48} />
            </div>
            <h3>Data Structures</h3>
            <p>Interactive visualizations and implementations of complex algorithms and data structures.</p>
            <div className="category-more">
              View Data Structure Projects <ExternalLink size={16} />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Project List */}
      <div className="projects-list-section">
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Force re-render animation when category changes
        >
          {getActiveProjects().map((project, index) => (
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
      </div>
      
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