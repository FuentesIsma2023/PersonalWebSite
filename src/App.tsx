import { useState } from 'react';
import MatrixRain from './components/MatrixRain';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Learning from './components/Learning';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <MatrixRain />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="relative z-10">
        <div id="home">
          <Home onNavigate={handleNavigate} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="learning">
          <Learning />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="relative z-10 border-t border-green-500/30 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2025 Ismael. Built with React + TypeScript + Tailwind CSS
          </p>
          <p className="text-green-400 font-mono text-xs mt-2">
            &gt; Ready to solve complex problems and grow in cloud technologies
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
