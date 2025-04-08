import React from 'react';

function AboutMe() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image">
          {/* Replace with your image */}
          <div className="image-placeholder">Your Photo</div>
        </div>
        <div className="bio">
          <p>Hello! I'm a passionate developer with expertise in web development, UI/UX design, and problem solving.</p>
          <p>I have experience working with React, Node.js, and various other technologies to create beautiful and functional web applications.</p>
          <p>When I'm not coding, you can find me hiking, reading, or exploring new coffee shops.</p>
          
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>JavaScript / TypeScript</li>
            <li>React / React Native</li>
            <li>Node.js</li>
            <li>HTML5 / CSS3</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;