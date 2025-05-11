import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg backdrop-blur-lg bg-opacity-90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-indigo-500" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            dev.backend
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Sobre mí
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Proyectos
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Habilidades
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contacto
          </button>
        <div className="flex space-x-4">
  <a href="https://github.com/ignacio-leonel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    <Github className="h-5 w-5" />
  </a>
  <a href="https://www.linkedin.com/in/ignaciomaldo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    <Linkedin className="h-5 w-5" />
  </a>
   <a href="https://wa.me/541151135718?text=Hola%2C%20estoy%20interesado%20en%20tu%20portafolio%20y%20me%20gustaría%20saber%20más" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5" />
  </a>
  
</div>

        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-gray-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-gray-900 bg-opacity-95 md:hidden z-40">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xl text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contacto
            </button>
            <div className="flex space-x-6 pt-6">
  <a href="https://github.com/ignacio-leonel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    <Github className="h-6 w-6" />
  </a>
  <a href="https://www.linkedin.com/in/ignaciomaldo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    <Linkedin className="h-6 w-6" />
  </a>
  <a href="https://wa.me/541151135718?text=Hola%2C%20estoy%20interesado%20en%20tu%20portafolio%20y%20me%20gustaría%20saber%20más" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-6 w-6" />
  </a>
</div>


          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;