import React, { useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const typeText = async () => {
      if (!textRef.current) return;
      
      const text = "I'm a backend developer specialized in data processing and API development";
      textRef.current.textContent = '';
      
      for (let i = 0; i < text.length; i++) {
        if (!textRef.current) break;
        textRef.current.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    };
    
    typeText();
  }, []);

  return (
    <div className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"
        aria-hidden="true"
      />
      
      {/* Code-like background elements */}
      <div className="absolute inset-0 -z-5 opacity-5">
        <div className="absolute top-1/4 left-1/4 text-xs text-gray-600 font-mono">
          {'def process_data(input_data):'}<br />
          {'    """Process raw data and return transformed output"""'}<br />
          {'    validated_data = validate(input_data)'}<br />
          {'    transformed_data = transform(validated_data)'}<br />
          {'    return transformed_data'}
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-xs text-gray-600 font-mono">
          {'async def get_user(user_id: int):'}<br />
          {'    """Retrieve user from database"""'}<br />
          {'    user = await db.users.get(user_id)'}<br />
          {'    if not user:'}<br />
          {'        raise HTTPException(404, "User not found")'}<br />
          {'    return UserResponse.from_orm(user)'}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="h-6 w-6 text-green-500" />
            <div className="text-green-500 font-mono">~/backend-dev $</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Backend Developer <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              with a passion for data
            </span>
          </h1>
          
          <div className="relative mb-8">
            <div 
              ref={textRef} 
              className="text-xl md:text-2xl text-gray-300 font-mono min-h-[60px]"
            ></div>
            <span className="inline-block w-3 h-6 bg-indigo-500 animate-pulse ml-1"></span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              View My Projects
            </button>
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
              className="px-6 py-3 bg-transparent border border-indigo-500 text-indigo-400 hover:text-indigo-300 hover:border-indigo-400 font-medium rounded-lg transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;