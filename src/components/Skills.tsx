import React from 'react';
import { skills } from '../data/skills';
import { Code, Database, Server, Cpu, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code className="h-5 w-5 text-indigo-400" />;
      case 'Frameworks':
        return <Server className="h-5 w-5 text-purple-400" />;
      case 'Data':
        return <Database className="h-5 w-5 text-blue-400" />;
      case 'Tools':
        return <Cpu className="h-5 w-5 text-green-400" />;
      case 'Cloud':
        return <Cloud className="h-5 w-5 text-cyan-400" />;
      default:
        return <Code className="h-5 w-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 mb-6">
            <Code className="w-4 h-4 mr-2" />
            <span>Skills & Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiencies</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit includes a range of languages, frameworks, and technologies
            focused on backend development and data processing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {getIconForCategory(skill.category)}
                <h3 className="text-xl font-semibold text-white ml-2">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-800/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Want to work together?</h3>
              <p className="text-gray-300">
                I'm currently available for freelance projects and collaboration opportunities.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;