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
      className="p-4 rounded-xl h-full flex flex-col items-center text-center
        bg-gradient-to-br from-primary-200/90 to-primary-300/70 dark:from-primary-700/90 dark:to-primary-600/70 
        shadow-lg border border-primary-300/50 dark:border-primary-500/30"
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
      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white/30 dark:bg-white/10 rounded-full p-2 shadow-inner">
        <Image
          src={iconSrc}
          alt={`Ícone ${title}`}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <h3
        className={`${fontTitle.className} text-lg font-bold text-dark_green mb-2`}
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
    <section className="w-full  py-4 md:py-9 items-center justify-center flex flex-col gap-4">
      {/* Header Section */}
      <div className="text-center">
        <BoxReveal duration={0.5} boxColor="#ebf5df">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1
              className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl font-bold text-dark_green leading-tight`}
            >
              Sua dieta finalmente
            </h1>
            <h1
              className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl font-bold text-dark_green leading-tight`}
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
            className={`${fontSubtitle.className} text-lg md:text-xl max-w-4xl mx-auto mt-2 text-dim_gray`}
          >
            Chega de adivinhação e planos que não funcionam!{" "}
            <AuroraText className="font-semibold">
              Nossa Inteligência Artificial
            </AuroraText>{" "}
            analisa seus dados únicos para criar um plano alimentar preciso,
            adaptado ao seu metabolismo e rotina.
          </p>
        </BoxReveal>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col gap-2">
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
              width={340}
              height={340}
              className="object-contain relative z-10"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <InfoCard
            iconSrc="/images/hero/iconExercices.png"
            title="Mudança de Estilo de Vida"
            description="Transforme sua relação com a comida e alcance seus objetivos de forma sustentável."
            boxColor="#ebf5df"
            duration={1.2}
          />

          <BoxReveal duration={1.4} boxColor="#ebf5df">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg w-full flex flex-col gap-3 border border-primary-500/30">
              <div className="w-full rounded-lg shadow-lg overflow-hidden h-[200px]">
                <ReactCompareSlider
                  position={50}
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: "blur(4px)",
                        background: "rgba(118, 137, 72, 0.9)",
                        border: "none",
                        color: "white",
                      }}
                    />
                  }
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/hero/iconPersonExample.png"
                      alt="Imagem Antes"
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/hero/iconPersonExample2.png"
                      alt="Imagem Depois"
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  }
                />
              </div>
              <div className="text-center">
                <p
                  className={`${fontSubtitle.className} text-xs text-white italic mb-2`}
                >
                  "NutriCalc mudou a minha vida! Alcancei meus objetivos de
                  forma saudável e sustentável."
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/hero/iconPersonExample.png"
                    alt="Avatar do cliente"
                    width={32}
                    height={32}
                    className="rounded-full mr-2 border-2 border-primary-300 shadow-md"
                  />
                  <div className="text-left">
                    <p
                      className={`${fontTitle.className} text-xs font-bold text-primary-200`}
                    >
                      Maria Silva
                    </p>
                    <p
                      className={`${fontSubtitle.className} text-[10px] text-primary-300`}
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

      {/* CTA Button */}
      <BoxReveal duration={1.6} boxColor="#ebf5df">
        <div className=" text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              color="primary"
              size="lg"
              className="px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 
                bg-gradient-to-r from-moss_green to-moss_green/90 hover:from-moss_green/90 hover:to-moss_green 
                border-2 border-moss_green/20 rounded-xl"
            >
              <span className="flex items-center">
                <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                Calcule sua Dieta agora!
              </span>
            </Button>
          </motion.div>
        </div>
      </BoxReveal>
    </section>
  );
}
