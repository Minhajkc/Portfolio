import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function AnimatedRoute({ component: Component, ...rest }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Slight delay to ensure animation triggers

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`animated-route ${isVisible ? 'visible' : ''}`}>
      <Component {...rest} />
    </div>
  );
}

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {showNavbar && (
          <div className="navbar-container">
            <Navbar />
          </div>
        )}
        <Routes>
          <Route path="/" element={<AnimatedRoute component={Home} />} />
          <Route path="/about" element={<AnimatedRoute component={About} />} />
          <Route path="/projects" element={<AnimatedRoute component={Projects} />} />
          <Route path="/contact" element={<AnimatedRoute component={Contact} />} />
        </Routes>
      </div>
      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideUpFadeIn {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          animation: slideDown 0.5s ease-out;
          backdrop-filter: blur(5px);
          background-color: rgba(255, 255, 255, 1); /* Full opacity */
        }
        .animated-route {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .animated-route.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </Router>
  );
}

export default App;