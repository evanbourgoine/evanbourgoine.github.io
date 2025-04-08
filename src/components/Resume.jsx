import React from 'react';

function Resume() {
  const experiences = [
    {
      id: 1,
      company: 'Tech Company Inc.',
      position: 'Senior Frontend Developer',
      period: 'Jan 2022 - Present',
      description: 'Developed and maintained web applications using React, improved performance by 40% through code optimization.',
    },
    {
      id: 2,
      company: 'Digital Solutions LLC',
      position: 'Web Developer',
      period: 'Mar 2020 - Dec 2021',
      description: 'Built responsive websites and implemented UI components for various clients using JavaScript and modern frontend frameworks.',
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      period: '2016 - 2020',
    }
  ];

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="resume-download">
        <a href="/resume.pdf" download className="download-button">Download Resume (PDF)</a>
      </div>
      
      <div className="resume-content">
        <div className="experience">
          <h3>Work Experience</h3>
          {experiences.map(exp => (
            <div className="experience-item" key={exp.id}>
              <h4>{exp.position}</h4>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="education">
          <h3>Education</h3>
          {education.map(edu => (
            <div className="education-item" key={edu.id}>
              <h4>{edu.degree}</h4>
              <p className="institution">{edu.institution}</p>
              <p className="period">{edu.period}</p>
            </div>
          ))}
        </div>
        
        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            <li>AWS Certified Developer</li>
            <li>Google Professional Cloud Developer</li>
            <li>React Certification</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;