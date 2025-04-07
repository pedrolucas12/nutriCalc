"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"; // Corrigido import
import Link from "next/link";
import { useState } from "react";

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
    content?: React.ReactNode; // Adicionada a propriedade content
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className={cn(
            "relative group block p-2 h-full w-full",
            (item.span === 2 || idx === 0) ? "md:col-span-2" : ""
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {/* Passa item.content para a prop 'content' do Card */}
          {/* Passa Title e Description como children */}
          <Card content={item.content}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
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
        <div className="absolute inset-0 z-30"> {/* z-index menor que o texto */}
          {content}
        </div>
      )}

      {/* Renderiza o conteúdo de texto (título/descrição) por cima */}
      <div className="relative z-50"> {/* z-index maior */}
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
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
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
