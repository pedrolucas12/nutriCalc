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
import { AiBackground } from "../ui/ai-background";
import ClientOnlyApexChart from "../ui/client-pie-chart";
import DietNotificationList from "./diet-notification-list";

export default function BentoGridSection() {
  // State for hover and animation effects
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Spring options for magnetic effect
  const springOptions = { bounce: 0.1 };
  const exampleIMC = 24.5;
  const exampleWeight = 75;
  const exampleHeight = 175
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
                  Transforme sua{" "}
                  <span className="text-primary-500 dark:text-primary-400">
                    vida
                  </span>
                </p>
                <p className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-center text-md max-w-xs mt-4">
                  Nossa IA analisa seu perfil completo para criar uma dieta que
                  realmente funciona para você.
                </p>
                <Button
                  color="primary"
                  radius="full"
                  variant="shadow"
                  size="lg"
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  Descobrir
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
      Icon: BarChart3,
      name: "Teste Gratuito TMB/IMC",
      description: "Descubra suas métricas corporais essenciais sem custo.",
      href: "#teste-gratuito",
      cta: "Calcular Agora",
      className: "col-span-12 md:col-span-4",
      content: (
        // Usa o componente wrapper que agora importa dinamicamente
        <div className="absolute inset-0 flex items-center justify-center p-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        <ClientOnlyApexChart
          imcValue={exampleIMC} // Passa os dados
          weight={exampleWeight}
          height={exampleHeight}
        />
      </div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-secondary-800/30">
          {/* Texto informativo */}
          <div>
            <p className={`${fontTitle.className} text-secondary-800 dark:text-secondary-200 font-semibold text-sm`}>
              Entenda sua Saúde
            </p>
            <p className={`${fontSubtitle.className} text-secondary-600 dark:text-secondary-400 text-xs`}>
              Calcule e visualize seu IMC.
            </p>
          </div>
          {/* Botão mais claro */}
          <Button
            as={NextLink} // Faz o botão funcionar como link
            href="#teste-gratuito" // Mesmo link do card
            color="default" // Para usar nossas classes customizadas
            radius="full"
            size="sm"
            className="group bg-primary-500 hover:bg-primary-600 text-white text-xs px-3 py-1.5" // Estilo do botão
          >
            Calcular
            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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
      span: 4, // Ajustado para 4 colunas
      color: "from-purple-500/20 to-purple-600/20", // Cor para o fundo do hover
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      content: (
        // Usa o componente AiBackground que gera valores aleatórios no cliente
        <AiBackground />
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-purple-900/30">
          <p className="text-purple-700 dark:text-purple-300 text-sm font-medium">
            Atualização contínua
          </p>
          <Button
            color="primary" // Ou talvez uma cor roxa?
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
              href={card.link || "#"}
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
