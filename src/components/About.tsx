import React from 'react';
import { Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 mb-6">
              <Code2 className="w-4 h-4 mr-2" />
              <span>Acerca de mí</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
             Desarrollador Backend <br className="hidden md:block" />
              y <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Analista de datos</span>
            </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
  Soy Ignacio, desarrollador backend y analista de datos con enfoque en el aprendizaje continuo. Actualmente estudio la Licenciatura en Gestión de Tecnologías de la Información en la UNPAZ.
</p>

<p className="text-gray-300 mb-6 leading-relaxed">
  Doy clases introductorias de programación en <span translate="no">Python</span>, ayudando a otros a desarrollar habilidades en desarrollo de software y análisis de datos.
</p>

<p className="text-gray-300 mb-6 leading-relaxed">
  Trabajo principalmente con <span translate="no">Python</span>, SQL, Power BI y Excel, y comparto mi progreso en GitHub y LinkedIn. Mi enfoque está centrado en crear soluciones prácticas y eficientes.
</p>


            <div className="flex flex-wrap gap-3">
              {['Python', 'API Development', 'Data Engineering', 'Backend Architecture'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/5 bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl shadow-black/20">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-gray-400 font-mono">~/about.py</div>
            </div>
            <pre className="text-sm text-gray-300 font-mono">
              <code>
                <span className="text-purple-400">class</span> <span className="text-yellow-300">BackendDeveloper</span>:
                <br />
                <span className="text-gray-400 ml-4">"Profesional Profile"</span>
                <br />
                <br />
                <span className="ml-4">def </span><span className="text-blue-400">__init__</span><span>(self):</span>
                <br />
                <span className="ml-8">self.</span><span className="text-green-400">name</span> <span>=</span> <span className="text-yellow-300">"Ignacio Maldonado"</span>
                <br />
                 <span className="ml-8">self.</span><span className="text-green-400">location</span> <span>=</span> <span className="text-yellow-300">"José C. Paz, Bs As"</span>
                <br />
                <span className="ml-8">self.</span><span className="text-green-400">role</span> <span>=</span> <span className="text-yellow-300">"Backend Developer"</span>
                <br />
                <span className="ml-8">self.</span><span className="text-green-400">expertise</span> <span>=</span> <span className="text-blue-400">{"["}</span>
                <br />
                
                <span className="ml-12 text-yellow-300">"Python Development"</span>,
                <br />
                <span className="ml-12 text-yellow-300">"API Design"</span>,
                <br />
                <span className="ml-12 text-yellow-300">"Data Engineering"</span>,
                <br />
                <span className="ml-12 text-yellow-300">"Database Optimization"</span>
                <br />
                <span className="ml-8 text-blue-400">{"]"}</span>
                <br />
                <br />
                <span className="ml-4">def </span><span className="text-blue-400">get_experience</span><span>(self):</span>
                <br />
                <span className="ml-8">return</span> <span className="text-yellow-300">"2 years"</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;