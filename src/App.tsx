// Archivo: App.tsx

import { useState } from 'react';
// ELIMINAR ESTA LÍNEA: import MatrixRain from './components/MatrixRainHome';
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
    // Asegúrate de que este div mantenga el fondo negro si quieres que las otras secciones sean negras
    // Si tus otras secciones son blancas, entonces este bg-black es irrelevante para ellas
    // pero funciona bien para Home si lo haces blanco/transparente
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      
      {/* ELIMINAR ESTA LÍNEA: <MatrixRain /> */} 

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

      {/* FOOTER: Vuelve al estilo original si las secciones son blancas, o deja el oscuro si lo prefieres */}
      {/* Si las demás secciones son blancas, este footer blanco es coherente */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Ismael Najera
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