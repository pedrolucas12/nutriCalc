"use client";

import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

// UI Library Imports
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";

// Animation Imports
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Ripple } from "../magicui/ripple";
import { Magnetic } from "../motion-primitives/magnetic";

// Configuration Imports
import { fontSubtitle, fontTitle } from "@/config/fonts";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  Brain,
  MessageCircle,
  Sparkles,
  Utensils,
} from "lucide-react";
import DietNotificationList from "./diet-notification-list";

export default function BentoGridSection() {
  // State for hover and animation effects
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Spring options for magnetic effect
  const springOptions = { bounce: 0.1 };

  // Data for the cards with enhanced content
  const cards = [
    // Card 1: Dieta Personalizada (Feature highlight)
    {
      title: "Dieta Personalizada",
      description:
        "Plano alimentar único criado pela IA com base no seu perfil, objetivos, preferências e necessidades nutricionais específicas para resultados otimizados.",
      link: "#dieta-personalizada",
      span: 7,
      color: "from-emerald-500/20 to-teal-500/20",
      icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
      content: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-emerald-300/10 to-teal-500/20 blur-3xl"></div>
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-400/10 blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-teal-300/10 blur-xl"></div>

          {/* DNA-like structure to represent personalization */}
          <div className="absolute right-10 top-10 opacity-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative">
                <div
                  className="absolute w-8 h-1.5 bg-emerald-500/40 rounded-full"
                  style={{
                    transform: `translateY(${i * 10}px) rotate(${i % 2 ? 30 : -30}deg)`,
                    left: i % 2 ? "10px" : "0px",
                  }}
                ></div>
                <div
                  className="absolute w-8 h-1.5 bg-teal-500/40 rounded-full"
                  style={{
                    transform: `translateY(${i * 10}px) rotate(${i % 2 ? -30 : 30}deg)`,
                    right: i % 2 ? "10px" : "0px",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-gray-800/30">
          <p className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">
            Resultados visíveis em semanas
          </p>
          <Button
            color="primary"
            radius="full"
            size="sm"
            className="group bg-emerald-500 hover:bg-emerald-600"
          >
            Começar{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      ),
    },

    // Card 2: Transformação (Hero card)
    {
      title: "",
      description: "",
      link: "#transformacao",
      span: 5,
      color: "from-primary-500/20 to-primary-600/20",
      content: (
        <div className="flex group h-full w-full">
          <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden absolute">
            <Magnetic
              actionArea="global"
              intensity={0.2}
              range={200}
              springOptions={springOptions}
            >
              <div className="flex flex-col items-center justify-center">
                <p className="z-10 text-center text-4xl md:text-5xl font-bold tracking-tight group-hover:scale-105 transition-all duration-350 ease-in-out">
                  Transforme seu{" "}
                  <span className="text-primary-500 dark:text-primary-400">
                    corpo e vida
                  </span>
                </p>
                <p className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-center text-md max-w-xs mt-4">
                  Nossa IA analisa seu perfil completo para criar uma dieta que
                  realmente funciona para você.
                </p>
                <Button
                  color="primary"
                  radius="full"
                  size="lg"
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  Descubra como{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Magnetic>
          </div>
          <RipplePulse />
        </div>
      ),
    },

    // Card 3: WhatsApp Diet (Feature highlight with visual)
    {
      title: "",
      description: "",
      link: "#dieta-whatsapp",
      span: 4,
      titlePosition: "bottom",
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      color: "from-green-500/20 to-green-600/20",
      content: (
        <div className="absolute inset-0 overflow-hidden">
          {/* WhatsApp notification animation */}
          <DietNotificationList className="absolute inset-0" />

          {/* WhatsApp header */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-[#008069] dark:bg-[#1f2c34] z-20 flex items-center px-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <Utensils className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">NutriCalc</h4>
              <p className="text-white/70 text-xs">online</p>
            </div>
          </div>
        </div>
      ),
      footer: (
        <div
          className="flex justify-between items-center w-full backdrop-blur-xl bg-white/20 dark:bg-black/30 rounded-lg p-2 border border-white/20 dark:border-green-900/30 z-30
          shadow-md shadow-green-500/20 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30
          hover:bg-green-500/10 dark:hover:bg-green-900/20
        "
        >
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
      title: "Teste Gratuito",
      description:
        "Calcule seu IMC, TMB e % de gordura corporal gratuitamente.",
      link: "#teste-gratuito",
      span: 4,
      color: "from-amber-500/20 to-amber-600/20",
      icon: <BarChart3 className="h-6 w-6 text-amber-500" />,
      content: (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeOpacity="0.2"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset="70"
                className="text-amber-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold">24.5</span>
              <span className="text-xs opacity-70">IMC</span>
            </div>
          </div>
        </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-2">
            <span className="text-xs py-1 px-2 bg-amber-500/30 text-amber-700 dark:text-amber-300 rounded-full font-medium border border-amber-500/30">
              IMC
            </span>
            <span className="text-xs py-1 px-2 bg-amber-500/30 text-amber-700 dark:text-amber-300 rounded-full font-medium border border-amber-500/30">
              TMB
            </span>
          </div>
          <Button
            color="default"
            variant="solid"
            radius="full"
            size="sm"
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Calcular
          </Button>
        </div>
      ),
    },

    // Card 5: AI Technology (Tech highlight)
    {
      title: "IA para sua Dieta",
      description:
        "Tecnologia avançada que aprende com seus resultados e adapta seu plano continuamente.",
      link: "#ia-dieta",
      span: 4,
      color: "from-purple-500/20 to-purple-600/20",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      content: (
        <div className="absolute inset-0 overflow-hidden">
          {/* Futuristic AI background */}
          <div className="absolute inset-0">
            {/* Neural network nodes */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-500/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${1 + Math.random() * 2}s infinite alternate ${Math.random() * 2}s`,
                }}
              ></div>
            ))}

            {/* Neural network connections */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {Array.from({ length: 10 }).map((_, i) => {
                const x1 = Math.random() * 100;
                const y1 = Math.random() * 100;
                const x2 = Math.random() * 100;
                const y2 = Math.random() * 100;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#purple-gradient)"
                    strokeWidth="0.5"
                  />
                );
              })}
              <defs>
                <linearGradient
                  id="purple-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
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
        </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-purple-900/30">
          <p className="text-purple-700 dark:text-purple-300 text-sm font-medium">
            Atualização contínua
          </p>
          <Button
            color="primary"
            variant="solid"
            radius="full"
            size="sm"
            className="group bg-purple-500 hover:bg-purple-600"
          >
            Saiba mais{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
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
