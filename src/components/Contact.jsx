import { Mail, Github, Linkedin } from 'lucide-react';
import { ScrollAnimatedDiv } from '../hooks/useScrollAnimation';

function Contact() {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Email",
      value: "mostafa.ashraf.dev1@gmail.com",
      href: "mailto:mostafa.ashraf.dev1@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, 
      title: "GitHub",
      value: "github.com/Mostafa-Ashraf-1",
      href: "https://github.com/Mostafa-Ashraf-1"
    },
    { 
      icon: <Linkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mostafa-ashraf-040aa02a4",
      href: "https://www.linkedin.com/in/mostafa-ashraf-040aa02a4/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimatedDiv 
            animation="fadeInDown" 
            duration="0.8s"
          >
            <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
              Contact
            </h2>
          </ScrollAnimatedDiv>
          
          <ScrollAnimatedDiv 
            animation="fadeInUp" 
            delay={200}
            duration="0.8s"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Open to internship opportunities and professional collaboration.
            </p>
          </ScrollAnimatedDiv>
        </div>

        <div className="flex justify-center">
          <ScrollAnimatedDiv 
            animation="fadeInUp" 
            delay={300}
            duration="0.8s"
          >
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollAnimatedDiv>
        </div>
      </div>
    </section>
  );
}

export default Contact;