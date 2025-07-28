import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hey, I'm Mostafa";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 text-white px-4 text-center relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 min-h-[1.2em]">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl mb-2 text-gray-100 animate-slide-up opacity-0 animation-delay-1000">
          Computer Science Student
        </p>
        <p className="text-lg mb-8 text-gray-200 animate-slide-up opacity-0 animation-delay-1500">
          Python Developer | Problem Solver | Team Player
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-slide-up opacity-0 animation-delay-2000">
          <a 
            href="#projects" 
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full hover:bg-indigo-100 hover:scale-105 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
export default Hero;