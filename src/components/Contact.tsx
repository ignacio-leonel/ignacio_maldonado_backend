import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

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
            href="mailto:ignacio.lm1991@gmail.com" 
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-indigo-500 transition-all duration-300 group"
          >
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-900/30 transition-all duration-300">
              <Mail className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 group-hover:text-indigo-300 transition-all duration-300">ignacio.lm1991@gmail.com</p>
          </a>
          
          <a 
            href="https://github.com/ignacio-leonel/" 
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