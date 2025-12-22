import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
  id: 1,
  title: 'AI Phishing Detection Extension',
  category: 'Machine Learning',
  description: 'A smart browser extension that uses AI to detect and block malicious phishing websites in real-time.',
  longDescription: 'Developed for the Smart India Hackathon (SIH), this browser extension proactively blocks phishing sites. It uses a Machine Learning model (Python, Scikit-learn, Flask) to analyze URL features in real-time. The frontend, built with JavaScript, offers both on-demand manual scanning and continuous automatic protection.',
  image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg', 
  tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Flask', 'JavaScript', 'Cybersecurity'],
  github: 'https://github.com/RahulWavhale/phishnet_extention_2.0', 
  demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7384230775472332800/?originTrackingId=gg9yTrZU%2B1N3hfZ%2BreIPtQ%3D%3D', // Replace with the link to your LinkedIn video post
  gradient: 'from-blue-600 to-teal-500'
},
    {
  id: 2,
  title: 'URL Shortener',
  category: 'Web Development',
  description: 'A full-stack application that transforms long links into short, manageable URLs, complete with user authentication and analytics.',
  longDescription: 'This full-stack URL shortener features a secure user authentication system using JWT and bcrypt for password hashing. The frontend is built with React and deployed on Netlify, while the backend API, built with Node.js and Express, is hosted on Railway. It effectively handles cross-origin requests (CORS) and uses MongoDB to store user data and track URL click history.',
  image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'CORS', 'Netlify', 'Railway'],
  github: 'https://github.com/pankajkhadse/url-shortner', 
  demo: 'https://url-shortner-io.netlify.app',
  gradient: 'from-purple-600 to-indigo-500'
},

  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
               Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href={project.demo}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Eye size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                  {/* <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors duration-200">
                    Learn More →
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Projects
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
