import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ArrowRight, Code2, Briefcase, GraduationCap, Award, Terminal, Cpu, Database, Globe } from 'lucide-react';

export default function MaximPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Game Development",
      description: "Developed a game using Python, applying OOP principles and game logic",
      tech: ["Python", "Pygame"]
    },
    {
      title: "Automation Scripts",
      description: "Created a set of scripts for automating routine tasks and data processing",
      tech: ["Python", "Linux"]
    },
    {
      title: "Data Annotation",
      description: "3 months internship at 7Generation - data labeling for ML models",
      tech: ["Data Labeling", "ML"]
    }
  ];

  const skills = [
    { name: "C++", level: 90 },
    { name: "Python", level: 85 },
    { name: "Linux", level: 70 },
    { name: "Networking", level: 65 }
  ];

  const education = {
    university: "Astana IT University",
    specialty: "Software Engineering",
    year: "2025 - Present",
    courses: ["Kodland Python (Moscow)", "English (Intermediate)", "Linux Administration"]
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight">MS</div>
            <div className="flex items-center space-x-8 text-sm">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div 
            className="mb-8 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-purple-400 text-sm uppercase tracking-wider">Software Engineering Student</span>
          </div>
          
                      <h1 
            className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter opacity-0 animate-fadeIn"
            style={{ 
              animationDelay: '0.4s', 
              animationFillMode: 'forwards',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            Maxim<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Samarin
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto opacity-0 animate-fadeIn leading-relaxed"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            17-year-old developer from Astana, passionate about creating 
            <span className="text-white font-semibold"> innovative solutions </span>
            and constantly learning new technologies
          </p>

          <div 
            className="flex gap-6 justify-center opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <a 
              href="#projects" 
              className="group bg-white text-black px-8 py-4 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2 font-semibold shadow-2xl shadow-white/20 hover:shadow-purple-500/50 active:scale-95 active:shadow-purple-500/70"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white/20 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 font-semibold shadow-xl shadow-white/10 active:scale-95 active:bg-white/20"
            >
              Get in Touch
            </a>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute opacity-20"
              style={{
                left: '10%',
                top: '20%',
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            >
              <Code2 size={40} className="text-purple-400" />
            </div>
            <div 
              className="absolute opacity-20"
              style={{
                right: '15%',
                top: '30%',
                transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.03}px)`
              }}
            >
              <Terminal size={50} className="text-blue-400" />
            </div>
            <div 
              className="absolute opacity-20"
              style={{
                left: '20%',
                bottom: '20%',
                transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.02}px)`
              }}
            >
              <Cpu size={45} className="text-pink-400" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Creating with
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                  passion
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Studying at Astana IT University majoring in Software Engineering. 
                Programming for me is a way to bring ideas to life and solve real problems.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                I have experience with Python and C++, passionate about Linux and networking. 
                Fast learner and always ready for new challenges.
              </p>

              <div className="flex gap-4">
                <a href="https://github.com/sannder01" target="_blank" rel="noopener noreferrer" 
                   className="bg-white/5 p-4 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-lg hover:shadow-white/20 active:scale-90 active:bg-white/20">
                  <Github size={24} />
                </a>
                <a href="mailto:msamarin.2007@gmail.com"
                   className="bg-white/5 p-4 rounded-full hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-lg hover:shadow-white/20 active:scale-90 active:bg-white/20">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/30">
                <GraduationCap size={40} className="text-purple-400 mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-semibold mb-2">{education.university}</h3>
                <p className="text-gray-400 mb-2">{education.specialty}</p>
                <p className="text-sm text-gray-500">{education.year}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/30">
                <Briefcase size={40} className="text-blue-400 mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-semibold mb-2">7Generation</h3>
                <p className="text-gray-400 mb-2">Data Annotator</p>
                <p className="text-sm text-gray-500">3 months internship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">Projects I'm proud of</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50 hover:shadow-purple-500/30"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Tech <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Stack</span>
            </h2>
            <p className="text-xl text-gray-400">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-6">{skill.name}</h3>
                
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/50"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-right text-lg font-semibold text-purple-400 mt-3">{skill.level}%</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {education.courses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/30 hover:shadow-yellow-500/20">
                <Award className="text-yellow-400 mb-3 drop-shadow-lg" size={32} />
                <p className="text-gray-300">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Let's <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Open to new opportunities, projects and interesting offers. 
            Let's create something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:msamarin.2007@gmail.com"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-xl shadow-purple-500/30 active:scale-95 active:shadow-purple-500/70"
            >
              <Mail size={24} />
              msamarin.2007@gmail.com
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="tel:+77055406676" className="text-gray-400 hover:text-white transition-colors">
              +7 705 540 66 76
            </a>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">Astana, Kazakhstan</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">© 2024 Maxim Samarin</p>
          <div className="flex gap-6">
            <a href="https://github.com/sannder01" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
            <a href="mailto:msamarin.2007@gmail.com" className="text-gray-500 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}