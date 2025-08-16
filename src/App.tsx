import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import ParticleBackground from './components/ui/ParticleBackground';
export function App() {
  const [darkMode, setDarkMode] = useState(false);

  return <div className={`min-h-screen w-full transition-colors duration-300 ${
    darkMode 
      ? 'bg-gray-900 text-white' 
      : 'bg-white text-[#2F4156]'
  }`}>
      <ParticleBackground />
      <ScrollProgress />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
  
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Resume darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>;
}