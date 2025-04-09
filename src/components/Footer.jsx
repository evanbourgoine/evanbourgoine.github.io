import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <Github size={20} />
          </motion.a>
          
          <motion.a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>
          
          <motion.a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </motion.a>
          
          <motion.a 
            href="mailto:your.email@example.com" 
            className="social-link"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Email"
          >
            <Mail size={20} />
          </motion.a>
        </div>
        
        <p className="footer-text">
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;