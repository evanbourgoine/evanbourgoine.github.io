import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './styles/ModernTheme.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    const variants = {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 }
    };

    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <HomePage setActiveTab={setActiveTab} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <AboutMe />
          </motion.div>
        );
      case 'projects':
        return (
          <motion.div
            key="projects"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <Projects />
          </motion.div>
        );
      case 'resume':
        return (
          <motion.div
            key="resume"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <Resume />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <Contact />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="home"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <HomePage setActiveTab={setActiveTab} />
          </motion.div>
        );
    }
  };

  return (
    <div className="app modern-theme">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;