import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Web Development Intern',
      company: 'Sublime Technology',
      location: 'Chhatrapati Sambhaji Nagar, India',
      period: 'Jan 2025 – Jul 2025',
      description:
        ' Worked as a full stack Web Development Intern where I gained hands-on experience in real-world projects, focusing on React.js, Node.js, and backend integration.',
      achievements: [
        'Cracked my very first interview and landed my first internship',
        'Worked on ERP System for building full-stack features with React and Express ',
        'Improved problem-solving and team collaboration skills',
      ],
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      id: 2,
      type: 'education',
      title: 'Bachelor of Technology (CSE)',
      company: 'Shreeyash College of Engineering & Technology',
      location: 'Chhatrapati Sambhaji Nagar, India',
      period: '2022 – Expected aug 2026',
      description:
        'Pursuing B.Tech in Computer Science and Engineering. Actively learning web technologies, programming, and problem-solving.',
      achievements: [
        'Specialized in C, C++, OOP concepts, and Web Development',
        'Built projects like Tourist Guide App, Attendance Management System',
        'Participated in coding and technical events to sharpen skills',
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 3,
      type: 'education',
      title: 'Higher Secondary Education (12th)',
      company: 'Deogiri College chh.Sambhaji Nagar',
      location: 'Chhatrapati Sambhaji Nagar, India',
      period: '2020 – 2021',
      description:
        'Completed Higher Secondary (12th, Science stream, 78.33%) with a focus on Mathematics and Computer fundamentals.',
      achievements: [
        'Laid the foundation for Computer Science journey',
        'Developed an early interest in coding and logical thinking',
      ],
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-cyan-600 transform md:-translate-x-0.5"></div>

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full transform md:-translate-x-2 z-10 shadow-lg`}
              ></div>

              {/* Experience/Education card */}
              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-r ${exp.gradient} rounded-lg`}>
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-white" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Key {exp.type === 'work' ? 'Achievements' : 'Highlights'}:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a href="https://drive.google.com/file/d/1cJ6vquphe-xwULtrlP4LrjPghIKfriOr/view?usp=sharing">
           <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </button></a>
         
        </div>
      </div>
    </section>
  );
};

export default Experience;
