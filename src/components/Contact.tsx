import React from 'react';
import {  Github, Linkedin, MessageSquare, } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out through any of these channels.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <a 
  href="https://wa.me/541151135718?text=Hola%2C%20estoy%20interesado%20en%20tu%20portafolio%20y%20me%20gustaría%20saber%20más" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500 transition-all duration-300 group"
>
  <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-900/30 transition-all duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-green-500">
      <path d="M20.52 3.48A12.22 12.22 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.17 1.6 6L0 24l6.29-1.6A12.21 12.21 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.26-6.23-3.48-8.52zM12 22.1c-1.94 0-3.85-.51-5.51-1.47l-.39-.23-3.73.95.99-3.64-.25-.38A9.87 9.87 0 012.1 12C2.1 6.6 6.6 2.1 12 2.1S21.9 6.6 21.9 12 17.4 22.1 12 22.1zm5.65-7.4c-.31-.16-1.83-.9-2.11-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.21-.18.2-.35.23-.65.08-.31-.16-1.29-.48-2.45-1.53-.9-.8-1.5-1.8-1.68-2.1-.18-.31-.02-.47.13-.63.13-.13.31-.34.46-.51.16-.18.21-.31.31-.52.1-.2.05-.39-.02-.55-.07-.16-.68-1.63-.93-2.22-.25-.6-.5-.52-.68-.52h-.58c-.2 0-.52.07-.79.39s-1.04 1.01-1.04 2.46 1.07 2.85 1.23 3.05c.15.21 2.11 3.22 5.12 4.51.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.83-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.58-.36z"/>
    </svg>
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
  <p className="text-gray-400 group-hover:text-green-300 transition-all duration-300">Enviar mensaje</p>
</a>

        
          <a 
            href="Enviar Mensaje" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-indigo-500 transition-all duration-300 group"
          >
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-900/30 transition-all duration-300">
              <Github className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 group-hover:text-indigo-300 transition-all duration-300">Ignacio Maldonado</p>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ignaciomaldo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-indigo-500 transition-all duration-300 group"
          >
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-900/30 transition-all duration-300">
              <Linkedin className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 group-hover:text-indigo-300 transition-all duration-300">Ignacio Maldonado</p>
          </a>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Looking forward to hearing from you!
          </p>
          <div className="inline-block px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 font-mono">
            <span className="text-green-500">$</span> echo "Hello, World!"
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;