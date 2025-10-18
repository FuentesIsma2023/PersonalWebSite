// Archivo: ./components/Home.tsx

import { Terminal, ChevronDown } from 'lucide-react';
import MatrixRainHome from "./MatrixRainHome"; // Importación correcta

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    // 1. FONDO BLANCO RESTABLECIDO
    <section className="min-h-screen flex items-center justify-center relative bg-white"> 
      
      {/* 2. EFECTO MATRIX: Color Gris y Opacidad MUY BAJA para ser sutil (0.05 es un buen punto de partida) */}
      <MatrixRainHome color="#208080" opacity={0.50} /> 

      {/* 3. CONTENIDO: Ya no necesitamos el fondo semi-transparente, solo z-index */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto"> 
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl">
            {/* TEXTO OSCURO RESTABLECIDO */}
            <Terminal className="w-20 h-20 text-black" /> 
          </div>
        </div>

        {/* TEXTOS OSCUROS RESTABLECIDOS */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm Ismael
        </h1>

        <p className="text-xl md:text-2xl text-blue-1200 mb-4 leading-relaxed">
          I'm a Technical Support Analyst passionate about Cloud Technologies, Systems Administration, Scripting, and Networking.
        </p>

        <p className="text-lg text-gray-800 mb-12 max-w-2xl mx-auto">
          My focus is on solving problems efficiently and learning every day.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <button
            onClick={() => onNavigate('About')}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
          <button
            onClick={() => onNavigate('Contact')}
            className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
          >
            Get in Touch
          </button>
        </div>

        <div className="animate-bounce">
          {/* TEXTO OSCURO RESTABLECIDO */}
          <ChevronDown className="w-8 h-8 text-gray-900 mx-auto" /> 
        </div>
      </div>
    </section>
  );
}