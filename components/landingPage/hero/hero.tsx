"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

import { AuroraText } from "../../magicui/aurora-text";
import { BoxReveal } from "../../magicui/box-reveal";
import { WordRotate } from "../../magicui/word-rotate";

import { fontSubtitle, fontTitle } from "@/config/fonts";

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
  <BoxReveal boxColor={boxColor} duration={duration}>
    <motion.div
      className="relative h-auto min-h-[11rem] sm:h-44 rounded-xl overflow-visible
        bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-700 dark:to-primary-800
        shadow-lg border-2 border-primary-500/30 dark:border-primary-700/30"
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 1,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.2 },
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="flex h-full p-3 sm:p-4 justify-center items-center flex-row">
        <div className="relative flex-shrink-0 w-1/4 sm:w-1/3 flex justify-center">
          <motion.div
            animate={{ x: -8, opacity: 1 }}
            className="relative w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center z-10"
            initial={{ x: -10, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: duration * 0.5,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -3, 3, -3, 0],
              transition: { duration: 0.5 },
            }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-primary-500 
              p-1.5 flex items-center justify-center shadow-xl border-2 border-white/50"
            >
              <div className="w-full h-full rounded-full bg-white/95 dark:bg-white/90 p-3 flex items-center justify-center">
                <Image
                  alt={`Ícone ${title}`}
                  className="object-contain"
                  height={64}
                  src={iconSrc}
                  width={64}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-grow flex flex-col justify-center pl-2">
          <h3 className={`${fontTitle.className} text-base sm:text-lg font-bold text-dark_green mb-1 sm:mb-2`}>
            {title}
          </h3>
          <p className={`${fontSubtitle.className} text-xs sm:text-sm text-dim_gray`}>{description}</p>
        </div>
      </div>
    </motion.div>
  </BoxReveal>
);

export default function Hero() {
  const customMotionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
  };

  return (
    <section className="w-full min-h-screen px-4 flex flex-col justify-center items-center py-4 md:py-6">
      <div className="text-center mb-3">
        <BoxReveal boxColor="#ebf5df" duration={0.5}>
          <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
            <h1
              className={`${fontTitle.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark_green leading-tight`}
            >
              Sua dieta finalmente
            </h1>
            <h1
              className={`${fontTitle.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark_green leading-tight`}
            >
              <WordRotate
                className="text-primary-500 inline-block"
                motionProps={customMotionProps}
                words={["Inteligente", "Personalizada", "Eficaz"]}
              />
            </h1>
          </div>
        </BoxReveal>

        <BoxReveal boxColor="#ebf5df" duration={0.7}>
          <p
            className={`${fontSubtitle.className} text-sm sm:text-base md:text-lg max-w-4xl mx-auto mt-1 text-dim_gray px-4`}
          >
            Chega de adivinhação e planos que não funcionam!{" "}
            <AuroraText className="font-semibold">Nossa Inteligência Artificial</AuroraText> analisa
            seus dados únicos para criar um plano alimentar preciso.
          </p>
        </BoxReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full flex-grow max-h-[80vh] md:max-h-[60vh] px-4 sm:px-6">
        <div className="md:col-span-4 flex flex-col justify-center gap-4">
          <InfoCard
            boxColor="#ebf5df"
            description="Ajustada às suas necessidades e objetivos específicos para resultados otimizados."
            duration={0.6}
            iconSrc="/images/hero/iconNutricionista.png"
            title="Dieta Personalizada"
          />
          <InfoCard
            boxColor="#ebf5df"
            description="Receba recomendações otimizadas pela inteligência artificial baseadas em dados científicos."
            duration={0.8}
            iconSrc="/images/hero/iconIA.png"
            title="Recomendação IA"
          />
          <InfoCard
            boxColor="#ebf5df"
            description="Tenha acesso a um plano eficaz em poucos minutos e comece sua transformação hoje."
            duration={1.0}
            iconSrc="/images/hero/iconExercicesAndApp.png"
            title="Resultados Rápidos"
          />
        </div>

        <div className="hidden md:flex md:col-span-4 items-center justify-center">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-primary-200/40 to-primary-400/40 rounded-full blur-2xl opacity-70 animate-pulse" />
            <Image
              priority
              alt="Ilustração de dieta personalizada"
              className="object-contain relative z-10"
              height={320}
              src="/images/hero/heroPrincipal.png"
              width={320}
            />
          </motion.div>
        </div>

        <div className="md:col-span-4 md:flex flex-col gap-4 justify-center hidden">
          <InfoCard
            boxColor="#ebf5df"
            description="Transforme sua relação com a comida e alcance seus objetivos de forma sustentável."
            duration={1.2}
            iconSrc="/images/hero/iconExercices.png"
            title="Mudança de Estilo de Vida"
          />

          <BoxReveal boxColor="#ebf5df" duration={1.4}>
            <motion.div
              className="h-[300px] sm:h-[352px] rounded-xl overflow-hidden
                bg-gradient-to-br from-primary-600 to-primary-700 
                shadow-lg border-2 border-primary-500/30 relative
                "
              whileHover={{
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="absolute top-3 left-3 z-20 bg-white/90 text-primary-700 text-xs font-bold px-3 py-1 rounded-full shadow-md border border-primary-300">
                Antes e Depois
              </div>

              <motion.div
                className="w-full h-[65%] relative"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <ReactCompareSlider
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
                        alt="Imagem Antes"
                        src="/images/hero/iconPersonExample.png"
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
                        alt="Imagem Depois"
                        src="/images/hero/iconPersonExample2.png"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                  }
                  position={60}
                />
              </motion.div>

              <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 h-[35%] flex flex-col justify-center
              ">
                <div className="flex items-start">
                  <div className="relative mr-3 flex-shrink-0">
                    <Image
                      alt="Avatar do cliente"
                      className="rounded-full border-2 border-primary-300 shadow-md"
                      height={36}
                      src="/images/hero/iconPersonExample.png"
                      width={36}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className={`${fontTitle.className} text-sm font-bold text-white`}>
                        Maria Silva
                      </p>
                      <div className="ml-2 flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-3 h-3 text-yellow-300 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={`${fontSubtitle.className} text-xs text-primary-200 mb-1`}>
                      São Paulo, SP • Perdeu 12kg em 3 meses
                    </p>
                    <p className={`${fontSubtitle.className} text-xs sm:text-sm text-white italic line-clamp-2 sm:line-clamp-none`}>
                      &quot;NutriMind transformou minha vida! Finalmente uma dieta que funciona e
                      que consigo seguir sem sofrimento.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </BoxReveal>
        </div>
      </div>

      <BoxReveal boxColor="#ebf5df" duration={1.6}>
        <div className="text-center mt-3 sm:mt-5 px-4">
          <motion.div
            className="inline-block relative w-full sm:w-auto"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl opacity-70 animate-pulse" />
            <Button
              className="px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold shadow-xl relative z-10
                bg-gradient-to-r from-moss_green to-moss_green/90 hover:from-moss_green/90 hover:to-moss_green 
                border-2 border-moss_green/20 rounded-xl w-full sm:w-auto"
              color="primary"
              size="lg"
            >
              <motion.span
                animate={{
                  opacity: [1, 0.8, 1],
                  scale: [1, 1.03, 1],
                }}
                className="flex items-center justify-center"
                initial={{ opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="mr-3 h-6 w-6 text-yellow-200" />
                Calcule sua Dieta agora!
              </motion.span>
            </Button>
          </motion.div>
          <p className={`${fontSubtitle.className} text-[10px] sm:text-xs text-dim_gray mt-2 opacity-80`}>
            Mais de 10.000 pessoas já transformaram seus hábitos alimentares
          </p>
        </div>
      </BoxReveal>
    </section>
  );
}