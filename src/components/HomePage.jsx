import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code, Book, ChevronDown } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage = ({ setActiveTab }) => {
  const scrollToProjects = () => {
    document.getElementById('featured-projects').scrollIntoView({ 
      behavior: 'smooth'
    });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart functionality, user accounts, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <Briefcase size={24} />
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing work samples and professional experience.",
      technologies: ["React", "Framer Motion", "CSS", "Netlify"],
      icon: <Code size={24} />
    },
    {
      id: 3,
      title: "Learning Management System",
      description: "Educational platform for creating, distributing, and managing learning content.",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      icon: <Book size={24} />
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Photo */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="profile-container">
            <motion.div 
              className="profile-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="profile-image">
                {/* Replace with your image */}
                <img 
                src={require('../assets/images/profile.JPG')} 
                alt="Evan Bourgoine" 
                className="profile-photo"
              />
              </div>
            </motion.div>
            
            <motion.div 
              className="profile-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1>Hi, I'm <span className="primary-color">Evan Bourgoine</span></h1>
              <h2 className="profession">Software Engineer & Designer</h2>
              <p className="bio">
                I create elegant solutions to complex problems, with a focus on intuitive user experiences
                and clean, maintainable code. Specializing in modern web development and UI/UX design.
              </p>
              
              <div className="hero-cta">
                <button 
                  className="btn btn-primary btn-icon"
                  onClick={() => setActiveTab('contact')}
                >
                  Get in Touch <ArrowRight size={18} />
                </button>
                <button 
                  className="btn btn-outline btn-icon"
                  onClick={scrollToProjects}
                >
                  View Projects <ChevronDown size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What I Do Section */}
      <section className="what-i-do-section">
        <div className="section-heading">
          <h2>What I Do</h2>
        </div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="service-card" variants={itemVariants}>
            <div className="service-icon primary-color">
              <Code size={32} />
            </div>
            <h3>Web Development</h3>
            <p>Building responsive, performant websites and web applications using modern technologies and best practices.</p>
          </motion.div>
          
          <motion.div className="service-card" variants={itemVariants}>
            <div className="service-icon accent-color">
              <Briefcase size={32} />
            </div>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive, accessible interfaces that provide exceptional user experiences across all devices.</p>
          </motion.div>
          
          <motion.div className="service-card" variants={itemVariants}>
            <div className="service-icon primary-color">
              <Book size={32} />
            </div>
            <h3>Technical Consulting</h3>
            <p>Providing expert guidance on technology stack selection, architecture design, and implementation strategies.</p>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Featured Projects Section */}
      <section id="featured-projects" className="featured-projects-section">
        <div className="section-heading">
          <h2>Featured Projects</h2>
        </div>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="project-icon">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge badge-primary">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="view-all-container">
          <button 
            className="btn btn-outline btn-icon"
            onClick={() => setActiveTab('projects')}
          >
            View All Projects <ArrowRight size={18} />
          </button>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section">
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Ready to bring your ideas to life?</h2>
          <p>Let's collaborate to create something amazing together.</p>
          <button 
            className="btn btn-primary btn-icon"
            onClick={() => setActiveTab('contact')}
          >
            Get in Touch <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;