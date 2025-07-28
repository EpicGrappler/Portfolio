import { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Sun, Moon, Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  // Handle scroll effects and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
                className="flex items-center space-x-2 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Mostafa Ashraf
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Computer Science Student</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 group ${
                    activeSection === item.href.substring(1)
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 active:scale-95"
                aria-label="Toggle dark mode"
              >
                <div className="relative w-5 h-5">
                  <Sun className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${
                    isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} />
                  <Moon className={`absolute inset-0 w-5 h-5 text-indigo-400 transition-all duration-300 ${
                    isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`} />
                </div>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 active:scale-95 menu-button"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`absolute inset-0 w-5 h-5 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} />
                  <X className={`absolute inset-0 w-5 h-5 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300"
             style={{ 
               width: `${Math.min(100, (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
             }}>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        
        {/* Mobile Menu Panel */}
        <div className={`mobile-menu absolute top-20 right-4 left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'
        }`}>
          <div className="p-6">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className={`p-2 rounded-lg transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-indigo-100 dark:bg-indigo-800/30 text-indigo-600 dark:text-indigo-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile menu footer */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {isDark ? 'Dark' : 'Light'} Mode
                </span>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;