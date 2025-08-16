import React from 'react';
import { GithubIcon, LinkedinIcon, FileTextIcon, ArrowUpIcon } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className={`py-12 border-t transition-colors duration-300 ${
    darkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#2F4156] border-[#567C8D]/20'
  }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
              SHEMAIAH<span className="text-[#C8D9E6]">.</span>
            </a>
            <p className="text-[#C8D9E6] mt-2">
              UI/UX Designer & Mobile App Developer
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Shemaiah2004" className="text-[#C8D9E6] hover:text-white transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shemaiahdavid" className="text-[#C8D9E6] hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:shemaiahdavid2004@gmail.com" className="text-[#C8D9E6] hover:text-white transition-colors" aria-label="Email">
              <FileTextIcon size={20} />
            </a>
          </div>
        </div>
        <div className={`mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
          darkMode ? 'border-gray-700' : 'border-[#567C8D]/30'
        }`}>
          <p className="text-[#C8D9E6]/70 text-sm">
            © {new Date().getFullYear()} Shemaiah David. All Rights Reserved.
          </p>
          <p className="text-[#C8D9E6]/70 text-sm mt-2 md:mt-0">
            Crafted with ❤️ using React and Tailwind CSS
          </p>
          <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center gap-2 text-[#C8D9E6] hover:text-white transition-colors" aria-label="Scroll to top">
            <span className="text-sm">Back to top</span>
            <ArrowUpIcon size={16} />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;