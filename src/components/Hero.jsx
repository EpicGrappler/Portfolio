import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

function Hero() {
  const { isDark } = useDarkMode();
  const [displayText, setDisplayText] = useState('');
  const [lightBgLoaded, setLightBgLoaded] = useState(false);
  const [darkBgLoaded, setDarkBgLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const fullText = "Mostafa Ashraf";

  // Background image paths - you can modify these
  const lightBgPath = "/Portfolio/images/light-bg.jpg";
  const darkBgPath = "/Portfolio/images/dark-bg.jpg";
  
  // Mobile-specific images (optional)
  const lightBgMobilePath = "/Portfolio/images/light-bg-mobile.jpg";
  const darkBgMobilePath = "/Portfolio/images/dark-bg-mobile.jpg";
  
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

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload background images
  useEffect(() => {
    const lightImg = new Image();
    const darkImg = new Image();
    const lightMobileImg = new Image();
    const darkMobileImg = new Image();
    
    // Desktop images
    lightImg.onload = () => setLightBgLoaded(true);
    darkImg.onload = () => setDarkBgLoaded(true);
    
    lightImg.onerror = () => {
      console.log('Light background image failed to load:', lightBgPath);
      setLightBgLoaded(false);
    };
    
    darkImg.onerror = () => {
      console.log('Dark background image failed to load:', darkBgPath);
      setDarkBgLoaded(false);
    };
    
    // Load desktop images
    lightImg.src = lightBgPath;
    darkImg.src = darkBgPath;
    
    // Preload mobile images (optional - they'll be used if available)
    lightMobileImg.src = lightBgMobilePath;
    darkMobileImg.src = darkBgMobilePath;
  }, [lightBgPath, darkBgPath, lightBgMobilePath, darkBgMobilePath]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-white px-4 text-center relative overflow-hidden">
      {/* Background Images with Dark Mode Toggle */}
      <div className="absolute inset-0 z-0">
        {/* Light Mode Background */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            !isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {lightBgLoaded ? (
            <>
              {/* Desktop Background (768px and up) */}
              <div 
                className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url("${lightBgPath}")`,
                  filter: 'brightness(0.7)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
              </div>

              {/* Mobile Background (below 768px) */}
              <div 
                className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url("${lightBgMobilePath}")`,
                  filter: 'brightness(0.7)',
                  backgroundPosition: 'center center'
                }}
                onError={(e) => {
                  // Fallback to desktop image if mobile image fails
                  e.target.style.backgroundImage = `url("${lightBgPath}")`;
                  e.target.style.backgroundPosition = '65% center';
                  console.log('Mobile light background not found, using desktop version');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
              {/* Debug message - remove this in production */}
              <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded text-xs">
                Light BG: Not loaded
              </div>
            </div>
          )}
        </div>

        {/* Dark Mode Background */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {darkBgLoaded ? (
            <>
              {/* Desktop Background (768px and up) */}
              <div 
                className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url("${darkBgPath}")`,
                  filter: 'brightness(0.6)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 via-purple-800/20 to-pink-800/20"></div>
              </div>

              {/* Mobile Background (below 768px) */}
              <div 
                className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url("${darkBgMobilePath}")`,
                  filter: 'brightness(0.6)',
                  backgroundPosition: 'center center'
                }}
                onError={(e) => {
                  // Fallback to desktop image if mobile image fails
                  e.target.style.backgroundImage = `url("${darkBgPath}")`;
                  e.target.style.backgroundPosition = '65% center';
                  console.log('Mobile dark background not found, using desktop version');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/20 via-purple-800/20 to-pink-800/20"></div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800">
              {/* Debug message - remove this in production */}
              <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded text-xs">
                Dark BG: Not loaded
              </div>
            </div>
          )}
        </div>

        {/* Animated background elements (always visible) */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 min-h-[1.2em] drop-shadow-2xl">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl mb-2 text-gray-100 animate-slide-up opacity-0 animation-delay-1000 drop-shadow-lg">
          Computer Science Student
        </p>
        <p className="text-lg mb-8 text-gray-200 animate-slide-up opacity-0 animation-delay-1500 drop-shadow-lg">
          Aspiring ML Engineer | Python • ML Fundamentals
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-slide-up opacity-0 animation-delay-2000">
          <a 
            href="#projects" 
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full hover:bg-indigo-100 hover:scale-105 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            View My Work
          </a>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-white/70 drop-shadow-lg" />
      </div>
    </section>
  );
}

export default Hero;