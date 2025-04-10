import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Award, Users } from 'lucide-react';
import '../styles/Resume.css';

function Resume() {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Education data
  const education = [
    {
      id: 1,
      institution: 'Virginia Tech College of Engineering',
      degree: 'Computer Science',
      period: '2021 - 2025',
      location: 'Blacksburg, VA',
      description: 'Specialized in software engineering and mobile application development.',
      courses: [
        'Data Structures & Algorithms',
        'Mobile App Development',
        'Human-Computer Interaction',
        'Computer Systems',
        'Computer Organization'
      ]
    }
  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      name: 'Learning MATLAB',
      issuer: 'LinkedIn',
      date: 'April 2022',
      credential: ''
    }
  ];

  // Affiliations data
  const affiliations = [
    {
      id: 1,
      organization: 'Meta Developer Program',
      role: 'Member',
      period: '2024 - Present'
    },
    {
      id: 2,
      organization: 'Apple Developer Program',
      role: 'Student Member',
      period: '2024 - Present'
    }
  ];

  return (
    <motion.div 
      className="resume-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <div className="resume-header">
        <h1>Resume</h1>
        <motion.a 
          href="/resume.pdf" 
          download 
          className="download-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={18} />
          Download PDF
        </motion.a>
      </div>
      
      {/* Education Section */}
      <motion.section 
        className="resume-section"
        variants={sectionVariants}
      >
        <div className="section-header">
          <BookOpen size={24} />
          <h2>Education</h2>
        </div>
        
        <div className="education-list">
          {education.map(edu => (
            <motion.div 
              className="education-item" 
              key={edu.id}
              whileHover={{ x: 5 }}
            >
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <div className="education-period">{edu.period}</div>
              </div>
              
              <div className="education-details">
                <div className="institution">
                  {edu.institution} • {edu.location}
                </div>
                <p>{edu.description}</p>
                
                <div className="key-courses">
                  <h4>Key Courses</h4>
                  <ul>
                    {edu.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Certifications Section */}
      <motion.section 
        className="resume-section"
        variants={sectionVariants}
      >
        <div className="section-header">
          <Award size={24} />
          <h2>Certifications</h2>
        </div>
        
        <div className="certifications-grid">
          {certifications.map(cert => (
            <motion.div 
              className="certification-item" 
              key={cert.id}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <h3>{cert.name}</h3>
              <div className="certification-issuer">{cert.issuer}</div>
              <div className="certification-details">
                <span className="certification-date">{cert.date}</span>
                <span className="certification-id">ID: {cert.credential}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Affiliations Section */}
      <motion.section 
        className="resume-section"
        variants={sectionVariants}
      >
        <div className="section-header">
          <Users size={24} />
          <h2>Professional Affiliations</h2>
        </div>
        
        <div className="affiliations-list">
          {affiliations.map(affiliation => (
            <motion.div 
              className="affiliation-item" 
              key={affiliation.id}
              whileHover={{ x: 5 }}
            >
              <div className="affiliation-org">{affiliation.organization}</div>
              <div className="affiliation-details">
                <span className="affiliation-role">{affiliation.role}</span>
                <span className="affiliation-period">{affiliation.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Resume;