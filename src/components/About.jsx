import { Download, Award, Users, GraduationCap } from 'lucide-react';

function About() {
  const stats = [
    { icon: <GraduationCap className="w-8 h-8" />, value: "3.3/4", label: "Current GPA" },
    { icon: <Award className="w-8 h-8" />, value: "6+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, value: "2027", label: "Expected Graduation" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image and stats */}
          <div className="relative">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                {/* Profile placeholder with gradient background */}
                <div className="aspect-square bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Currently Learning</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a Computer Science student at Helwan National University in Cairo, Egypt. 
                Currently in my journey towards graduation in 2027, I'm passionate about programming, 
                especially Python, and enjoy helping others learn and grow in technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I have experience working on team projects, organizing student activities, and helping 
                classmates understand complex topics. I'm proficient in multiple programming languages 
                including Python, C, Java, and web technologies like HTML, CSS, and JavaScript.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a quick learner with strong time management and communication skills in both Arabic 
                and English. I always strive to improve myself and inspire my friends to reach their potential.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;