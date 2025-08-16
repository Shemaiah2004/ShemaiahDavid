import React, { useRef, useEffect, useState } from 'react';
import { DownloadIcon, ExternalLinkIcon, FileTextIcon, AwardIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import Button from './ui/Button';

interface ResumeProps {
  darkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 - Present",
      status: "Undergraduate - Second Year",
      icon: <GraduationCapIcon size={24} className="text-[#567C8D]" />
    },
    {
      degree: "G.C.E. Advanced Level - Commerce Stream",
      institution: "St. Mary's College, Trincomalee",
      period: "2022",
      status: "Completed",
      icon: <GraduationCapIcon size={24} className="text-[#567C8D]" />
    },
    {
      degree: "G.C.E. Ordinary Level",
      institution: "St. Mary's College, Trincomalee", 
      period: "2019",
      status: "Completed",
      icon: <GraduationCapIcon size={24} className="text-[#567C8D]" />
    }
  ];

  const experience = [
    {
      position: "UI/UX Designer & Marketing Creative",
      company: "Ipzzi (Freelance)",
      period: "Feb 2025 - Present",
      description: "Collaborated on UI/UX concepts for hair wrap product website. Designed marketing visuals and Facebook ads aligned with brand identity. Practiced mobile-first design and layout strategy.",
      icon: <BriefcaseIcon size={24} className="text-[#567C8D]" />
    },
    {
      position: "Mobile App Developer",
      company: "Academic & Personal Projects",
      period: "Jan 2025 - Present",
      description: "Developing mobile applications using Kotlin and Android Studio. Focus on intuitive user interfaces and clean code practices for finance tracking and project management apps.",
      icon: <BriefcaseIcon size={24} className="text-[#567C8D]" />
    },
    {
      position: "Frontend Developer",
      company: "Web Development Projects",
      period: "2024 - Present",
      description: "Built responsive web applications using React, Vite, HTML, CSS, and JavaScript. Led front-end development for project management systems and e-commerce platforms.",
      icon: <BriefcaseIcon size={24} className="text-[#567C8D]" />
    }
  ];

  const certifications = [
    {
      name: "UI/UX Design Principles",
      issuer: "Figma & Design Systems",
      year: "2024",
      icon: <AwardIcon size={20} className="text-[#567C8D]" />
    },
    {
      name: "Mobile App Development",
      issuer: "Kotlin & Android Studio",
      year: "2024", 
      icon: <AwardIcon size={20} className="text-[#567C8D]" />
    },
    {
      name: "Frontend Web Development",
      issuer: "React, Vite, JavaScript",
      year: "2024",
      icon: <AwardIcon size={20} className="text-[#567C8D]" />
    },
    {
      name: "Object-Oriented Programming",
      issuer: "Java & Desktop Applications",
      year: "2024",
      icon: <AwardIcon size={20} className="text-[#567C8D]" />
    },
    {
      name: "Visual Design & Branding",
      issuer: "Canva & Marketing Materials",
      year: "2024",
      icon: <AwardIcon size={20} className="text-[#567C8D]" />
    },
    {
      name: "Team Leadership & Project Management",
      issuer: "Academic & Group Projects",
      year: "2024",
      icon: <AwardIcon size={20} className="text-[#567C8D]" />
    }
  ];

  return (
    <section id="resume" ref={sectionRef} className="py-24 bg-[#F5EFEB] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(86,124,141,0.05),transparent_70%)]"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#567C8D]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#567C8D]/5 rounded-full blur-3xl"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-[#567C8D]/20 text-4xl font-mono hidden lg:block">{`{ }`}</div>
      <div className="absolute bottom-20 right-10 text-[#567C8D]/20 text-4xl font-mono hidden lg:block">{`</>`}</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2F4156]">
            My <span className="text-[#567C8D]">Resume</span>
          </h2>
          <p className="text-xl text-[#2F4156] max-w-2xl mx-auto mb-8">
            Professional journey and achievements
          </p>
          
          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="https://drive.google.com/drive/folders/1u8ctDHz621bZrvZr02lJWsJY0HLxRoHh"
              className="group relative overflow-hidden bg-gradient-to-r from-[#567C8D] to-[#2F4156] hover:from-[#2F4156] hover:to-[#567C8D] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#567C8D]/30"
              icon={<DownloadIcon size={16} className="group-hover:translate-y-1 transition-transform" />}
            >
              Download CV (PDF)
            </Button>
            <Button 
              variant="secondary"
              href="https://drive.google.com/drive/folders/1u8ctDHz621bZrvZr02lJWsJY0HLxRoHh"
              className="group border-[#567C8D] text-[#567C8D] hover:bg-[#567C8D]/10"
              icon={<ExternalLinkIcon size={16} className="group-hover:translate-x-1 transition-transform" />}
            >
              View Online
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Education & Experience */}
          <div 
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            {/* Education */}
            <div className="bg-white/50 border border-[#567C8D]/20 rounded-lg p-6 hover:border-[#567C8D]/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#2F4156]">
                <GraduationCapIcon size={28} className="text-[#567C8D] mr-3" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-[#567C8D]/30 pl-6 relative mb-6 last:mb-0">
                  <div className="absolute -left-3 top-2 w-6 h-6 bg-[#567C8D] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-medium text-[#567C8D]">{edu.degree}</h4>
                  <p className="text-[#2F4156] font-medium">{edu.institution}</p>
                  <p className="text-[#2F4156]/70 text-sm">{edu.period} • {edu.status}</p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="bg-white/50 border border-[#567C8D]/20 rounded-lg p-6 hover:border-[#567C8D]/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#2F4156]">
                <BriefcaseIcon size={28} className="text-[#567C8D] mr-3" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[#567C8D]/30 pl-6 relative">
                    <div className="absolute -left-3 top-2 w-6 h-6 bg-[#567C8D] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h4 className="text-lg font-medium text-[#567C8D]">{exp.position}</h4>
                    <p className="text-[#2F4156] font-medium">{exp.company}</p>
                    <p className="text-[#2F4156]/70 text-sm mb-2">{exp.period}</p>
                    <p className="text-[#2F4156] text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Certifications */}
          <div 
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            {/* Key Skills */}
            <div className="bg-white/50 border border-[#567C8D]/20 rounded-lg p-6 hover:border-[#567C8D]/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#2F4156]">
                <FileTextIcon size={28} className="text-[#567C8D] mr-3" />
                Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Figma', 'Kotlin', 'Java', 'React', 'JavaScript', 'HTML/CSS', 'Android Studio', 'Canva', 'Git & GitHub', 'Wireframing', 'UI/UX Design', 'Team Leadership'].map((skill, index) => (
                  <div 
                    key={skill} 
                    className="flex items-center p-2 bg-[#C8D9E6]/30 rounded hover:bg-[#567C8D]/20 transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="w-2 h-2 bg-[#567C8D] rounded-full mr-3"></div>
                    <span className="text-[#2F4156] text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/50 border border-[#567C8D]/20 rounded-lg p-6 hover:border-[#567C8D]/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#2F4156]">
                <AwardIcon size={28} className="text-[#567C8D] mr-3" />
                Expertise & Learning
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start p-3 bg-[#C8D9E6]/20 rounded-lg hover:bg-[#C8D9E6]/40 transition-colors duration-300">
                    <div className="mr-3 mt-1">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#2F4156]">{cert.name}</h4>
                      <p className="text-[#2F4156]/70 text-sm">{cert.issuer}</p>
                      <p className="text-[#567C8D] text-xs">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/50 border border-[#567C8D]/20 rounded-lg p-6 hover:border-[#567C8D]/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-[#567C8D]">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p className="text-[#2F4156]">📧 shemaiahdavid2004@gmail.com</p>
                <p className="text-[#2F4156]">📱 +94 74 223 2713</p>
                <p className="text-[#2F4156]">📍 Dehiwala, Sri Lanka</p>
                <p className="text-[#2F4156]">🔗 <a href="https://linkedin.com/in/shemaiahdavid" className="text-[#567C8D] hover:underline">LinkedIn Profile</a></p>
                <p className="text-[#2F4156]">💻 <a href="https://github.com/Shemaiah2004" className="text-[#567C8D] hover:underline">GitHub Profile</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-white/60 to-[#C8D9E6]/40 rounded-xl border border-[#567C8D]/30">
          <h3 className="text-2xl font-bold mb-4 text-[#2F4156]">Ready to Collaborate?</h3>
          <p className="text-[#2F4156] mb-6">Let's discuss how I can contribute to your next project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#contact" className="group bg-[#567C8D] text-white hover:bg-[#2F4156]">
              Get In Touch
            </Button>
            <Button 
              variant="secondary"
              href="https://drive.google.com/drive/folders/1u8ctDHz621bZrvZr02lJWsJY0HLxRoHh"
              icon={<DownloadIcon size={16} />}
              className="border-[#567C8D] text-[#567C8D] hover:bg-[#567C8D]/10"
            >
              Download Full CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
