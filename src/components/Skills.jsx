import { Code, Palette, Database, Server, Brain, Users } from 'lucide-react';

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-8 h-8" />,
    skills: ["Python", "C", "Java", "JavaScript", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Web Development",
    icon: <Palette className="w-8 h-8" />,
    skills: ["Frontend Development", "Responsive Design", "CSS", "React"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Computer Science",
    icon: <Brain className="w-8 h-8" />,
    skills: ["Algorithms", "Data Structures", "AI Basics", "Operating Systems"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Systems & Network",
    icon: <Server className="w-8 h-8" />,
    skills: ["Linux Basics", "CCNA", "Network Setup", "System Administration"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    skills: ["Database Design", "SQL", "Data Management", "System Analysis"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-8 h-8" />,
    skills: ["Quick Learner", "Time Management", "Teamwork", "Communication"],
    color: "from-teal-500 to-blue-500"
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I work with a variety of technologies to build modern, scalable, and user-friendly applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 bg-gradient-to-br ${skillGroup.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {skillGroup.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;