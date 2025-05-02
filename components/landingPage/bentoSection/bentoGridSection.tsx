"use client";

import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { AnimatePresence, motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { ArrowRight, BarChart3, Brain, MessageCircle, Sparkles } from "lucide-react";

import { Magnetic } from "../../motion-primitives/magnetic";
import { CardNutricionIA } from "../../ui/animatedBeamDemo";
import ClientOnlyApexChart from "../../ui/client-pie-chart";
import { RipplePulse } from "../../ui/ripplePulse";

import DietNotificationList from "./diet-notification-list";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { cn } from "@/lib/utils";
import fingerprint from "@/public/animations/fingerprint.json";

const springOptions = { bounce: 0.1 };

export default function BentoGridSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  const exampleIMC = 24.5;
  const exampleWeight = 75;
  const exampleHeight = 175;

  type CardType = {
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name?: string;
    description?: string;
    href?: string;
    link?: string;
    cta?: string;
    className?: string;
    color?: string;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    title?: string;
  };

  const cards: CardType[] = [
    {
      Icon: Sparkles,
      name: "Dieta 100% Personalizada",
      description:
        "Plano alimentar único, criado sob medida para seu corpo, rotina e preferências.",
      href: "#dieta-personalizada",
      link: "#dieta-personalizada",
      cta: "Ver Detalhes",
      className: "col-span-12 md:col-span-7 h-[300px] sm:h-[350px] md:h-[400px]",
      color: "from-primary-400/20 to-primary-500/20",
      content: (
        <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-xl p-4">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 flex items-center justify-center z-10 mb-2 sm:mb-4">
            <Lottie
              animationData={fingerprint}
              className="w-full h-full pointer-events-none"
              loop={true}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center z-20 text-center">
            <h3
              className={`${fontTitle.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-200`}
            >
              Sua dieta, sua identidade.
            </h3>
            <p
              className={`${fontSubtitle.className} text-sm sm:text-md 
              text-secondary-600 dark:text-secondary-400 
              mt-2 px-4 max-w-lg`}
            >
              A IA analisa seu perfil, preferências e rotina para criar um plano alimentar exclusivo
              para você.
            </p>
          </div>
        </div>
      ),
      footer: (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-gray-800/30 gap-2 sm:gap-0">
          <p className="text-emerald-700 dark:text-emerald-300 text-sm font-medium text-center sm:text-left">
            Resultados visíveis em semanas
          </p>
          <Button
            className="group bg-emerald-500 hover:bg-emerald-600 text-white w-full sm:w-auto"
            color="primary"
            radius="full"
            size="sm"
          >
            Começar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      ),
    },
    {
      Icon: Brain,
      name: "Nutrição Otimizada por IA",
      description: "Nossa IA analisa seus dados para otimizar cada refeição.",
      link: "#dieta-whatsapp",
      href: "#ia-dieta",
      cta: "Entenda a Tecnologia",
      className: "col-span-12 md:col-span-5 h-[300px] sm:h-[350px] md:h-[400px]",
      color: "from-purple-400/20 to-fuchsia-400/20",
      content: <CardNutricionIA />,
    },
    {
      Icon: MessageCircle,
      name: "Plano no WhatsApp",
      description: "Receba sua dieta e lembretes direto no celular. Prático e fácil.",
      link: "#dieta-whatsapp",
      cta: "Conectar",
      className: "col-span-12 sm:col-span-6 md:col-span-4 h-[300px] sm:h-[350px] md:h-[400px]",
      color: "from-green-400/20 to-lime-400/20",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <DietNotificationList className="absolute inset-0 scale-90 sm:scale-95 md:scale-100 opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10 rounded-xl pointer-events-none" />
        </div>
      ),
      footer: (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full backdrop-blur-xl bg-white/40 dark:bg-black/30 rounded-lg p-3 sm:p-4 border border-white/20 dark:border-green-900/30 z-30 shadow-md shadow-green-500/20 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 hover:bg-green-500/10 hover:text-secondary-200 dark:hover:bg-green-900/20 gap-2 sm:gap-0">
          <p className="text-green-700 dark:text-green-300 text-sm sm:text-md font-medium text-center sm:text-left">
            Receba sua dieta no WhatsApp!
          </p>
          <Button
            className="group bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
            color="primary"
            radius="full"
            size="sm"
          >
            Conectar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      ),
    },
    {
      Icon: BarChart3,
      name: "Métricas Grátis",
      href: "#teste-gratuito",
      description: "Calcule seu IMC e TMB agora e entenda seu corpo.",
      link: "#teste-gratuito",
      className: "col-span-12 sm:col-span-6 md:col-span-4 h-[300px] sm:h-[350px] md:h-[400px]",
      color: "from-amber-400/20 to-yellow-400/20",
      content: (
        <div className="absolute inset-0 flex items-center justify-center p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <ClientOnlyApexChart
            height={exampleHeight}
            imcValue={exampleIMC}
            weight={exampleWeight}
          />
        </div>
      ),
      footer: (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-secondary-800/30 gap-2 sm:gap-0">
          <div className="text-center sm:text-left">
            <p
              className={`${fontTitle.className} text-secondary-800 dark:text-secondary-200 font-semibold text-sm`}
            >
              Entenda sua Saúde
            </p>
            <p
              className={`${fontSubtitle.className} text-secondary-600 dark:text-secondary-400 text-xs`}
            >
              Calcule e visualize seu IMC.
            </p>
          </div>
          <Button
            className="group bg-primary-500 hover:bg-primary-600 text-white text-xs px-3 py-1.5 w-full sm:w-auto"
            color="default"
            radius="full"
            size="sm"
          >
            Calcular
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      ),
    },
    {
      title: "Alcance Seus Objetivos",
      description: "Transforme seu corpo com um plano que evolui.",
      link: "#alcance-objetivos",
      className: "col-span-12 sm:col-span-12 md:col-span-4 h-[300px] sm:h-[350px] md:h-[400px]",
      color: "from-secondary-400/10 to-secondary-500/10",
      content: (
        <div className="flex group h-full w-full absolute inset-0 z-0 overflow-hidden rounded-lg">
          <RipplePulse />
          <div className="gap-2 flex h-full w-full flex-col items-center justify-center absolute z-10 p-4 pointer-events-none">
            <Magnetic actionArea="global" intensity={0.2} range={200} springOptions={springOptions}>
              <p className="z-10 whitespace-pre-wrap text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-primary-800 group-hover:scale-105 transition-all duration-350 ease-in-out pb-1 md:pb-2">
                Transforme seu <span className="text-secondary-200">corpo</span>
              </p>
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-lg sm:text-xl text-primary-800">
                Deixe nossa IA criar o caminho ideal.
              </p>
              <Button
                className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out
                text-center mt-4 w-full sm:w-auto"
                size="lg"
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
    <section ref={sectionRef} className="w-full px-4 md:px-8 py-8 md:py-12">
      <motion.div
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-12 gap-4 md:gap-6"
        initial="hidden"
        variants={containerVariants}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`${card.className} relative`}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="relative z-10 w-full h-full overflow-hidden bg-primary-500/80 dark:bg-primary-800/80 backdrop-blur-sm border border-primary-700/30 dark:border-primary-900/30 text-white shadow-lg rounded-2xl">
              {card.content}

              {card.title && (
                <div className="absolute z-10 top-4 left-4 flex items-start">
                  {card.Icon && (
                    <div className="mr-3 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                      <card.Icon className="h-6 w-6" />
                    </div>
                  )}
                  <div>
                    <h4 className={`${fontTitle.className} text-lg sm:text-xl font-semibold`}>
                      {card.title}
                    </h4>
                    {card.description && (
                      <p
                        className={`${fontSubtitle.className} text-sm max-w-xs opacity-80 line-clamp-2`}
                      >
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {card.footer && (
                <div className="absolute z-20 bottom-0 left-0 right-0 p-4">{card.footer}</div>
              )}
            </Card>

            <NextLink className="absolute inset-0 z-20" href={card.link || "#"}>
              <span className="sr-only">Abrir {card.name || card.title}</span>
            </NextLink>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  className={cn(
                    "absolute inset-0 h-full w-full bg-gradient-to-br rounded-3xl z-0",
                    card.color
                  )}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                  initial={{ opacity: 0 }}
                  layoutId="hoverBackground"
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}