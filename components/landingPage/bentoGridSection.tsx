"use client";

import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

// --- UI Library Imports ---
import { Button } from "@heroui/button"; // Assuming Button might be used in footer
import { Card } from "@heroui/card";

// --- Animation Imports ---
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Ripple } from "../magicui/ripple"; // Adjust path if needed
import { Magnetic } from "../motion-primitives/magnetic"; // Adjust path if needed
import ClientOnlyApexChart from "../ui/client-pie-chart"; // Adjust path if needed
import DietNotificationList from "./diet-notification-list"; // Adjust path if needed

// --- Configuration Imports ---
import { fontSubtitle, fontTitle } from "@/config/fonts"; // Your font config
import { cn } from "@/lib/utils"; // Your utility for class names

// --- Ícones ---
import { ArrowRight, BarChart3, Brain, MessageCircle, Sparkles, Utensils } from "lucide-react"; // Added missing icons

// --- Component Definition ---

// Define springOptions if needed by Magnetic
const springOptions = { bounce: 0.1 };

// Custom Ripple component that pulses (assuming this is defined elsewhere or below)
function RipplePulse() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setIsActive((prev) => !prev), 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Motion divs for pulsing effect */}
        <motion.div className="w-32 h-32 rounded-full bg-primary-500/20" animate={{ scale: isActive ? [1, 1.5, 1.2] : [1.2, 1, 1.3], opacity: isActive ? [0.2, 0.3, 0.2] : [0.2, 0.4, 0.2] }} transition={{ duration: 4, ease: "easeInOut", times: [0, 0.5, 1], repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }} />
        <motion.div className="absolute w-48 h-48 rounded-full bg-primary-400/10" animate={{ scale: isActive ? [1.2, 1, 1.3] : [1, 1.5, 1.2], opacity: isActive ? [0.1, 0.3, 0.1] : [0.1, 0.2, 0.1] }} transition={{ duration: 5, ease: "easeInOut", times: [0, 0.5, 1], repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }} />
        <motion.div className="absolute w-64 h-64 rounded-full bg-primary-300/5" animate={{ scale: isActive ? [1, 1.2, 1] : [1.1, 0.9, 1.1], opacity: isActive ? [0.05, 0.1, 0.05] : [0.05, 0.15, 0.05] }} transition={{ duration: 6, ease: "easeInOut", times: [0, 0.5, 1], repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }} />
      </div>
      <Ripple color="var(--primary-500)" />
    </div>
  );
}


export default function BentoGridSection() {
  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Example data (replace with actual data source if needed)
  const exampleIMC = 24.5;
  const exampleWeight = 75;
  const exampleHeight = 175;

  // Data for the cards
  const cards = [
    // Card 1: Dieta Personalizada
    {
      title: "Dieta Personalizada",
      description:
        "Plano alimentar único criado pela IA com base no seu perfil, objetivos, preferências e necessidades nutricionais específicas para resultados otimizados.",
      link: "#dieta-personalizada",
      span: 7,
      color: "from-emerald-500/20 to-teal-500/20",
      icon: <Sparkles className="h-6 w-6 text-emerald-500" />,
      content: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-10 -bottom-10 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-emerald-300/10 to-teal-500/20 blur-3xl"></div>
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-400/10 blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-teal-300/10 blur-xl"></div>
          <div className="absolute right-10 top-10 opacity-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative h-[10px]"> {/* Added height to parent */}
                <div className="absolute w-8 h-1.5 bg-emerald-500/40 rounded-full" style={{ transform: `translateY(${i * 10}px) rotate(${i % 2 ? 30 : -30}deg)`, left: i % 2 ? "10px" : "0px" }}></div>
                <div className="absolute w-8 h-1.5 bg-teal-500/40 rounded-full" style={{ transform: `translateY(${i * 10}px) rotate(${i % 2 ? -30 : 30}deg)`, right: i % 2 ? "10px" : "0px" }}></div>
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
            color="primary" // Use color prop from HeroUI Button
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

    // Card 2: Transformação
    {
      title: "", // Title is inside content
      description: "", // Description is inside content
      link: "#transformacao",
      span: 5,
      color: "from-primary-500/20 to-primary-600/20",
      content: (
        <div className="relative flex items-center justify-center h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary-500/10 via-primary-300/5 to-primary-800/10">
          <RipplePulse />
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
            <Magnetic actionArea="global" intensity={0.2} range={200} springOptions={springOptions}>
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-dark_green dark:text-white mb-2 group-hover:mb-4 transition-all duration-300">
                Transforme sua{" "}
                <span className="text-primary-500 dark:text-primary-400">vida</span>
              </p>
              {/* Description appears on hover */}
              <p className="absolute px-4 text-md max-w-sm mx-auto text-dim_gray dark:text-secondary-300 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-in-out pointer-events-none text-center">
                Nossa IA analisa seu perfil completo para criar uma dieta que realmente funciona para você.
              </p>
            </Magnetic>
             {/* Button appears on hover */}
             <Button
                color="primary"
                radius="full"
                size="lg"
                className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-auto" // pointer-events-auto needed
                as={NextLink} // Make button a link
                href="#transformacao"
              >
                Descubra como{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
          </div>
        </div>
      ),
    },

    // Card 3: WhatsApp Diet
    {
      title: "Dieta no WhatsApp", // Title defined here for structure
      description: "Receba seu plano alimentar direto no seu WhatsApp.", // Description defined here
      link: "#dieta-whatsapp",
      span: 4,
      titlePosition: "bottom", // Custom prop to position title/desc at bottom
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      color: "from-green-500/20 to-green-600/20",
      content: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DietNotificationList className="absolute inset-0" />
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
        <div className="flex justify-between items-center w-full backdrop-blur-xl bg-white/20 dark:bg-black/30 rounded-lg p-2 border border-white/20 dark:border-green-900/30 z-30 shadow-md shadow-green-500/20 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 hover:bg-green-500/10 dark:hover:bg-green-900/20">
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

    // Card 4: Teste Gratuito
    {
      Icon: BarChart3,
      title: "Teste Gratuito TMB/IMC", // Changed 'name' to 'title' for consistency
      description: "Descubra suas métricas corporais essenciais sem custo.",
      href: "#teste-gratuito",
      cta: "Calcular Agora", // Used for hover button in BentoCard component
      className: "col-span-12 md:col-span-4",
      color: "from-amber-500/20 to-amber-600/20", // Added color for hover effect
      content: (
        <div className="absolute inset-0 flex items-center justify-center p-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
          {/* CORREÇÃO AQUI: Removido as={NextLink} e href */}
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

    // Card 5: AI Technology
    {
      title: "IA para sua Dieta", // Changed 'name' to 'title'
      description: "Tecnologia avançada que aprende e adapta seu plano.", // Simplified description
      link: "#ia-dieta", // Changed link to match title
      span: 4,
      color: "from-purple-500/20 to-purple-600/20",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      content: (
       <p> </p>
      ),
      footer: (
        <div className="flex justify-between items-center w-full backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-lg p-3 border border-white/20 dark:border-purple-900/30">
          <p className="text-purple-700 dark:text-purple-300 text-sm font-medium">
            Atualização contínua
          </p>
          <Button
            color="primary" // Use color prop
            variant="solid"
            radius="full"
            size="sm"
            className="group bg-purple-500 hover:bg-purple-600 text-white" // Added text-white
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
              `relative h-[300px] col-span-12 block`, // block é importante
              `md:col-span-${card.span || 4}`
            )}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }} // Efeito de hover no motion.div
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* NextLink agora só envolve o conteúdo clicável, não o card inteiro */}
            <NextLink
              href={card.link || "#"}
              className="absolute inset-0 z-20" // Link invisível sobre tudo, exceto footer talvez
              aria-label={card.title || `Link para ${index}`} // Add aria-label
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Span para acessibilidade, pode ser escondido visualmente */}
              <span className="sr-only">Abrir {card.title}</span>
            </NextLink>

            {/* Animação de Fundo do Hover */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className={cn(
                    "absolute inset-0 h-full w-full bg-gradient-to-br rounded-3xl z-0", // z-0 para ficar atrás do card
                    card.color // Aplica a cor de fundo do hover
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

            {/* Card do HeroUI - relative z-10 */}
            <Card className="relative z-10 w-full h-full overflow-hidden bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-gray-800/50 text-foreground shadow-md rounded-3xl">
              {/* Conteúdo de fundo (gráficos, ripple, etc.) */}
              {card.content && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                  {card.content}
                </div>
              )}

              {/* Título e Descrição (se aplicável e não no content) */}
              {card.title && card.titlePosition !== "bottom" && card.title !== "Alcance Seus Objetivos" && (
                 <div className={cn(
                    "absolute z-10 flex items-start",
                    card.titlePosition === "top-right" ? "top-4 right-4 max-w-[60%] backdrop-blur-sm bg-black/30 p-3 rounded-lg border border-white/10" : "top-4 left-4"
                 )}>
                    {card.icon && (
                      <div className={cn("p-2 rounded-full bg-white/10 backdrop-blur-sm", card.titlePosition === "top-right" ? "mr-2 p-1" : "mr-3")}>
                        {card.icon}
                      </div>
                    )}
                    <div className={card.title === "Dieta Personalizada" && card.titlePosition !== "top-right" ? "pr-8" : ""}>
                      <h4 className={cn(`${fontTitle.className} font-semibold`, card.titlePosition === "top-right" ? "text-lg text-white" : "text-xl")}>
                        {card.title}
                      </h4>
                      {card.description && (
                        <p className={cn(`${fontSubtitle.className} text-sm opacity-80`, card.titlePosition === "top-right" ? "text-white/90" : (card.title === "Dieta Personalizada" ? "max-w-full" : "max-w-xs"))}>
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
              )}

              {/* Título e Descrição na Posição Inferior */}
              {card.title && card.titlePosition === "bottom" && (
                <div className="absolute z-10 bottom-16 left-4 flex items-start">
                  {card.icon && (
                    <div className="mr-3 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                      {card.icon}
                    </div>
                  )}
                  <div>
                    <h4 className={`${fontTitle.className} text-xl font-semibold`}>
                      {card.title}
                    </h4>
                    {card.description && (
                      <p className={`${fontSubtitle.className} max-w-xs text-sm opacity-80`}>
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Footer */}
              {card.footer && (
                // Adicionado relative z-20 ao footer para garantir que fique sobre o link invisível
                <div className="absolute z-20 bottom-0 left-0 right-0 p-4">
                  {card.footer}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Definição do componente RipplePulse (como no passo anterior)
// ...
