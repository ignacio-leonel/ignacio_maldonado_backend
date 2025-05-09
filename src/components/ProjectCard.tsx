import React from 'react';
import { Project } from '../types/project';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const typeColors = {
    powerbi: 'from-yellow-500 to-orange-500',
    jupyter: 'from-blue-500 to-cyan-500',
    python: 'from-green-500 to-emerald-500'
  };

  const typeBackgrounds = {
    powerbi: 'bg-yellow-900/20',
    jupyter: 'bg-blue-900/20',
    python: 'bg-green-900/20'
  };

  const typeBorders = {
    powerbi: 'border-yellow-800',
    jupyter: 'border-blue-800',
    python: 'border-green-800'
  };

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl border ${typeBorders[project.type]} bg-gray-800 hover:shadow-lg transition duration-300 h-full flex flex-col`}
    >
      <div className="overflow-hidden relative h-48">
        <div 
          className="absolute inset-0 bg-gradient-to-br opacity-80 mix-blend-overlay"
          style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className={`inline-block px-2 py-1 rounded-md text-xs ${typeBackgrounds[project.type]} text-white mb-2`}>
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center justify-center py-3 bg-gradient-to-r ${typeColors[project.type]} text-white text-sm font-medium transition-all duration-300`}
        >
          View Project <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      )}
      {!project.link && (
        <div className="flex items-center justify-center py-3 bg-gray-700 text-gray-300 text-sm font-medium">
          Coming Soon
        </div>
      )}
    </div>
  );
};

export default ProjectCard;