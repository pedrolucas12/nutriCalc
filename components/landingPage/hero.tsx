"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Button } from "@heroui/button"; // Corrigido o import
import { Sparkles } from "lucide-react";
import { AuroraText } from "../magicui/aurora-text"; // Ajuste o caminho se necessário
import { BoxReveal } from "../magicui/box-reveal"; // Ajuste o caminho se necessário
import { WordRotate } from "../magicui/word-rotate"; // Ajuste o caminho se necessário

export default function Hero() {
  // Definição das propriedades de animação para Framer Motion
  const customMotionProps = {
    initial: { opacity: 0, y: 10 }, // Começa ligeiramente abaixo e invisível
    animate: { opacity: 1, y: 0 },   // Anima para a posição original e visível
    exit: { opacity: 0, y: -10 },  // Sai deslizando ligeiramente para cima e desaparecendo
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 } // Transição suave
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4">
        {/* Título Principal com WordRotate e motionProps */}
        <BoxReveal duration={0.5} boxColor="#12372a">
          <h1
            className={`${fontTitle.className} text-xl lg:text-6xl font-bold text-dark_green mb-4 flex items-baseline justify-center flex-wrap md:whitespace-nowrap`}
          >
            <span className="mr-2 md:mr-3">Sua Dieta</span>
            <WordRotate
              words={["Inteligente", "Personalizada", "Eficaz", "Otimizada"]}
              className="text-primary inline-block"
              motionProps={customMotionProps} // Passando as props de animação personalizadas
            />
            <span className="ml-1">.</span>
          </h1>
        </BoxReveal>

        {/* Subtítulo Complementar */}
        <BoxReveal duration={0.7} boxColor="#12372a">
          <p className={`${fontSubtitle.className} text-2xl mb-8`}>
            Descubra o poder da <AuroraText>Inteligência Artificial</AuroraText> para
            otimizar sua saúde e alcançar seus objetivos.
          </p>
        </BoxReveal>

        {/* Botão Chamativo */}
        <BoxReveal duration={0.9} boxColor="#12372a">
          <Button
            className="bg-primary text-honeydew font-semibold px-8 py-3 rounded-full hover:bg-dark_green-600 transition-colors"
            size="lg"
          >
            Calcule Sua Dieta Agora <Sparkles className="ml-2 h-5 w-5 inline-block" />
          </Button>
        </BoxReveal>
      </div>
    </section>
  );
}
