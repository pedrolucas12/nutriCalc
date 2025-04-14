// Crie um novo arquivo, ex: components/magicui/ai-background.tsx

"use client";

import { useEffect, useState } from 'react';

// Componente para os nós da rede neural
const NeuralNode = ({ index }: { index: number }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    // Gera estilos aleatórios APENAS no cliente
    setStyle({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `pulse ${1 + Math.random() * 2}s infinite alternate ${Math.random() * 2}s`,
    });
  }, []); // Array de dependência vazio garante que rode só uma vez no mount

  return (
    <div
      key={index}
      className="absolute w-2 h-2 rounded-full bg-purple-500/40"
      style={style}
    ></div>
  );
};

// Componente para as conexões
const NeuralConnection = ({ index }: { index: number }) => {
    const [coords, setCoords] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

    useEffect(() => {
        setCoords({
            x1: Math.random() * 100,
            y1: Math.random() * 100,
            x2: Math.random() * 100,
            y2: Math.random() * 100,
        });
    }, []);

    return <line key={index} {...coords} stroke="url(#purple-gradient)" strokeWidth="0.5" />;
};


// Componente principal do fundo
export const AiBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Define como cliente após a montagem
  }, []);

  // Não renderiza nada no servidor
  if (!isClient) {
    return null;
  }

  // Renderiza o fundo apenas no cliente
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural network nodes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <NeuralNode key={`node-${i}`} index={i} />
      ))}

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        {Array.from({ length: 10 }).map((_, i) => (
           <NeuralConnection key={`line-${i}`} index={i} />
        ))}
        {/* Definição do gradiente precisa estar dentro do SVG */}
        <defs>
          <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central brain visualization */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute inset-2 border-2 border-dashed border-purple-400/30 rounded-full animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="absolute inset-4 border border-purple-500/20 rounded-full"></div>
      </div>
    </div>
  );
};
