import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Backend Developer Portfolio';
    
    // Create a custom cursor trailer effect
    const createCursorTrail = () => {
      const cursor = document.createElement('div');
      cursor.classList.add('cursor-trailer');
      
      const style = document.createElement('style');
      style.textContent = `
        .cursor-trailer {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: width 0.3s, height 0.3s, opacity 0.3s;
          opacity: 0;
        }
      `;
      
      document.head.appendChild(style);
      document.body.appendChild(cursor);
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.opacity = '1';
        
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        
        setTimeout(() => {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
        }, 100);
      });
      
      document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0';
      });
    };
    
    // Only create cursor trail on non-touch devices
    if (!('ontouchstart' in window)) {
      createCursorTrail();
    }
  }, []);
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;