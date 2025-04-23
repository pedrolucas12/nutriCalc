"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { AuroraText } from "../magicui/aurora-text";
import { BoxReveal } from "../magicui/box-reveal";
import { WordRotate } from "../magicui/word-rotate";

// --- InfoCard Component ---
const InfoCard = ({
  iconSrc,
  title,
  description,
  boxColor,
  duration,
}: {
  iconSrc: string;
  title: string;
  description: string;
  boxColor: string;
  duration: number;
}) => (
  <BoxReveal duration={duration} boxColor={boxColor}>
    <motion.div
      className="relative h-44 rounded-xl overflow-visible
        bg-gradient-to-br from-primary-200/90 to-primary-300/70 dark:from-primary-700/90 dark:to-primary-600/70 
        shadow-lg border-2 border-primary-300/50 dark:border-primary-500/30"
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.2 },
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 1,
      }}
    >
      {/* Conteúdo do card com flexbox */}
      <div className="flex h-full p-4 justify-center items-center flex-row">
        {/* Coluna do ícone (esquerda) */}
        <div className="relative flex-shrink-0 w-1/3 flex justify-center">
          <motion.div 
            className="relative w-24 h-24 flex items-center justify-center z-10"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: -8, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15,
              delay: duration * 0.5
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -3, 3, -3, 0],
              transition: { duration: 0.5 }
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-primary-500 
              p-1.5 flex items-center justify-center shadow-xl border-2 border-white/50">
              <div className="w-full h-full rounded-full bg-white/95 dark:bg-white/90 p-3 flex items-center justify-center">
                <Image
                  src={iconSrc}
                  alt={`Ícone ${title}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Coluna do texto (direita) */}
        <div className="flex-grow flex flex-col justify-center pl-2">
          <h3
            className={`${fontTitle.className} text-lg font-bold text-dark_green mb-2`}
          >
            {title}
          </h3>
          <p className={`${fontSubtitle.className} text-sm text-dim_gray`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </BoxReveal>
);

// --- Hero Component ---
export default function Hero() {
  const customMotionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center py-4 md:py-6">
      {/* Header Section - Reduzido para ocupar menos espaço vertical */}
      <div className="text-center mb-3">
        <BoxReveal duration={0.5} boxColor="#ebf5df">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1
              className={`${fontTitle.className} text-3xl md:text-4xl lg:text-5xl font-bold text-dark_green leading-tight`}
            >
              Sua dieta finalmente
            </h1>
            <h1
              className={`${fontTitle.className} text-3xl md:text-4xl lg:text-5xl font-bold text-dark_green leading-tight`}
            >
              <WordRotate
                words={["Inteligente", "Personalizada", "Eficaz"]}
                className="text-primary-500 inline-block"
                motionProps={customMotionProps}
              />
            </h1>
          </div>
        </BoxReveal>

        <BoxReveal duration={0.7} boxColor="#ebf5df">
          <p
            className={`${fontSubtitle.className} text-base md:text-lg max-w-4xl mx-auto mt-1 text-dim_gray`}
          >
            Chega de adivinhação e planos que não funcionam!{" "}
            <AuroraText className="font-semibold">
              Nossa Inteligência Artificial
            </AuroraText>{" "}
            analisa seus dados únicos para criar um plano alimentar preciso.
          </p>
        </BoxReveal>
      </div>

      {/* Main Content Grid - Ajustado para ocupar o espaço disponível */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full flex-grow max-h-[60vh]">
        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col justify-center gap-4">
          <InfoCard
            iconSrc="/images/hero/iconNutricionista.png"
            title="Dieta Personalizada"
            description="Ajustada às suas necessidades e objetivos específicos para resultados otimizados."
            boxColor="#ebf5df"
            duration={0.6}
          />
          <InfoCard
            iconSrc="/images/hero/iconIA.png"
            title="Recomendação IA"
            description="Receba recomendações otimizadas pela inteligência artificial baseadas em dados científicos."
            boxColor="#ebf5df"
            duration={0.8}
          />
          <InfoCard
            iconSrc="/images/hero/iconExercicesAndApp.png"
            title="Resultados Rápidos"
            description="Tenha acesso a um plano eficaz em poucos minutos e comece sua transformação hoje."
            boxColor="#ebf5df"
            duration={1.0}
          />
        </div>

        {/* Center Column */}
        <div className="hidden md:flex md:col-span-4 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-primary-200/40 to-primary-400/40 rounded-full blur-2xl opacity-70 animate-pulse"></div>
            <Image
              src="/images/hero/heroPrincipal.png"
              alt="Ilustração de dieta personalizada"
              width={320}
              height={320}
              className="object-contain relative z-10"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column - Com card normal e card duplo */}
        <div className="md:col-span-4 flex flex-col gap-4 justify-center">
          {/* Card normal - mesmo tamanho dos outros cards */}
          <InfoCard
            iconSrc="/images/hero/iconExercices.png"
            title="Mudança de Estilo de Vida"
            description="Transforme sua relação com a comida e alcance seus objetivos de forma sustentável."
            boxColor="#ebf5df"
            duration={1.2}
          />

          {/* Card duplo - ocupa o espaço exato de dois InfoCards */}
          <BoxReveal duration={1.4} boxColor="#ebf5df">
            <motion.div
              className="h-[352px] rounded-xl overflow-hidden
                bg-gradient-to-br from-primary-600 to-primary-700 
                shadow-lg border-2 border-primary-500/30 relative"
              whileHover={{
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Badge de "Antes e Depois" */}
              <div className="absolute top-3 left-3 z-20 bg-white/90 text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow-md border border-primary-300">
                Antes e Depois
              </div>
              
              {/* Slider de comparação com efeito de hover */}
              <motion.div 
                className="w-full h-[65%] relative"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <ReactCompareSlider
                  position={60}
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: "blur(4px)",
                        background: "rgba(118, 137, 72, 0.9)",
                        border: "none",
                        color: "white",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      }}
                    />
                  }
                  itemOne={
                    <div className="relative h-full">
                      <div className="absolute top-2 left-2 bg-primary-700/80 text-white text-xs px-2 py-1 rounded z-10">
                        Antes
                      </div>
                      <ReactCompareSliderImage
                        src="/images/hero/iconPersonExample.png"
                        alt="Imagem Antes"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                  }
                  itemTwo={
                    <div className="relative h-full">
                      <div className="absolute top-2 right-2 bg-primary-500/80 text-white text-xs px-2 py-1 rounded z-10">
                        Depois
                      </div>
                      <ReactCompareSliderImage
                        src="/images/hero/iconPersonExample2.png"
                        alt="Imagem Depois"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                  }
                />
              </motion.div>
              
              {/* Área de depoimento com design melhorado */}
              <div className="bg-white/10 backdrop-blur-sm p-3 h-[35%] flex flex-col justify-center">
                <div className="flex items-start">
                  <div className="relative mr-3 flex-shrink-0">
                    <Image
                      src="/images/hero/iconPersonExample.png"
                      alt="Avatar do cliente"
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-primary-300 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className={`${fontTitle.className} text-sm font-bold text-white`}>
                        Maria Silva
                      </p>
                      <div className="ml-2 flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3 h-3 text-yellow-300 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={`${fontSubtitle.className} text-xs text-primary-200 mb-1`}>
                      São Paulo, SP • Perdeu 12kg em 3 meses
                    </p>
                    <p className={`${fontSubtitle.className} text-sm text-white italic`}>
                      "NutriCalc transformou minha vida! Finalmente uma dieta que funciona e que consigo seguir sem sofrimento."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </BoxReveal>
        </div>
      </div>

      {/* CTA Button - Melhorado */}
      <BoxReveal duration={1.6} boxColor="#ebf5df">
        <div className="text-center mt-5">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl  opacity-70 animate-pulse"></div>
            <Button
              color="primary"
              size="lg"
              className="px-10 py-6 text-lg font-bold shadow-xl relative z-10
                bg-gradient-to-r from-moss_green to-moss_green/90 hover:from-moss_green/90 hover:to-moss_green 
                border-2 border-moss_green/20 rounded-xl"
            >
              <motion.span 
                className="flex items-center"
                initial={{ opacity: 1 }}
                animate={{ 
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.03, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="mr-3 h-6 w-6 text-yellow-200" />
                Calcule sua Dieta agora!
                {/* <motion.div
                  className="ml-2 bg-white/20 text-white text-xs px-2 py-0.5 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  GRÁTIS
                </motion.div> */}
              </motion.span>
            </Button>
          </motion.div>
          <p className={`${fontSubtitle.className} text-xs text-dim_gray mt-2 opacity-80`}>
            Mais de 10.000 pessoas já transformaram seus hábitos alimentares
          </p>
        </div>
      </BoxReveal>
    </section>
  );
}
