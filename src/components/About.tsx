import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'C & C++', desc: 'Strong foundation with OOP concepts' },
    { name: 'React.js ', desc: 'Modern frontend with dynamic UIs' },
    { name: 'Node.js & Express', desc: 'Backend APIs and authentication' },
    { name: 'MySQL & mongoDB', desc: 'Database design and queries' },
    { name: 'Tailwind CSS', desc: 'Responsive, modern UI styling' },
    { name: 'Python', desc: 'Problem solving and scripting' },
  ];

  
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate developer who loves building meaningful digital experiences.
          </p>
        </div>

        {/* Bio + Skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                My Story
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Hi, I’m <span className="font-semibold text-purple-600 dark:text-purple-400">Pankaj Khadse</span>, 
                a 4th-year Computer Science and Engineering student at Shreeyash College of Engineering & Technology, 
                Chhatrapati Sambhaji Nagar.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I started my journey with <span className="font-semibold">C/C++</span> and OOP concepts, 
                and gradually moved into <span className="font-semibold">web development</span>, 
                where I specialize in <span className="font-semibold">MERN stack and modern web technologies</span>. 
               I have done my 6 month internship at <span className="font-semibold">Sublime Technology</span>, 
                gaining hands-on experience in real-world projects.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond coding, I love playing cricket & badminton, 
                and I am always exploring new technologies to level up my skills.
                 </p>
            
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 
                      dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-100 
                      dark:border-purple-800 hover:scale-105 hover:shadow-lg transition-all duration-300 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        
      </div>
    </section>
  );
};

export default About;
