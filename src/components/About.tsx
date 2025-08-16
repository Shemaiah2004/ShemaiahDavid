import React, { useEffect, useRef } from 'react';
import { GraduationCapIcon, BriefcaseIcon, TargetIcon, DownloadIcon } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';
import Button from './ui/Button';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    const childElements = sectionRef.current?.querySelectorAll('.reveal-element');
    childElements?.forEach((el, index) => {
      el.classList.add('opacity-0');
      // Add staggered delay
      const delay = 100 + index * 150;
      (el as HTMLElement).style.transitionDelay = `${delay}ms`;
      observer.observe(el);
    });
    return () => {
      childElements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <section id="about" ref={sectionRef} className={`py-24 relative transition-colors duration-300 ${
    darkMode ? 'bg-gray-900' : 'bg-white'
  }`}>
      <div className={`absolute top-0 right-0 w-1/3 h-1/3 ${
        darkMode 
          ? 'bg-[radial-gradient(circle_at_top_right,rgba(86,124,141,0.05),transparent_70%)]' 
          : 'bg-[radial-gradient(circle_at_top_right,rgba(86,124,141,0.1),transparent_70%)]'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 ${
        darkMode 
          ? 'bg-[radial-gradient(circle_at_bottom_left,rgba(86,124,141,0.05),transparent_70%)]' 
          : 'bg-[radial-gradient(circle_at_bottom_left,rgba(86,124,141,0.1),transparent_70%)]'
      }`}></div>
      {/* Animated background shapes */}
      <div className="absolute left-[10%] top-[20%] w-16 h-16 border border-[#567C8D]/20 rotate-45 animate-spin" style={{
      animationDuration: '15s'
    }}></div>
      <div className="absolute right-[15%] bottom-[30%] w-20 h-20 border border-[#567C8D]/10 rounded-full animate-spin" style={{
      animationDuration: '20s'
    }}></div>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 text-center reveal-element ${
          darkMode ? 'text-white' : 'text-[#2F4156]'
        }`}>
          About <span className="text-[#567C8D]">Me</span>
        </h2>
        {/* Stats counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 reveal-element">
          <div className={`text-center p-4 rounded-lg border border-[#567C8D]/20 ${
            darkMode ? 'bg-gray-800/50' : 'bg-[#C8D9E6]/30'
          }`}>
            <AnimatedCounter end={2} suffix="+" className="text-4xl font-bold text-[#567C8D]" />
            <p className={`mt-2 ${
              darkMode ? 'text-gray-300' : 'text-[#2F4156]'
            }`}>Years of Study</p>
          </div>
          <div className={`text-center p-4 rounded-lg border border-[#567C8D]/20 ${
            darkMode ? 'bg-gray-800/50' : 'bg-[#C8D9E6]/30'
          }`}>
            <AnimatedCounter end={8} suffix="+" className="text-4xl font-bold text-[#567C8D]" />
            <p className={`mt-2 ${
              darkMode ? 'text-gray-300' : 'text-[#2F4156]'
            }`}>Projects Completed</p>
          </div>
          <div className={`text-center p-4 rounded-lg border border-[#567C8D]/20 ${
            darkMode ? 'bg-gray-800/50' : 'bg-[#C8D9E6]/30'
          }`}>
            <AnimatedCounter end={5} className="text-4xl font-bold text-[#567C8D]" />
            <p className={`mt-2 ${
              darkMode ? 'text-gray-300' : 'text-[#2F4156]'
            }`}>Design Tools</p>
          </div>
          <div className={`text-center p-4 rounded-lg border border-[#567C8D]/20 ${
            darkMode ? 'bg-gray-800/50' : 'bg-[#C8D9E6]/30'
          }`}>
            <AnimatedCounter end={95} suffix="%" className="text-4xl font-bold text-[#567C8D]" />
            <p className={`mt-2 ${
              darkMode ? 'text-gray-300' : 'text-[#2F4156]'
            }`}>Learning Progress</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column: Text */}
          <div className="reveal-element" style={{
          transitionDelay: '200ms'
        }}>
            <p className={`text-lg mb-8 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-[#2F4156]'
            }`}>
              I'm a second-year undergraduate at SLIIT, currently specializing in Information Technology. With a strong interest in UI/UX design and mobile application development, I strive to bridge the gap between functionality and user experience. My passion lies in crafting aesthetically pleasing, user-friendly interfaces and bringing them to life through clean and efficient code.
            </p>
            <p className={`text-lg mb-8 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-[#2F4156]'
            }`}>
              Beyond design, I enjoy leading teams, exploring digital business solutions, and staying curious about the latest tech trends. From academic projects to freelance roles, each experience has shaped my identity as a creative, collaborative, and future-focused IT professional.
            </p>
            
            <div className="mb-8 reveal-element">
              <Button 
                href="https://drive.google.com/drive/folders/1u8ctDHz621bZrvZr02lJWsJY0HLxRoHh"
                className="group relative overflow-hidden bg-gradient-to-r from-[#567C8D] to-[#2F4156] hover:from-[#2F4156] hover:to-[#567C8D] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#567C8D]/30"
                icon={<DownloadIcon size={16} className="group-hover:translate-y-1 transition-transform" />}
              >
                Download CV
              </Button>
            </div>
            <div className={`border border-[#567C8D]/20 rounded-lg p-6 hover:border-[#567C8D]/40 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#567C8D]/10 transition-all duration-300 ${
              darkMode ? 'bg-gray-800/50' : 'bg-white/50'
            }`}>
                            <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#567C8D]/20 flex items-center justify-center mr-4 group">
                  <GraduationCapIcon size={24} className="text-[#567C8D] group-hover:scale-125 transition-transform" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-[#2F4156]'
                  }`}>Education</h3>
                  <p className={`${
                    darkMode ? 'text-gray-400' : 'text-[#2F4156]/70'
                  }`}>BSc (Hons) in Information Technology - SLIIT</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#567C8D]/20 flex items-center justify-center mr-4 group">
                  <BriefcaseIcon size={24} className="text-[#567C8D] group-hover:scale-125 transition-transform" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-[#2F4156]'
                  }`}>Experience</h3>
                  <p className={`${
                    darkMode ? 'text-gray-400' : 'text-[#2F4156]/70'
                  }`}>
                    UI/UX Designer & Marketing Creative at Ipzzi (Freelance)
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#567C8D]/20 flex items-center justify-center mr-4 group">
                  <TargetIcon size={24} className="text-[#567C8D] group-hover:scale-125 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2F4156]">Focus Areas</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-1 bg-[#567C8D]/20 rounded text-sm hover:bg-[#567C8D]/30 transition-colors text-[#2F4156]">
                      UI/UX Design
                    </span>
                    <span className="px-2 py-1 bg-[#567C8D]/20 rounded text-sm hover:bg-[#567C8D]/30 transition-colors text-[#2F4156]">
                      Mobile Development
                    </span>
                    <span className="px-2 py-1 bg-[#567C8D]/20 rounded text-sm hover:bg-[#567C8D]/30 transition-colors text-[#2F4156]">
                      Team Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column: Timeline */}
          <div className="reveal-element" style={{
          transitionDelay: '400ms'
        }}>
            <div className="relative border-l-2 border-[#567C8D]/30 pl-8">
              {/* Timeline items */}
              <div className="mb-12 relative timeline-item">
                <div className="absolute -left-10 w-5 h-5 rounded-full bg-[#567C8D]"></div>
                <div className="absolute -left-[14px] w-7 h-7 rounded-full bg-[#567C8D]/30 animate-ping"></div>
                <h3 className="text-xl font-semibold mb-1 text-[#2F4156]">
                   UI/UX Designer & Marketing Creative
                </h3>
                <p className="text-[#567C8D] mb-2">Ipzzi (Freelance) - Feb 2025 - Present</p>
                <p className="text-[#2F4156]/80">
                  Collaborating on UI/UX concepts for product websites and designing marketing visuals. Practicing mobile-first design and gaining real-world experience in branding.
                </p>
                {/* Timeline connector with animation */}
                <div className="absolute left-[-9px] top-[30px] h-[calc(100%-10px)] w-1 bg-gradient-to-b from-[#567C8D]/50 to-transparent timeline-connector"></div>
              </div>
              <div className="mb-12 relative timeline-item">
                <div className="absolute -left-10 w-5 h-5 rounded-full bg-[#567C8D]/70"></div>
                <h3 className="text-xl font-semibold mb-1 text-[#2F4156]">IT Undergraduate</h3>
                <p className="text-[#567C8D] mb-2">SLIIT - 2023 - Present</p>
                <p className="text-[#2F4156]/80">
                  Specializing in Information Technology with focus on mobile app development and UI/UX design. Leading team projects and exploring digital business solutions.
                </p>
                {/* Timeline connector with animation */}
                <div className="absolute left-[-9px] top-[30px] h-[calc(100%-10px)] w-1 bg-gradient-to-b from-[#567C8D]/30 to-transparent timeline-connector"></div>
              </div>
              <div className="relative timeline-item">
                <div className="absolute -left-10 w-5 h-5 rounded-full bg-[#567C8D]/50"></div>
                <h3 className="text-xl font-semibold mb-1 text-[#2F4156]">
                  Mobile App Developer
                </h3>
                <p className="text-[#567C8D] mb-2">Academic & Personal Projects</p>
                <p className="text-[#2F4156]/80">
                  Developing mobile applications using Kotlin and focusing on intuitive user interfaces and clean code practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About