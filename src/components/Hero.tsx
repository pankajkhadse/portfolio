import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import img from './pankaj.png'

const Hero: React.FC = () => {
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

  return (
    <section
  ref={sectionRef}
  id="hero"
  className="min-h-screen bg-white dark:bg-gray-900 flex items-center pt-20 md:pt-0"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
    {/* Left: Text */}
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Pankaj Khadse
        </span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
        A passionate <span className="font-semibold">CSE Student</span> and{" "}
        <span className="font-semibold">Full-Stack Developer</span> who loves
        building modern, interactive web applications with MERN and Tailwind CSS
      </p>

      <a
        href="#projects"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        View My Work <ArrowRight className="w-5 h-5" />
      </a>
    </div>

    {/* Right: Image */}
    <div
      className={`transition-all duration-1000 delay-300 flex justify-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src={img}
        alt="Hero Illustration"
        className="w-80 h-5/6 object-cover rounded-2xl shadow-lg dark:shadow-xl"
      />
    </div>
  </div>
</section>

  );  
};

export default Hero;
