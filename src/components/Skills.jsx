import { Code, BrainCircuit, Database, Cpu, Brain, Server } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation, ScrollAnimatedDiv } from '../hooks/useScrollAnimation';

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="w-8 h-8" />,
    skills: ["Python", "C", "Java", "JavaScript", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    skills: ["Regression", "Classification", "Recall Optimization", "Threshold Tuning", "Model Evaluation", ],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Deep Learning",
    icon: <BrainCircuit className="w-8 h-8" />,
    skills: ["Neural Networks (from scratch)", "Keras", "CNNs", "RNNs", "Transformers"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "CS & Systems",
    icon: <Cpu className="w-8 h-8" />,
    skills: ["Algorithms", "Data Structures", "MicroProcessors", "Realtime Systems"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Database (Basics)",
    icon: <Database className="w-8 h-8" />,
    skills: ["Database Design", "SQL", "Data Management", "System Analysis"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    category: "Networks",
    icon: <Server className="w-8 h-8" />,
    skills: ["System Administration", "Linux Basics", "CCNA", "Network Setup"],
    color: "from-orange-500 to-red-500"
  },
];

function Skills() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, visibleItems] = useStaggeredAnimation(skills.length, 150);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimatedDiv 
            animation="fadeInDown" 
            duration="0.8s"
          >
            <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
              Skills & Technologies
            </h2>
          </ScrollAnimatedDiv>
          
          <ScrollAnimatedDiv 
            animation="fadeInUp" 
            delay={200}
            duration="0.8s"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I work with a variety of technologies to build modern, scalable, and user-friendly applications
            </p>
          </ScrollAnimatedDiv>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: visibleItems.has(index) ? '0ms' : `${index * 150}ms`,
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 bg-gradient-to-br ${skillGroup.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  visibleItems.has(index) ? 'animate-bounce-in' : ''
                }`} style={{ animationDelay: `${index * 150 + 300}ms` }}>
                  {skillGroup.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-200 transform ${
                        visibleItems.has(index) 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: `${index * 150 + skillIndex * 50 + 400}ms`,
                        transitionDuration: '600ms'
                      }}
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