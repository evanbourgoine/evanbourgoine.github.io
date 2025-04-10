import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically connect to a backend or email service
    console.log('Form submitted:', formData);
    setFormStatus('success');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    // In a real app, you would handle errors as well
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="contact-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="contact-header" variants={itemVariants}>
        <h1>Get in <span className="text-accent">Touch</span></h1>
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out through any of the methods below.
        </p>
      </motion.div>
      
      {/* Contact Info Section */}
      <motion.section className="contact-info-section" variants={itemVariants}>
        <div className="contact-info-grid">
          <motion.div 
            className="contact-info-card"
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <h3>Email</h3>
            <p>
              <a href="mailto:evan.bourgoine@example.com">
                evan.bourgoine@gmail.com
              </a>
            </p>
            <p className="response-time">I typically respond within 24 hours</p>
          </motion.div>
          
          <motion.div 
            className="contact-info-card"
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            <div className="info-icon">
              <Phone size={24} />
            </div>
            <h3>Phone</h3>
            <p>
              <a href="tel:+12075551234">
                (207) 251-1256
              </a>
            </p>
            <p className="response-time">Available everyday, 9AM - 9PM EST</p>
          </motion.div>
          
          <motion.div 
            className="contact-info-card"
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
          >
            <div className="info-icon">
              <MapPin size={24} />
            </div>
            <h3>Location</h3>
            <p>York, ME | Blacksburg, VA</p>
            <p className="response-time">Available for remote work and potential relocation.</p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Social Links */}
      <motion.section className="social-section" variants={itemVariants}>
        <h2>Connect With Me</h2>
        <div className="social-links-grid">
          <motion.a 
            href="https://github.com/evanbourgoine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link-card"
            whileHover={{ y: -5, backgroundColor: 'var(--primary)', color: 'white' }}
          >
            <Github size={24} />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com/in/evanbourgoine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link-card"
            whileHover={{ y: -5, backgroundColor: 'var(--primary)', color: 'white' }}
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.a 
            href="https://twitter.com/evanmbourgoine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link-card"
            whileHover={{ y: -5, backgroundColor: 'var(--primary)', color: 'white' }}
          >
            <Twitter size={24} />
            <span>Twitter</span>
          </motion.a>
        </div>
      </motion.section>
      
      {/* Contact Form */}
      <motion.section className="contact-form-section" variants={itemVariants}>
        <h2>Send Me a Message</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {formStatus === 'success' && (
              <div className="success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Contact;