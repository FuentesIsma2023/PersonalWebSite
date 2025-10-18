// Archivo: ./components/MatrixRainHome.tsx

import React, { useRef, useEffect } from 'react';

interface MatrixRainProps {
  color?: string; // Prop para el color
  opacity?: number; // Prop para la opacidad
}

const MatrixRainHome: React.FC<MatrixRainProps> = ({ color = '#808080', opacity = 0.15 }) => { // Color gris por defecto
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const font_size = 14;
    const columns = Math.floor(width / font_size);
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Inicia aleatoriamente fuera de la pantalla
    }

    const binary = '01'; // Queremos solo unos y ceros

    const draw = () => {
      // Fondo muy transparente para el efecto de rastro
      ctx.fillStyle = `rgba(0, 0, 0, 0.04)`; 
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = color; // Usar el color de la prop
      ctx.font = `${font_size}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        const x = i * font_size;
        const y = drops[i] * font_size;

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, opacity]); // Dependencias del efecto, si cambian, se reinicia

  return (
    // Posicionamiento fijo para que cubra toda la sección, con la opacidad de la prop
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" 
      style={{ opacity: opacity }} // Aplicamos la opacidad aquí
    />
  );
};

export default MatrixRainHome;