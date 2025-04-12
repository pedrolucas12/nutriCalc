"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { AuroraText } from "../magicui/aurora-text";
import { BoxReveal } from "../magicui/box-reveal";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
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
      className="p-4 rounded-xl h-full flex flex-col items-center text-center md:items-start md:text-left 
        bg-primary-200 hover:bg-primary-400 dark:bg-primary-700 shadow-md  border-2 border-primary-300 dark:border-primary-600/20 
      "
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3 },
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        borderColor: boxColor,
        backgroundColor: boxColor,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 1,
        duration: 0.3,
      }}
    >
      <Image
        src={iconSrc}
        alt={`Ícone ${title}`}
        width={72}
        height={72}
        className="object-contain mb-4"
      />
      <h3
        className={`${fontTitle.className} text-lg font-semibold text-dark_green mb-1`}
      >
        {title}
      </h3>
      <p className={`${fontSubtitle.className} text-sm text-dim_gray`}>
        {description}
      </p>
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
    <section className="w-full flex flex-col items-center justify-center px-4 py-8 md:py-12 bg-honeydew text-dark_green overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center md:max-w-3xl lg:max-w-4xl mb-4 md:mb-6">
        <BoxReveal duration={0.5} boxColor="#ebf5df">
          <div>
            <h1
              className={`${fontTitle.className} text-4xl md:text-4xl lg:text-5xl font-bold text-dark_green leading-tight md:leading-snug`}
            >
              Sua dieta finalmente
            </h1>
            <div className="flex flex-row justify-center items-center gap-2">
              <h1
                className={`${fontTitle.className} text-4xl md:text-4xl lg:text-5xl font-bold text-dark_green mb-0 leading-tight md:leading-snug`}
              >
                <WordRotate
                  words={["Inteligente", "Personalizada", "Eficaz"]}
                  className="text-moss_green inline-block"
                  motionProps={customMotionProps}
                />
              </h1>
              <h1
                className={`${fontTitle.className} text-4xl md:text-4xl lg:text-5xl font-bold text-dark_green mb-0 leading-tight md:leading-snug`}
              >
                para você.
              </h1>
            </div>
          </div>
        </BoxReveal>
        <BoxReveal duration={0.7} boxColor="#ebf5df">
          <p
            className={`${fontSubtitle.className} text-lg md:text-xl pb-2 text-dim_gray text-balance`}
          >
            Chega de adivinhação e planos que não funcionam!{" "}
            <AuroraText> Nossa Inteligência Artificial</AuroraText> analisa seus
            dados únicos para criar um plano alimentar preciso, adaptado ao seu
            metabolismo e rotina, acabando de vez com a frustração de dietas
            genéricas.
          </p>
        </BoxReveal>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl items-start">
        <div className="flex flex-col items-stretch gap-4 w-full md:w-100 lg:w-100">
          <InfoCard
            iconSrc="/images/hero/iconNutricionista.png"
            title="Dieta Personalizada"
            description="Ajustada às suas necessidades e objetivos."
            boxColor="#ebf5df"
            duration={0.6}
          />
          <InfoCard
            iconSrc="/images/hero/iconIA.png"
            title="Recomendação IA"
            description="Receba recomendações otimizadas pela inteligência artificial."
            boxColor="#ebf5df"
            duration={0.8}
          />
          <InfoCard
            iconSrc="/images/hero/iconExercicesAndApp.png"
            title="Resultados Rápidos"
            description="Tenha acesso a um plano eficaz em poucos minutos."
            boxColor="#ebf5df"
            duration={1.0}
          />
        </div>

        <div className="hidden md:flex flex-col items-center justify-center">
          <Image
            src="/images/hero/heroPrincipal.png"
            alt="Ilustração de dieta personalizada"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 justify-start items-stretch">
          {/* Card Estilo de Vida */}
          <div className="flex-shrink-0">
            <InfoCard
              iconSrc="/images/hero/iconExercices.png"
              title="Mudança de Estilo de Vida"
              description="Transforme sua relação com a comida e alcance seus objetivos."
              boxColor="#768948"
              duration={1.2}
            />
          </div>

          <BoxReveal duration={1.4} boxColor="#ebf5df">
            <div className="p-4 rounded-lg bg-primary-600 shadow-md w-full flex flex-col justify-between">
              <div className="w-full max-w-[200px] h-[180px] md:max-w-[220px] md:h-[200px] rounded-lg shadow-lg overflow-hidden mx-auto mb-2">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/hero/iconPersonExample.png"
                      alt="Imagem Antes"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/hero/iconPersonExample2.png"
                      alt="Imagem Depois"
                    />
                  }
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="text-center">
                <p
                  className={`${fontSubtitle.className} text-xs md:text-sm text-white italic mb-1`}
                >
                  "NutriCalc mudou a minha vida! Alcancei meus objetivos..."
                </p>
                <div className="flex items-center justify-center mt-1">
                  <Image
                    src="/images/hero/iconPersonExample.png"
                    alt="Avatar do cliente"
                    width={28}
                    height={28}
                    className="rounded-full mr-2"
                  />
                  <div className="text-left">
                    <p
                      className={`${fontTitle.className} text-xs font-bold text-primary-200`}
                    >
                      Maria Silva
                    </p>
                    <p
                      className={`${fontSubtitle.className} text-[10px] text-primary-300 italic`}
                    >
                      São Paulo, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BoxReveal>
        </div>
      </div>

      <BoxReveal duration={1.6} boxColor="#ebf5df">
        <div className="mt-4">
          <InteractiveHoverButton
            className={cn(
              "bg-primary-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-700 transition duration-300",
              fontSubtitle.className,
            )}
          >
            <span className="flex items-center relative z-10">
              Calcule Sua Dieta Agora!
              <Sparkles className="ml-2 h-5 w-5 inline-block" />
            </span>
          </InteractiveHoverButton>
        </div>
      </BoxReveal>
    </section>
  );
}
