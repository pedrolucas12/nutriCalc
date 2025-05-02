"use client";

import { AnimatePresence, motion } from "framer-motion"; // Corrigido import
import Link from "next/link";
import { useState } from "react";

import { Pointer } from "../magicui/pointer";

import { cn } from "@/lib/utils";

// Atualiza a tipagem para incluir 'span' opcional
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    span?: number;
    content?: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          key={item?.link}
          className={cn(
            "relative group block p-2 h-full w-full",
            // Aplica col-span-2 ao primeiro item (idx === 0) em telas md+
            idx === 0 ? "md:col-span-2" : ""
          )}
          href={item?.link}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                initial={{ opacity: 0 }}
                layoutId="hoverBackground"
              />
            )}
          </AnimatePresence>

          <Card content={item.content}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>

          {/* Condicionalmente renderiza o Pointer para o primeiro card */}
          {idx === 0 && (
            <Pointer>
              {/* SVG de Estrela */}
              <svg
                className="fill-yellow-500"
                height="24"
                viewBox="0 0 24 24" // ViewBox padrão para ícones 24x24
                xmlns="http://www.w3.org/2000/svg"
                // Cor da estrela - use uma cor da sua paleta que contraste bem
                // com o fundo do card e o fundo do hover
                width="24" // Tamanho do ícone
              >
                {/* Path de uma estrela de 5 pontas */}
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </Pointer>
          )}
        </Link>
      ))}
    </div>
  );
};

// --- Componentes Card, CardTitle, CardDescription permanecem os mesmos ---

export const Card = ({
  className,
  children, // Título e Descrição virão aqui
  content, // Nova prop para o conteúdo visual
}: {
  className?: string;
  children: React.ReactNode;
  content?: React.ReactNode; // Tornando opcional
}) => {
  return (
    <div
      className={cn(
        // Estilos base do card, importante ter 'relative'
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-moss_green border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {/* Renderiza o conteúdo visual/gráfico como fundo */}
      {content && (
        <div className="absolute inset-0 z-30">
          {" "}
          {/* z-index menor que o texto */}
          {content}
        </div>
      )}

      {/* Renderiza o conteúdo de texto (título/descrição) por cima */}
      <div className="relative z-50">
        {" "}
        {/* z-index maior */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
