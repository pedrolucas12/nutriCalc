"use client";

// --- React/Next.js Imports ---
import NextLink from "next/link";
import { useState } from "react";

// --- UI Library Imports ---
import { Button } from "@heroui/button"; // Assuming Button might be used in footer
import { Card, CardFooter, CardHeader } from "@heroui/card";

// --- Animation Imports ---
import { AnimatePresence, motion } from "framer-motion";
import { Ripple } from "../magicui/ripple"; // Adjust path if needed
import { Magnetic } from "../motion-primitives/magnetic"; // Adjust path if needed

// --- Configuration Imports ---
import { fontSubtitle, fontTitle } from "@/config/fonts"; // Your font config
import { cn } from "@/lib/utils"; // Your utility for class names

// --- Component Definition ---

// Define springOptions if needed by Magnetic
const springOptions = { bounce: 0.1 };

export default function BentoGridSection() {
  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Data for the cards
  const projects = [
    // --- Row 1 ---
    {
      title: "Dieta Personalizada",
      description:
        "Um plano alimentar único, criado sob medida para suas necessidades e objetivos.",
      link: "#dieta-personalizada",
      span: 7,
      content: (
        <div className="absolute bottom-0 left-0 w-full h-3/4 opacity-10 overflow-hidden rounded-b-lg">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <polyline points="0,50 10,40 30,45 50,20 70,30 90,10 100,25" fill="none" stroke="#bdeada" strokeWidth="3"/>
          </svg>
        </div>
      ),
      footer: (
        <>
          <div>
            <p className="text-black text-tiny">Resultados Visíveis</p>
            <p className="text-black text-tiny">Comece Já!</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Ver Mais
          </Button>
        </>
      ),
    },
    {
      title: "IA para sua Dieta",
      description:
        "Aproveite o poder da inteligência artificial para otimizar sua alimentação.",
      link: "#ia-dieta",
      span: 5,
      content: (
        <div className="absolute bottom-0 left-0 w-full h-3/4 opacity-10 overflow-hidden rounded-b-lg">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <polyline points="0,25 10,10 30,30 50,5 70,45 90,20 100,50" fill="none" stroke="#bdeada" strokeWidth="3"/>
          </svg>
        </div>
      ),
    },
    // --- Row 2 ---
    {
      title: "Dieta no WhatsApp",
      description:
        "Receba seu plano alimentar diretamente no seu WhatsApp para maior comodidade.",
      link: "#dieta-whatsapp",
      span: 4,
      content: (
        <div className="absolute top-4 right-4 w-16 h-32 bg-dim_gray rounded-xl border-2 border-dark_green-900 opacity-30 flex items-center justify-center z-0">
          <div className="w-12 h-24 bg-dark_green-800 rounded-md"></div>
        </div>
      ),
    },
    {
      title: "Teste Gratuito de TMB e IMC",
      description:
        "Descubra suas métricas corporais e receba insights valiosos sobre sua saúde.",
      link: "#teste-gratuito",
      span: 4,
      content: (
        <div className="absolute bottom-2 right-2 flex gap-1 opacity-40 z-0">
          <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">IMC</span>
          <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">TMB</span>
        </div>
      ),
    },
    {
      title: "Alcance Seus Objetivos",
      description: "NutriCalc cria o plano ideal para você transformar seu corpo.",
      link: "#alcance-objetivos",
      span: 4,
      content: (
        <div className="flex group h-full w-full absolute inset-0 z-0 overflow-hidden rounded-lg">
          <Ripple />
          <div className="gap-2 flex h-full w-full flex-col items-center justify-center absolute z-10 p-4">
            <Magnetic actionArea="global" intensity={0.2} range={200} springOptions={springOptions}>
              <p className="z-10 whitespace-pre-wrap text-center text-2xl md:text-3xl font-medium tracking-tighter text-white group-hover:scale-105 transition-all duration-350 ease-in-out pb-1 md:pb-2">
                Transforme seu <span className="text-honeydew">corpo</span>.
              </p>
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-xs md:text-sm text-honeydew">
                Deixe nossa IA criar o caminho ideal.
              </p>
            </Magnetic>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2
          className={`${fontTitle.className} text-3xl font-bold text-center mb-10 text-dark_green`}
        >
          O que o NutriCalc faz por você
        </h2>
        {/* Grid principal com 12 colunas */}
        <div className="gap-4 grid grid-cols-12 px-4 md:px-8">
          {projects.map((project, index) => (
            <NextLink
            href={project.link}
            key={index}
            className={cn(
              `relative group h-[300px] col-span-12 block p-2`,
              `md:col-span-${project.span || 4}` // Aplica span em telas md+
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl" // Estilos do fundo hover
                    layoutId="hoverBackground" // ID para animação suave entre cards
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

              {/* Card do HeroUI */}
              <Card className="relative z-10 w-full h-full overflow-hidden bg-primary-500 text-honeydew transition-transform duration-300 ease-in-out group-hover:scale-[1.02]">
                {/* Renderiza o conteúdo de fundo */}
                {project.content && (
                  <div className="absolute inset-0 z-0">{project.content}</div>
                )}
                {/* Cabeçalho com Título e Descrição */}
                <CardHeader className="absolute z-10 top-1 flex-col !items-start p-4">
                  <h4
                    className={`${fontTitle.className} text-honeydew font-medium text-large mb-1`}
                  >
                    {project.title}
                  </h4>
                  {/* Renderiza descrição apenas se não for o card "Alcance Seus Objetivos" */}
                  {project.title !== "Alcance Seus Objetivos" && (
                    <p
                      className={`${fontSubtitle.className} text-sm text-honeydew/80`}
                    >
                      {project.description}
                    </p>
                  )}
                </CardHeader>
                {/* Renderiza o Footer se definido */}
                {project.footer && (
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between w-full p-4">
                    {project.footer}
                </CardFooter>
                )}
              </Card>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
}
