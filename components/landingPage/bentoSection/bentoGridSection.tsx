"use client";

import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { useState } from "react";

import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Magnetic } from "../../motion-primitives/magnetic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { cn } from "@/lib/utils";

import {
  ArrowRight,
  BarChart3,
  Brain,
  Goal,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import fingerprint from "@/public/animations/fingerprint.json";
import { CardNutricionIA } from "../../ui/animatedBeamDemo";
import ClientOnlyApexChart from "../../ui/client-pie-chart";
import { RipplePulse } from "../../ui/ripplePulse";
import DietNotificationList from "./diet-notification-list";

const springOptions = { bounce: 0.1 };

export default function BentoGridSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  const exampleIMC = 24.5;
  const exampleWeight = 75;
  const exampleHeight = 175;

  const cards = [
    // --- Row 1 (2 Cards) ---
    {
      Icon: Sparkles,
      name: "Dieta 100% Personalizada",
      description: "Plano alimentar único, criado sob medida para seu corpo, rotina e preferências.",
      href: "#dieta-personalizada",
      link: "#dieta-personalizada",
      cta: "Ver Detalhes",
      className: "md:col-span-7 row-span-2", // Span 7 para MD+, ocupa 2 linhas
      color: "from-primary-400/20 to-primary-500/20", // Colores para el hover
      content: (
        <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-xl"> 
          <div className="w-32 h-32 md:w-56 md:h-56 flex items-center justify-center z-10 mb-4">
            <Lottie animationData={fingerprint} loop={true}
              className="w-full h-full pointer-events-none"
              style={{ maxWidth: "100%", maxHeight: "100%" }} // Ajuste de tamanho
            />
          </div>
          <div className="flex flex-col items-center justify-center z-20">
            <h3
              className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-secondary-200 text-center`} 
            >
              Sua dieta, sua identidade.
            </h3>
            <p
              className={`${fontSubtitle.className} text-md 
              text-secondary-600 dark:text-secondary-400 
              text-center mt-2`} 
            >
              A IA analisa seu perfil, preferências e rotina para criar um plano
              alimentar exclusivo para você.
            </p>
          </div>
        </div>
      ),
      footer: ( /* ... Footer padrão ... */
         <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-gray-800/30">
          <p className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">
            Resultados visíveis em semanas
          </p>
          <Button
            color="primary" // Use color prop
            radius="full"
            size="sm"
            className="group bg-emerald-500 hover:bg-emerald-600 text-white" // Added text-white
          >
            Começar{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      ),
    },
    {
      Icon: Brain,
      name: "Nutrição Otimizada por IA",
      description: "Nossa IA analisa seus dados para otimizar cada refeição.", // Descrição mais curta
      link: "#dieta-whatsapp",
      href: "#ia-dieta",
      cta: "Entenda a Tecnologia",
      className: "md:col-span-5 row-span-2", // Span 5 para MD+, ocupa 2 linhas
      color: "from-purple-400/20 to-fuchsia-400/20", // Cor para o hover
      content: <CardNutricionIA />, // Componente externo
    },
    // --- Row 2 (3 Cards) ---
    {
      Icon: MessageCircle,
      name: "Plano no WhatsApp",
      description: "Receba sua dieta e lembretes direto no celular. Prático e fácil.", // Descrição mais curta
      link: "#dieta-whatsapp",
      cta: "Conectar",
      className: "md:col-span-4 text-white dark:text-honeydew row-span-2", // Span 4, ocupa 2 linhas
      color: "from-green-400/20 to-lime-400/20",
      titlePosition: "bottom", // Posição do título/descrição
      background: ( // Usado background para consistência com a referência
         <div className="relative h-full w-full overflow-hidden rounded-xl">
          <DietNotificationList className="absolute inset-0 scale-95 md:scale-100 opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10 rounded-xl pointer-events-none" />
        </div>
      ),
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <DietNotificationList className="absolute inset-0 scale-95 md:scale-100 opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10 rounded-xl pointer-events-none" />
        </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-xl bg-white/40 dark:bg-black/30 rounded-lg p-4 border border-white/20 dark:border-green-900/30 z-30 shadow-md shadow-green-500/20 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 hover:bg-green-500/10  hover:text-secondary-200 dark:hover:bg-green-900/20">
          <p className="text-green-700 dark:text-green-300 text-md font-medium">
            Receba sua dieta no WhatsApp!
          </p>
          <Button
            color="primary" // Use color prop
            variant="solid"
            radius="full"
            size="sm"
            className="group bg-green-500 hover:bg-green-600 text-white" // Added text-white
          >
            Conectar{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      ),
    },
    {
      Icon: BarChart3,
      name: "Métricas Grátis",
      href : "#teste-gratuito",
      description: "Calcule seu IMC e TMB agora e entenda seu corpo.",
      link: "#teste-gratuito",
      className: "md:col-span-4 row-span-2", // Span 4, ocupa 2 linhas
      color: "from-amber-400/20 to-yellow-400/20",
      icon: <BarChart3 className="h-6 w-6 text-amber-500" />,
      background: ( // Usado background para consistência com a referência
         <div className="absolute inset-0 flex items-center justify-center p-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <ClientOnlyApexChart imcValue={exampleIMC} weight={exampleWeight} height={exampleHeight} />
        </div>
      ),
      content: (
        <div className="absolute inset-0 flex items-center justify-center p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <ClientOnlyApexChart
            imcValue={exampleIMC}
            weight={exampleWeight}
            height={exampleHeight}
          />
        </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-secondary-800/30">
          <div>
            <p className={`${fontTitle.className} text-secondary-800 dark:text-secondary-200 font-semibold text-sm`}>
              Entenda sua Saúde
            </p>
            <p className={`${fontSubtitle.className} text-secondary-600 dark:text-secondary-400 text-xs`}>
              Calcule e visualize seu IMC.
            </p>
          </div>
          <Button
            color="default"
            radius="full"
            size="sm"
            className="group bg-primary-500 hover:bg-primary-600 text-white text-xs px-3 py-1.5"
          >
            Calcular
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      ),
    },
    {
      title: "Alcance Seus Objetivos",
      description:
        "Transforme seu corpo com um plano que evolui.",
      link: "#alcance-objetivos",
      className: "md:col-span-4 text-white dark:text-honeydew row-span-2", // Span 4, ocupa 2 linhas
      color: "from-secondary-400/10 to-secondary-500/10",
      icon: <Goal className="h-6 w-6 text-secondary-400" />,
      content: (
        <div className="flex group h-full w-full absolute inset-0 z-0 overflow-hidden rounded-lg">
          <RipplePulse />
          <div className="gap-2 flex h-full w-full flex-col items-center justify-center absolute z-10 p-4 pointer-events-none">
            <Magnetic actionArea="global" intensity={0.2} range={200} springOptions={springOptions}>
              <p className="z-10 whitespace-pre-wrap text-center text-4xl md:text-5xl font-bold tracking-tighter text-primary-800 group-hover:scale-105 transition-all duration-350 ease-in-out pb-1 md:pb-2">
                Transforme seu <span className="text-secondary-200">corpo</span>
              </p>
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-xl text-primary-800">
                Deixe nossa IA criar o caminho ideal.
              </p>
              <Button
                size="lg"
                className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out
                text-center 
                "
              >
                Começar
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Magnetic>
          </div>
        </div>
      ),
    },
  ];

  // Animation variants for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section ref={sectionRef} className="w-full py-8">
      <motion.div
        className="grid grid-cols-12 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Primeira linha: 60% / 40% */}
        <motion.div
          className="col-span-12 md:col-span-7 h-[400px] relative"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card className="relative z-10 w-full h-full overflow-hidden bg-primary-500/80 dark:bg-primary-800/80 backdrop-blur-sm border border-primary-700/30 dark:border-primary-900/30 text-white shadow-lg rounded-2xl">
            {cards[0].content}
            
            <div className="absolute z-10 top-4 left-4 flex items-start">
              <div className="mr-3 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                {cards[0].icon}
              </div>
              <div className="pr-8">
                <h4 className={`${fontTitle.className} text-xl font-semibold`}>
                  {cards[0].title}
                </h4>
                <p className={`${fontSubtitle.className} max-w-full text-sm opacity-80`}>
                  {cards[0].description}
                </p>
              </div>
            </div>
          </Card>
          
          <NextLink href={cards[0].link} className="absolute inset-0 z-20">
            <span className="sr-only">Abrir {cards[0].title}</span>
          </NextLink>
          
          <AnimatePresence>
            {hoveredIndex === 0 && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full bg-gradient-to-br rounded-3xl z-0",
                  cards[0].color
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-5 h-[400px] relative"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card className="relative z-10 w-full h-full overflow-hidden bg-primary-500/80 dark:bg-primary-800/80 backdrop-blur-sm border border-primary-700/30 dark:border-primary-900/30 text-white shadow-lg rounded-2xl">
            {cards[1].content}
          </Card>
          
          <NextLink href={cards[1].link} className="absolute inset-0 z-20">
            <span className="sr-only">Abrir {cards[1].title || "IA Dieta"}</span>
          </NextLink>
          
          <AnimatePresence>
            {hoveredIndex === 1 && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full bg-gradient-to-br rounded-3xl z-0",
                  cards[1].color
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Segunda linha: 3 cards iguais */}
        {[2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="col-span-12 md:col-span-4 h-[400px] relative"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="relative z-10 w-full h-full overflow-hidden bg-primary-500/80 dark:bg-primary-800/80 backdrop-blur-sm border border-primary-700/30 dark:border-primary-900/30 text-white shadow-lg rounded-2xl">
              {cards[index].content}
              
              {cards[index].title && (
                <div className="absolute z-10 top-4 left-4 flex items-start">
                  {cards[index].icon && (
                    <div className="mr-3 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                      {cards[index].icon}
                    </div>
                  )}
                  <div>
                    <h4 className={`${fontTitle.className} text-xl font-semibold`}>
                      {cards[index].title}
                    </h4>
                    {cards[index].description && (
                      <p className={`${fontSubtitle.className} max-w-xs text-sm opacity-80`}>
                        {cards[index].description}
                      </p>
                    )}
                  </div>
                </div>
              )}
              
              {cards[index].footer && (
                <div className="absolute z-20 bottom-0 left-0 right-0 p-4">
                  {cards[index].footer}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
