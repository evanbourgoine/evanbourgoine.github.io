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
            href="https://github.com/evanbourgoine" 
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
            href="https://www.linkedin.com/in/evan-bourgoine-873279237/" 
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
            href="https://x.com/evanmbourgoine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="X"
          >
            <Twitter size={20} />
          </motion.a>
          
          <motion.a 
            href="mailto:evan.bourgoine@gmail.com" 
            className="social-link"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Email"
          >
            <Mail size={20} />
          </motion.a>
        </div>
        
        <p className="footer-text">
          &copy; {currentYear} Evan M. Bourgoine | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;