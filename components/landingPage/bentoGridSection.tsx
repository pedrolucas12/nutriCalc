"use client";

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
import DietNotificationList from "./DietNotificationList";

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
      span: 7, // 7 of 12 columns
      content: (
        <div className="absolute bottom-0 left-0 w-full h-3/4 opacity-10 overflow-hidden rounded-b-lg">
          <svg
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polyline
              points="0,50 10,40 30,45 50,20 70,30 90,10 100,25"
              fill="none"
              stroke="#bdeada"
              strokeWidth="3"
            />
          </svg>
        </div>
      ),
      footer: (
        <>
          <div>
            <p className="text-secondary-400 dark:text-secondary-600 font-bold text-sm">
              {" "}
              {/* Adjusted colors */}
              Resultados Visíveis
            </p>
            <p className="text-secondary-600 dark:text-secondary-900 text-xs">
              {" "}
              {/* Adjusted colors */}O plano ideal para você.
            </p>
          </div>
          <Button
            className="text-tiny"
            color="secondary"
            radius="full"
            variant="ghost"
          >
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
      span: 5, // 5 of 12 columns
      content: (
        <div className="absolute bottom-0 left-0 w-full h-3/4 opacity-10 overflow-hidden rounded-b-lg">
          <svg
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polyline
              points="0,25 10,10 30,30 50,5 70,45 90,20 100,50"
              fill="none"
              stroke="#bdeada"
              strokeWidth="3"
            />
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
      span: 4, // 4 de 12 columns
      content: (
        // Usa o novo componente DietNotificationList
        // Passa classes para ajustar a aparência dentro do card
        <DietNotificationList className="absolute inset-0 w-full h-full scale-90 md:scale-100 opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
      ),
    },
    {
      title: "Teste Gratuito de TMB e IMC",
      description:
        "Descubra suas métricas corporais e receba insights valiosos sobre sua saúde.",
      link: "#teste-gratuito",
      span: 4, // 4 of 12 columns
      content: (
        <div className="absolute bottom-2 right-2 flex gap-1 opacity-40 z-0">
          <span className="text-xs p-1 bg-primary-600 text-secondary-100 rounded">
            IMC
          </span>
          <span className="text-xs p-1 bg-primary-600 text-secondary-100 rounded">
            TMB
          </span>
        </div>
      ),
    },
    {
      title: "",
      description: "",
      link: "#alcance-objetivos",
      span: 4,
      content: (
        <div className="flex group">
          <div className="gap-8 flex h-full w-full flex-col items-center justify-center overflow-hidden absolute">
            <Magnetic
              actionArea="global"
              intensity={0.2}
              range={200}
              springOptions={springOptions}
            >
              <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter group-hover:scale-105 transition-all duration-350 ease-in-out pb-4">
                Alcance o{" "}
                <span className="text-secondary-200">
                  corpo dos seus sonhos
                </span>
                .
              </p>
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-md">
                Descubra como nossa IA pode transformar sua jornada de saúde e
                bem-estar.
              </p>
            </Magnetic>
          </div>
          <Ripple />
        </div>
      ),
    },
  ];

  return (
    <section className="container mx-auto px-6">
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
            {/* Animação de Fundo do Hover */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-secondary-200 dark:bg-secondary-800/[0.8] block rounded-3xl" // Adjusted hover background colors
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

            {/* Card do HeroUI */}
            {/* Adjusted card background and text colors */}
            <Card className="relative z-10 w-full h-full overflow-hidden bg-primary-500 text-secondary-100 transition-transform duration-300 ease-in-out group-hover:scale-[1.02]">
              {/* Renderiza o conteúdo de fundo */}
              {project.content && (
                <div className="absolute inset-0 z-0">{project.content}</div>
              )}
              {/* Cabeçalho com Título e Descrição */}
              <CardHeader className="absolute z-10 top-1 flex-col !items-start p-4">
                <h4
                  className={`${fontTitle.className} text-secondary-100 font-medium text-lg md:text-xl mb-1`} // Adjusted size and color
                >
                  {project.title}
                </h4>
                {/* Renderiza descrição apenas se não for o card "Alcance Seus Objetivos" */}
                {project.title !== "Alcance Seus Objetivos" && (
                  <p
                    className={`${fontSubtitle.className} text-sm text-secondary-200/90`} // Adjusted color/opacity
                  >
                    {project.description}
                  </p>
                )}
              </CardHeader>
              {/* Renderiza o Footer se definido */}
              {project.footer && (
                <CardFooter className="absolute bg-white/30 dark:bg-black/40 bottom-0 border-t border-secondary-300 dark:border-secondary-700 z-10 justify-between w-full p-4 rounded-b-lg">
                  {" "}
                  {/* Adjusted footer style */}
                  {project.footer}
                </CardFooter>
              )}
            </Card>
          </NextLink>
        ))}
      </div>
    </section>
  );
}
