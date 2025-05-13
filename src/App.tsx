import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"



function App() {
  useEffect(() => {
    document.title = 'Backend Developer Portfolio';

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
          background: radial-gradient(circle,
            rgba(16, 185, 129, 0.4) 0%,   /* emerald-500 */
            rgba(16, 185, 129, 0) 70%
          );
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

    if (!('ontouchstart' in window)) {
      createCursorTrail();
    }
  }, []);

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen">
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
