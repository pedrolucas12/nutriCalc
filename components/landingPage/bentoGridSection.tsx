"use client";

import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Ripple } from "../magicui/ripple";
import { Magnetic } from "../motion-primitives/magnetic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { cn } from "@/lib/utils";

import { ArrowRight, BarChart3, Brain, Goal, MessageCircle, Sparkles } from "lucide-react";

import fingerprint from "@/public/animations/fingerprint.json";
import { CardNutricionIA } from "../ui/animatedBeamDemo";
import ClientOnlyApexChart from "../ui/client-pie-chart";
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
  const cards: Array<{
    title: string;
    description: string;
    link: string;
    span: number;
    color: string;
    icon: JSX.Element;
    content: JSX.Element;
    footer?: JSX.Element;
    titlePosition?: "top-right" | "bottom";
  }> = [
    {
      title: "Dieta 100% Personalizada",
      description: "Plano alimentar único, criado sob medida para seu corpo, rotina e preferências.",
      link: "#dieta-personalizada",
      span: 7,
      color: "from-emerald-500/20 to-teal-500/20",
      icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
      content: (
        <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100/30 via-emerald-200/20 to-teal-100/20">
          {/* Lottie Fingerprint centralizado */}
          <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mx-auto mt-4 z-10">
          <Lottie animationData={fingerprint} loop={true} />
          </div>
          {/* Texto centralizado abaixo do Lottie */}
          <div className="flex flex-col items-center justify-center mt-2 z-20">
            <h3 className={`${fontTitle.className} text-2xl md:text-3xl font-bold text-primary-700 text-center`}>
              Sua dieta, sua identidade.
            </h3>
            <p className={`${fontSubtitle.className} text-sm md:text-base text-primary-800 text-center mt-2`}>
              A IA analisa seu perfil, preferências e rotina para criar um plano alimentar exclusivo para você.
            </p>
          </div>
        </div>
      ),
    
    },
    {
      title: "",
      description: "",
      link: "#ia-dieta",
      span: 5,
      color: "from-green-500/20 to-green-600/20",
      icon: <Brain className="h-6 w-6 text-green-500" />,
      content: <CardNutricionIA />,
    },
    {
      title: "Dieta no WhatsApp",
      description:
        "Receba seu plano alimentar e lembretes diretamente no WhatsApp.",
      link: "#dieta-whatsapp",
      span: 4,
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
            className="group bg-green-500 hover:bg-green-600"
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
      span: 4,
      color: "from-amber-500/20 to-amber-600/20",
      icon: <BarChart3 className="h-6 w-6 text-amber-500" />,
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
        "Transforme seu corpo e saúde com um plano que evolui com você.",
      link: "#alcance-objetivos",
      span: 4,
      color: "from-secondary-400/10 to-secondary-500/10",
      icon: <Goal className="h-6 w-6 text-secondary-400" />,
      content: (
        <div className="flex group h-full w-full absolute inset-0 z-0 overflow-hidden rounded-lg">
          <RipplePulse />
          <div className="gap-2 flex h-full w-full flex-col items-center justify-center absolute z-10 p-4 pointer-events-none">
            <Magnetic actionArea="global" intensity={0.2} range={200} springOptions={springOptions}>
              <p className="z-10 whitespace-pre-wrap text-center text-2xl md:text-3xl font-medium tracking-tighter text-white group-hover:scale-105 transition-all duration-350 ease-in-out pb-1 md:pb-2">
                Transforme seu <span className="text-secondary-200">corpo</span>.
              </p>
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-xs md:text-sm text-secondary-200">
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
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16">
      <motion.div
        className="gap-4 grid grid-cols-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={cn(
              `relative h-[300px] col-span-12 block`,
              `md:col-span-${card.span || 4}`
            )}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NextLink
              href={card.link}
              className="block h-full w-full group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className={cn(
                      "absolute inset-0 h-full w-full bg-gradient-to-br rounded-3xl",
                      card.color
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

              <Card className="relative z-10 w-full h-full overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-foreground shadow-md rounded-3xl">
                {card.content && (
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    {card.content}
                  </div>
                )}

                {card.title &&
                  card.titlePosition !== "top-right" &&
                  card.titlePosition !== "bottom" && (
                    <div className="absolute z-10 top-4 left-4 flex items-start">
                      {card.icon && (
                        <div className="mr-3 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                          {card.icon}
                        </div>
                      )}
                      <div
                        className={
                          card.title === "Dieta Personalizada" ? "pr-8" : ""
                        }
                      >
                        <h4
                          className={`${fontTitle.className} text-xl font-semibold`}
                        >
                          {card.title}
                        </h4>
                        {card.description && (
                          <p
                            className={`${fontSubtitle.className} text-sm opacity-80 ${
                              card.title === "Dieta Personalizada"
                                ? "max-w-full"
                                : "max-w-xs"
                            }`}
                          >
                            {card.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                {card.title && card.titlePosition === "top-right" && (
                  <div className="absolute z-10 top-4 right-4 max-w-[60%] backdrop-blur-sm bg-black/30 p-3 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      {card.icon && (
                        <div className="mr-2 p-1 rounded-full bg-white/10">
                          {card.icon}
                        </div>
                      )}
                      <h4
                        className={`${fontTitle.className} text-lg font-semibold text-white`}
                      >
                        {card.title}
                      </h4>
                    </div>
                    {card.description && (
                      <p
                        className={`${fontSubtitle.className} text-sm text-white/90`}
                      >
                        {card.description}
                      </p>
                    )}
                  </div>
                )}

                {card.title && card.titlePosition === "bottom" && (
                  <div className="absolute z-10 bottom-16 left-4 flex items-start">
                    {card.icon && (
                      <div className="mr-3 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                        {card.icon}
                      </div>
                    )}
                    <div>
                      <h4
                        className={`${fontTitle.className} text-xl font-semibold`}
                      >
                        {card.title}
                      </h4>
                      {card.description && (
                        <p
                          className={`${fontSubtitle.className} max-w-xs text-sm opacity-80`}
                        >
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {card.footer && (
                  <div className="absolute z-10 bottom-0 left-0 right-0 p-4">
                    {card.footer}
                  </div>
                )}
              </Card>
            </NextLink>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Custom Ripple component that pulses
function RipplePulse() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Start the pulsing animation
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 rounded-full bg-primary-500/20"
          animate={{
            scale: isActive ? [1, 1.5, 1.2] : [1.2, 1, 1.3],
            opacity: isActive ? [0.2, 0.3, 0.2] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-primary-400/10"
          animate={{
            scale: isActive ? [1.2, 1, 1.3] : [1, 1.5, 1.2],
            opacity: isActive ? [0.1, 0.3, 0.1] : [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary-300/5"
          animate={{
            scale: isActive ? [1, 1.2, 1] : [1.1, 0.9, 1.1],
            opacity: isActive ? [0.05, 0.1, 0.05] : [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>
      <Ripple color="var(--primary-500)" />
    </div>
  );
}
