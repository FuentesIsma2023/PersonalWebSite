import { useState } from 'react';
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
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
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

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Ismael. Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Solving problems and growing in cloud technologies
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
