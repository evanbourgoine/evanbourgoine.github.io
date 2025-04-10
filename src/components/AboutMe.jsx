import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  BookOpen, 
  Coffee, 
  Camera, 
  Music, 
  Code,
  Briefcase
} from 'lucide-react';
import '../styles/AboutMe.css';

function AboutMe() {
  // State for the photo carousel in each section
  const [activePhotoIndex, setActivePhotoIndex] = useState({
    education: 0,
    hometown: 0,
    hobbies: 0
  });

  const photos = {
    education: [
      { 
        id: 1, 
        alt: "University campus", 
        src: require('../assets/images/aboutme.jpg')
      },
      { 
        id: 2, 
        alt: "Graduation ceremony", 
        src: require('../assets/images/aboutme.jpg')
      },
      { 
        id: 3, 
        alt: "Study group", 
        src: require('../assets/images/aboutme.jpg')
      }
    ],
    hometown: [
      { 
        id: 1, 
        alt: "Nubble Lighthouse", 
        src: require('../assets/images/nubble.jpg')
      },
      { 
        id: 2, 
        alt: "Portland Head Light", 
        src: require('../assets/images/rockycoast.jpg')
      },
      { 
        id: 3, 
        alt: "Friends at the beach", 
        src: require('../assets/images/yorkfriends.JPG')
      }
    ],
    hobbies: [
      { 
        id: 1, 
        alt: "Hiking trip", 
        src: require('../assets/images/aboutme.jpg')
      },
      { 
        id: 2, 
        alt: "Playing music", 
        src: require('../assets/images/aboutme.jpg')
      },
      { 
        id: 3, 
        alt: "Coding project", 
        src: require('../assets/images/aboutme.jpg')
      }
    ]
  };

  // Function to navigate photos
  const navigatePhoto = (section, direction) => {
    const sectionPhotos = photos[section];
    const currentIndex = activePhotoIndex[section];
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % sectionPhotos.length;
    } else {
      newIndex = currentIndex === 0 ? sectionPhotos.length - 1 : currentIndex - 1;
    }
    
    setActivePhotoIndex({
      ...activePhotoIndex,
      [section]: newIndex
    });
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const sectionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const PhotoCarousel = ({ section }) => (
    <div className="photo-carousel">
      <div className="carousel-container">
        {photos[section].map((photo, index) => (
          <div 
            key={photo.id} 
            className={`carousel-item ${index === activePhotoIndex[section] ? 'active' : ''}`}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      
      <div className="carousel-controls">
        <button 
          className="carousel-control"
          onClick={() => navigatePhoto(section, 'prev')}
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="carousel-indicators">
          {photos[section].map((photo, index) => (
            <button 
              key={photo.id} 
              className={`indicator ${index === activePhotoIndex[section] ? 'active' : ''}`}
              onClick={() => setActivePhotoIndex({...activePhotoIndex, [section]: index})}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="carousel-control"
          onClick={() => navigatePhoto(section, 'next')}
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <motion.div 
      className="about-me-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* About Header Section */}
      <motion.section 
        className="about-header"
        variants={sectionVariants}
      >
        <h1>About <span className="text-accent">Me</span></h1>
        <div className="about-intro-container">
        <div className="about-image">
  <div className="profile-image-wrapper">
    {/* Replace with your actual image */}
    <img 
      src={require('../assets/images/aboutme.jpg')} 
      alt="Evan Bourgoine" 
      className="profile-photo"
    />
  </div>
</div>
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Evan Bourgoine, a passionate software engineer and designer with a focus on creating 
              intuitive and engaging digital experiences. I believe in the power of technology to connect 
              people and make everyday life more enjoyable.
            </p>
            <p className="about-details">
              I currently live York, Maine while spending
               my time as a student in Blacksburg, VA attending Virginia Tech,
            </p>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="about-section"
        variants={sectionVariants}
      >
        <div className="section-header">
          <div className="section-icon">
            <BookOpen size={24} />
          </div>
          <h2>Education</h2>
        </div>
        
        <div className="section-content">
          <div className="section-text">
            <h3>Virginia Tech</h3>
            <p className="time-period">2021 - 2025</p>
            <p>Bachelor of Science in Computer Science with a focus on software engineering and development.</p>
            
            <div className="education-details">
              <div className="detail-item">
                <h4>Key Courses</h4>
                <ul>
                  <li>Data Structures & Algorithms</li>
                  <li>Computer Systems</li>
                  <li>Computer Organization</li>
                  <li>iOS App Development</li>
                </ul>
              </div>
              
            </div>
          </div>
          
          <div className="section-photos">
            <PhotoCarousel section="education" />
          </div>
        </div>
      </motion.section>

      {/* Hometown Section */}
      <motion.section 
        className="about-section"
        variants={sectionVariants}
      >
        <div className="section-header">
          <div className="section-icon">
            <MapPin size={24} />
          </div>
          <h2>Hometown</h2>
        </div>
        
        <div className="section-content">
          <div className="section-text">
            <h3>York, Maine</h3>
            <p>I grew up in the beautiful coastal town of York, Maine, known for its historic architecture, beaches, and amazing seafood.</p>
            
            <div className="hometown-details">
              <p>Growing up near the ocean instilled in me a deep appreciation for nature and a sense of adventure. The changing seasons of New England taught me to adapt and find beauty in transformation.</p>
              
              <div className="detail-item">
                <h4>Favorite Local Spots</h4>
                <ul>
                  <li>Nubble Lighthouse</li>
                  <li>Ogunquit</li>
                  <li>Long Sands Beach</li>
                  <li>Mt. Agamenticus</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="section-photos">
            <PhotoCarousel section="hometown" />
          </div>
        </div>
      </motion.section>

      {/* Hobbies & Interests Section */}
      <motion.section 
        className="about-section"
        variants={sectionVariants}
      >
        <div className="section-header">
          <div className="section-icon">
            <Coffee size={24} />
          </div>
          <h2>For Fun</h2>
        </div>
        
        <div className="section-content">
          <div className="section-text">
            <h3>What I Love To Do</h3>
            <p>When I'm not coding or designing, you can find me exploring new hobbies and pursuing various interests.</p>
            
            <div className="hobbies-grid">
              <div className="hobby-item">
                <Camera size={20} />
                <h4>Photography</h4>
                <p>Capturing landscapes and street photography during my travels.</p>
              </div>
              
              <div className="hobby-item">
                <Music size={20} />
                <h4>Music</h4>
                <p>Playing the drums and expanding my vinyl record collection.</p>
              </div>
              
              <div className="hobby-item">
                <Code size={20} />
                <h4>Side Projects</h4>
                <p>Building small apps and tools that solve everyday problems.</p>
              </div>
              
              <div className="hobby-item">
                <Coffee size={20} />
                <h4>Coffee Exploration</h4>
                <p>Discovering local coffee shops and trying different brewing methods.</p>
              </div>
            </div>
          </div>
          
          <div className="section-photos">
            <PhotoCarousel section="hobbies" />
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="about-section skills-section"
        variants={sectionVariants}
      >
        <div className="section-header">
          <div className="section-icon">
            <Briefcase size={24} />
          </div>
          <h2>My Skills</h2>
        </div>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-name">React</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">JavaScript/TypeScript</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">HTML/CSS</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-name">Node.js</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Express</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">MongoDB</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Design</h3>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-name">UI/UX Design</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Figma</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Adobe Creative Suite</div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default AboutMe;