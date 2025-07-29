import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useScrollAnimation, ScrollAnimatedDiv } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const [titleRef, titleVisible] = useScrollAnimation();
  const [contactInfoRef, contactInfoVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();

  // EmailJS configuration - Replace these with your actual values
  const EMAIL_SERVICE_ID = 'service_i85brgc';
  const EMAIL_TEMPLATE_ID = 'template_0qldtv1';
  const EMAIL_PUBLIC_KEY = 'xBxERhFFx3ZReUyMW';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      // EmailJS send function
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Mostafa Ashraf', // Your name
          reply_to: formData.email,
        },
        EMAIL_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Email",
      value: "mostaashraf337@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Phone",
      value: "+20 155 351 9087"
    },
    {
      icon: <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Location",
      value: "Cairo, Egypt"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" }
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
              Let's Work Together
            </h2>
          </ScrollAnimatedDiv>
          
          <ScrollAnimatedDiv 
            animation="fadeInUp" 
            delay={200}
            duration="0.8s"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Send me a message and I'll respond as soon as possible.
            </p>
          </ScrollAnimatedDiv>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ScrollAnimatedDiv 
              animation="fadeInLeft" 
              delay={300}
              duration="0.8s"
            >
              <div className="space-y-8">
                {contactItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-4 transform transition-all duration-700 ${
                      contactInfoVisible 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimatedDiv>

            {/* Social Links */}
            <ScrollAnimatedDiv 
              animation="fadeInLeft" 
              delay={800}
              duration="0.8s"
            >
              <div className="mt-12" ref={contactInfoRef}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all duration-200 group transform hover:scale-110 ${
                        contactInfoVisible 
                          ? 'translate-y-0 opacity-100 scale-100' 
                          : 'translate-y-4 opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: `${900 + index * 100}ms` }}
                    >
                      <div className="text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimatedDiv>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollAnimatedDiv 
              animation="fadeInRight" 
              delay={400}
              duration="0.8s"
            >
              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className={`transform transition-all duration-700 ${
                    formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '500ms' }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 transform focus:scale-105"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className={`transform transition-all duration-700 ${
                    formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '600ms' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 transform focus:scale-105"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className={`transform transition-all duration-700 ${
                  formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '700ms' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 transform focus:scale-105"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div className={`transform transition-all duration-700 ${
                  formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '800ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 resize-none transform focus:scale-105"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {submitMessage && (
                  <div className={`p-4 border rounded-lg animate-fade-in-up ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800' 
                      : 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800'
                  }`}>
                    <p className={`text-sm ${
                      submitStatus === 'success' 
                        ? 'text-green-700 dark:text-green-400' 
                        : 'text-red-700 dark:text-red-400'
                    }`}>
                      {submitMessage}
                    </p>
                  </div>
                )}

                <div className={`transform transition-all duration-700 ${
                  formVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '900ms' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </ScrollAnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;