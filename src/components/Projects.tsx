import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  FigmaUrl?: string;
}

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects: Project[] = [{
    id: 1,
    title: 'Cashflow+ – Personal Finance Tracker App',
    description: 'A minimalist mobile app designed to help users manage their daily expenses and savings. Emphasis was placed on intuitive navigation and user engagement through a clean UI design.',
    image: "/Finance.png",
    category: ['Mobile Apps'],
    stack: ['Kotlin', 'Android Studio', 'Figma'],
    githubUrl: 'https://github.com/Shemaiah2004/cashflow-plus.git'
  }, {
    id: 2,
    title: 'Web-based Project Management System',
    description: 'Led the front-end development of a responsive project management tool built as part of the ITP group project. Included task tracking, collaboration features, and mobile-friendly interfaces.',
    image: "/web.jpg",
    category: ['Web Apps'],
    stack: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://project-management-demo.netlify.app'
  }, {
    id: 4,
    title: 'OOP-Based Desktop Application',
    description: 'Collaborated on a desktop application using object-oriented programming principles. Focused on code structure, class design, and implementing beginner-level UI components.',
    image: "/oop.png",
    category: ['Desktop Apps'],
    stack: ['Java', 'OOP', 'Swing/JavaFX'],
    githubUrl: 'https://github.com/Shemaiah2004/oop-desktop-app.git'
  }, 
    {
    id: 6,
    title: 'Mobile App UI Prototypes',
    description: 'A collection of mobile app UI designs focusing on minimalist aesthetics and user-centered design principles.',
    image: "/figma.png",
    category: ['UI/UX', 'Mobile Apps'],
    stack: ['Figma', 'Wireframing', 'Prototyping'],
    FigmaUrl: 'https://www.figma.com/file/mobile-ui-prototypes'
  }];


  const categories = ['All', 'Web Apps', 'UI/UX', 'Mobile Apps', 'Desktop Apps'];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category.includes(activeCategory));
  return <section id="projects" ref={sectionRef} className={`py-24 relative overflow-hidden transition-colors duration-300 ${
    darkMode ? 'bg-gray-800' : 'bg-[#C8D9E6]'
  }`}>
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-[radial-gradient(ellipse_at_center,rgba(86,124,141,0.02),transparent_70%)]' 
          : 'bg-[radial-gradient(ellipse_at_center,rgba(86,124,141,0.05),transparent_70%)]'
      }`}></div>
      {/* Animated background elements */}
      <div className={`absolute w-64 h-64 -top-32 -left-32 rounded-full blur-3xl animate-pulse ${
        darkMode ? 'bg-[#567C8D]/2' : 'bg-[#567C8D]/5'
      }`} style={{
      animationDuration: '10s'
    }}></div>
      <div className={`absolute w-64 h-64 -bottom-32 -right-32 rounded-full blur-3xl animate-pulse ${
        darkMode ? 'bg-[#567C8D]/2' : 'bg-[#567C8D]/5'
      }`} style={{
      animationDuration: '15s',
      animationDelay: '2s'
    }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-[#2F4156]">
            My <span className="text-[#567C8D]">Projects</span>
          </h2>
          <p className="text-xl text-[#2F4156] animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            Real Projects. Real Learning.
          </p>
        </div>
        {/* Category filter with animation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}>
          {categories.map((category, index) => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${activeCategory === category ? 'bg-[#567C8D] text-white scale-110 shadow-lg shadow-[#567C8D]/30 border-2 border-[#567C8D]' : 'bg-white text-[#2F4156] hover:bg-[#C8D9E6]/50 border-2 border-transparent hover:border-[#567C8D]/30'}`} style={{
          transitionDelay: `${index * 100}ms`
        }}>
              {category}
            </button>)}
        </div>
        
        {/* Show active filter count */}
        <div className="text-center mb-8">
          <p className="text-[#2F4156]/70 text-sm">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            {activeCategory !== 'All' && <span className="text-[#567C8D]"> in {activeCategory}</span>}
          </p>
        </div>
        {/* Projects grid with 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 min-h-[400px]">
          {filteredProjects.map((project, index) => <div key={`${project.id}-${activeCategory}`} className="group relative bg-white/70 rounded-xl overflow-hidden border border-[#567C8D]/20 hover:border-[#567C8D]/50 transition-all duration-500 project-card animate-fade-in-up shadow-lg hover:shadow-xl hover:shadow-[#567C8D]/20" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(50px) rotateX(10deg)',
          transition: `opacity 0.6s ease-out ${index * 150}ms, transform 0.6s ease-out ${index * 150}ms`,
          transformStyle: 'preserve-3d',
          animationDelay: `${index * 100}ms`
        }}>
              {/* Project image with parallax effect */}
              <div className="h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:translate-y-2" />
                {/* Hover overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Project info */}
              <div className="p-6 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#567C8D] transition-colors text-[#2F4156]">
                  {project.title}
                </h3>
                <p className="text-[#2F4156]/70 mb-4">{project.description}</p>
                {/* Tech stack with staggered animation */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => <span key={tech} className="px-2 py-1 bg-[#C8D9E6]/50 text-[#2F4156] text-xs rounded transform transition-all duration-300 hover:scale-110 hover:bg-[#567C8D]/20" style={{
                transitionDelay: `${techIndex * 50}ms`,
                transform: 'translateZ(10px)'
              }}>
                      {tech}
                    </span>)}
                </div>
                {/* Links with hover effects */}
                <div className="flex gap-4">
                  {project.liveUrl && <a href={project.liveUrl} className="flex items-center text-sm text-[#567C8D] hover:text-[#2F4156] transition-colors group">
                      <ExternalLinkIcon size={16} className="mr-1 group-hover:rotate-12 transition-transform" />
                      Live Demo
                    </a>}
                  {project.githubUrl && <a href={project.githubUrl} className="flex items-center text-sm text-[#2F4156] hover:text-[#567C8D] transition-colors group">
                      <GithubIcon size={16} className="mr-1 group-hover:rotate-12 transition-transform" />
                      GitHub
                    </a>}
                  {project.FigmaUrl && <a href={project.FigmaUrl} className="flex items-center text-sm text-[#2F4156] hover:text-[#567C8D] transition-colors group">
                      <ExternalLinkIcon size={16} className="mr-1 group-hover:rotate-12 transition-transform" />
                      Figma
                    </a>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;