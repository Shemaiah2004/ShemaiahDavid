import React, { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
  level: number; // 1-10
}

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
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
  const skills: Skill[] = [
  // Development
  {
    name: 'Java',
    icon: '☕',
    category: 'Development',
    description: 'Object-oriented programming and desktop applications',
    level: 8
  }, {
    name: 'JavaScript',
    icon: '�',
    category: 'Development',
    description: 'Modern web development and DOM manipulation',
    level: 7
  }, {
    name: 'Kotlin',
    icon: '🔷',
    category: 'Development',
    description: 'Android mobile app development',
    level: 8
  }, {
    name: 'React',
    icon: '⚛️',
    category: 'Development',
    description: 'Building interactive user interfaces',
    level: 7
  }, {
    name: 'HTML5/CSS3',
    icon: '🌐',
    category: 'Development',
    description: 'Semantic markup and responsive styling',
    level: 9
  }, {
    name: 'Vite',
    icon: '⚡',
    category: 'Development',
    description: 'Fast build tool for modern web projects',
    level: 6
  },
  // Design
  {
    name: 'Figma',
    icon: '�',
    category: 'Design',
    description: 'UI design, prototyping, and design systems',
    level: 9
  }, {
    name: 'Canva',
    icon: '�️',
    category: 'Design',
    description: 'Visual design and marketing materials',
    level: 8
  }, {
    name: 'Wireframing',
    icon: '�',
    category: 'Design',
    description: 'Low and high fidelity wireframes',
    level: 8
  },
  // Tools
  {
    name: 'Android Studio',
    icon: '🤖',
    category: 'Tools',
    description: 'Android app development environment',
    level: 8
  }, {
    name: 'Git & GitHub',
    icon: '�',
    category: 'Tools',
    description: 'Version control and collaboration',
    level: 8
  }, {
    name: 'VS Code',
    icon: '📝',
    category: 'Tools',
    description: 'Code editor for web development',
    level: 9
  }];
  const categories = ['All', 'Development', 'Design', 'Tools'];
  const filteredSkills = activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory);
  const renderSkillCard = (skill: Skill, index: number) => {
    const delay = index * 100;
    const levelPercentage = `${skill.level * 10}%`;
    return <div key={skill.name} className="relative group" onMouseEnter={() => setHoveredSkill(skill.name)} onMouseLeave={() => setHoveredSkill(null)} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`
    }}>
        <div className="bg-[#C8D9E6]/50 rounded-lg border border-[#567C8D]/20 hover:border-[#567C8D]/50 transition-all duration-300 overflow-hidden">
          <div className="flex items-center p-4">
            <span className="text-2xl mr-3">{skill.icon}</span>
            <span className="font-medium text-[#2F4156]">{skill.name}</span>
          </div>
          {/* Skill level visualization */}
          <div className="px-4 pb-4">
            <div className="flex justify-between text-xs text-[#2F4156]/70 mb-1">
              <span>Proficiency</span>
              <span>{skill.level}/10</span>
            </div>
            <div className="h-1.5 w-full bg-[#C8D9E6] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#567C8D] to-[#2F4156] rounded-full" style={{
              width: isVisible ? levelPercentage : '0%',
              transition: `width 1s ease-out ${delay + 200}ms`
            }}></div>
            </div>
          </div>
        </div>
        {/* Tooltip */}
        {hoveredSkill === skill.name && <div className="absolute bottom-full left-0 mb-2 w-full p-3 bg-[#2F4156] rounded-md shadow-lg text-sm z-10">
            <p className="text-white">{skill.description}</p>
            <div className="absolute bottom-[-6px] left-4 w-3 h-3 bg-[#2F4156] transform rotate-45"></div>
          </div>}
      </div>;
  };
  return <section id="skills" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(86,124,141,0.05),transparent_70%)]"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#567C8D]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#567C8D]/5 rounded-full blur-3xl"></div>
      {/* Floating code elements - decorative */}
      <div className="absolute top-20 left-10 text-[#567C8D]/20 text-4xl font-mono hidden lg:block">{`{...}`}</div>
      <div className="absolute bottom-20 right-10 text-[#567C8D]/20 text-4xl font-mono hidden lg:block">{`</>`}</div>
      <div className="absolute top-1/2 left-1/4 text-[#567C8D]/10 text-6xl font-mono hidden lg:block rotate-12">{`()`}</div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2F4156]">
            Tech <span className="text-[#567C8D]">Stack</span>
          </h2>
          <p className="text-xl text-[#2F4156] max-w-2xl mx-auto">
            My toolkit for creating digital experiences
          </p>
        </div>
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-[#567C8D] text-white shadow-lg shadow-[#567C8D]/30' : 'bg-[#C8D9E6]/30 text-[#2F4156] hover:bg-[#C8D9E6]/50 border border-[#567C8D]/20'}`}>
              {category}
            </button>)}
        </div>
        {/* Hexagon pattern background - decorative */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {Array.from({
          length: 20
        }).map((_, i) => <div key={i} className="absolute w-16 h-16 border border-teal" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: 'rotate(45deg)',
          opacity: Math.random() * 0.5
        }}></div>)}
        </div>
        {/* Skills visualization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => renderSkillCard(skill, index))}
        </div>
        {/* Experience summary */}
        <div className="mt-16 bg-gray-900/30 border border-gray-800 rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Experience Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.filter(cat => cat !== 'All').map(category => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
            return <div key={category} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        {/* Background circle */}
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2A2A2A" strokeWidth="2" />
                        {/* Progress circle */}
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#567C8D" strokeWidth="2" strokeDasharray={`${avgLevel * 10}, 100`} className="transition-all duration-1000" style={{
                    strokeDasharray: isVisible ? `${avgLevel * 10}, 100` : '0, 100'
                  }} />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-semibold">
                          {Math.round(avgLevel * 10)}%
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-teal">{category}</h4>
                    <p className="text-sm text-gray-400">
                      {categorySkills.length} technologies
                    </p>
                  </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;