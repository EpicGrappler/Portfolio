import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';


const projects = [
  {
    title: "Hotel Management System",
    description: "A comprehensive hotel management system built with Java. Features include room booking, customer management, billing system, and staff management with a user-friendly GUI interface.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
    technologies: ["Java", "Swing", "Database", "GUI"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Hospital Management System",
    description: "Python-based hospital management system with patient records management, appointment scheduling, doctor management, and medical inventory tracking capabilities.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop",
    technologies: ["Python", "Database", "GUI", "Data Management"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Clinic Website",
    description: "Modern, responsive clinic website with appointment booking system, doctor profiles, services showcase, and patient portal. Built with modern frontend technologies.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "AI Tic-Tac-Toe Game",
    description: "Intelligent Tic-Tac-Toe game featuring AI opponent using minimax algorithm. The AI provides challenging gameplay with different difficulty levels and strategic decision making.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
    technologies: ["Python", "AI Algorithm", "Minimax", "Game Development"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "College Network Setup",
    description: "Comprehensive network infrastructure design and implementation for college campus. Includes VLAN configuration, routing protocols, and network security implementation using CCNA principles.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    technologies: ["CCNA", "Network Design", "Routing", "VLAN"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and experience. Features dark mode, responsive design, smooth animations, and modern UI/UX principles.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/EpicGrappler/Portfolio#",
    live: "#",
    featured: false
  }
];

function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences
          </p>
          
          {/* Filter buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'featured' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.live}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={project.live}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;