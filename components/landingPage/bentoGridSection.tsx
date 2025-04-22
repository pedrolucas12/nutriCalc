"use client";

import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { useState } from "react";

import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Magnetic } from "../motion-primitives/magnetic";
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
import { CardNutricionIA } from "../ui/animatedBeamDemo";
import { RipplePulse } from "../ui/ripplePulse";
import DietNotificationList from "./diet-notification-list";

const springOptions = { bounce: 0.1 };

export default function BentoGridSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  // Dados de exemplo para IMC, peso e altura
  const exampleIMC = 24.5;
  const exampleWeight = 75;
  const exampleHeight = 175;

  // Cards detalhados para matar as dores do cliente
  const cards = [
    {
      title: "Dieta 100% Personalizada",
      description:
        "Plano alimentar único, criado sob medida para seu corpo, rotina e preferências.",
      link: "#dieta-personalizada",
      color: "from-emerald-500/20 to-teal-500/20",
      icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
      content: (
        <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100/30 via-emerald-200/20 to-teal-100/20">
          {/* Lottie Fingerprint centralizado */}
          <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto z-10">
            <Lottie animationData={fingerprint} loop={true} />
          </div>
          {/* Texto centralizado abaixo do Lottie */}
          <div className="flex flex-col items-center justify-center z-20">
            <h3
              className={`${fontTitle.className} text-2xl md:text-3xl font-bold text-primary-700 text-center`}
            >
              Sua dieta, sua identidade.
            </h3>
            <p
              className={`${fontSubtitle.className} text-sm md:text-base text-primary-800 text-center mt-2`}
            >
              A IA analisa seu perfil, preferências e rotina para criar um plano
              alimentar exclusivo para você.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "",
      description: "",
      link: "#ia-dieta",
      color: "from-green-500/20 to-green-600/20",
      icon: <Brain className="h-6 w-6 text-green-500" />,
      content: <CardNutricionIA />,
    },
    {
      title: "Dieta no WhatsApp",
      description:
        "Receba seu plano alimentar e lembretes diretamente no WhatsApp.",
      link: "#dieta-whatsapp",
      color: "from-green-500/20 to-green-600/20",
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <DietNotificationList className="absolute inset-0 scale-95 md:scale-100 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10 rounded-xl pointer-events-none" />
        </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-xl bg-white/20 dark:bg-black/30 rounded-lg p-2 border border-white/20 dark:border-green-900/30 z-30 shadow-md shadow-green-500/20 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 hover:bg-green-500/10 dark:hover:bg-green-900/20">
          <p className="text-green-700 dark:text-green-300 text-md font-medium">
            Receba sua dieta no WhatsApp!
          </p>
          <Button
            color="primary"
            variant="solid"
            radius="full"
            size="sm"
            className="group bg-green-500 hover:bg-green-600 text-white"
          >
            Conectar{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      ),
    },
    {
      title: "Teste Gratuito TMB/IMC",
      description:
        "Calcule seu IMC, TMB e % de gordura corporal gratuitamente.",
      link: "#teste-gratuito",
      color: "from-amber-500/20 to-amber-600/20",
      icon: <BarChart3 className="h-6 w-6 text-amber-500" />,
      content: (
        <div className="absolute inset-0 flex items-center justify-center p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {/* <ClientOnlyApexChart
            imcValue={exampleIMC}
            weight={exampleWeight}
            height={exampleHeight}
          /> */}
        </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-secondary-800/30">
          <div>
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
      title: "",
      description: "",
      link: "#alcance-objetivos",
      color: "from-secondary-400/10 to-secondary-500/10",
      icon: <Goal className="h-6 w-6 text-secondary-400" />,
      content: (
        <div className="flex group h-full w-full absolute inset-0 z-0 overflow-hidden rounded-lg">
          <RipplePulse />
          <div className="gap-2 flex h-full w-full flex-col items-center justify-center absolute z-10 p-4 pointer-events-none">
            <Magnetic
              actionArea="global"
              intensity={0.2}
              range={200}
              springOptions={springOptions}
            >
              <p className="z-10 whitespace-pre-wrap text-center text-3xl md:text-4xl font-bold tracking-tighter text-primary group-hover:scale-105 transition-all duration-350 ease-in-out pb-1 md:pb-2">
                Transforme seu <span className="text-secondary-200">corpo</span>
              </p>
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-md text-primary-800">
                Deixe nossa IA criar o caminho ideal.
              </p>
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
          <Card className="w-full h-full relative overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-foreground shadow-md rounded-3xl">
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
          <Card className="w-full h-full relative overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-foreground shadow-md rounded-3xl">
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
            <Card className="w-full h-full relative overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-foreground shadow-md rounded-3xl">
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
