import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FolderKanban } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const filteredProjects = activeFilter 
    ? projects.filter(project => project.type === activeFilter) 
    : projects;

  return (
    <section id="projects" className="py-20 bg-Blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 mb-6">
            <FolderKanban className="w-4 h-4 mr-2" />
            <span>Proyectos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos relevantes</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Descubrí mis proyectos, donde aplico mi experiencia en Power BI, Jupyter Notebooks y desarrollo en Python para crear soluciones funcionales, visuales e impulsadas por datos reales.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-900 rounded-lg p-1">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeFilter === null 
                  ? 'bg-gray-700 text-white shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('powerbi')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeFilter === 'powerbi' 
                  ? 'bg-yellow-900/30 text-yellow-400 shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PowerBI
            </button>
            <button
              onClick={() => setActiveFilter('jupyter')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeFilter === 'jupyter' 
                  ? 'bg-blue-900/30 text-blue-400 shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Jupyter
            </button>
            <button
              onClick={() => setActiveFilter('python')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeFilter === 'python' 
                  ? 'bg-green-900/30 text-green-400 shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Python
            </button>
            <button
              onClick={() => setActiveFilter('website')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeFilter === 'website' 
                  ? 'bg-purple-900/30 text-purple-400 shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Website
            </button>

          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;