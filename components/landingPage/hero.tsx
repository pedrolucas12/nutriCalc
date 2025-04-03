"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Button } from "@heroui/button"; // Corrigido o import
import { Sparkles } from "lucide-react";
import Image from "next/image"; // Importar o componente Image do Next.js
import { AuroraText } from "../magicui/aurora-text"; // Ajuste o caminho se necessário
import { BoxReveal } from "../magicui/box-reveal"; // Ajuste o caminho se necessário
import { WordRotate } from "../magicui/word-rotate"; // Ajuste o caminho se necessário

export default function Hero() {
  const customMotionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center" 
    >
      <div className="container mx-auto  flex flex-col md:flex-row items-center  ">

        {/* Coluna Esquerda: Conteúdo de Texto */}
        <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
          {/* Título Principal com WordRotate e motionProps */}
          <BoxReveal duration={0.5} boxColor="#12372a">
            {/* Removido flex do h1, pois o alinhamento é controlado pelo div pai */}
            <h1
              className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl font-bold text-dark_green mb-4`}
            >
              Sua Dieta{" "}
              <WordRotate
                words={["Inteligente", "Personalizada", "Eficaz", "Otimizada"]}
                className="text-primary inline-block"
                motionProps={customMotionProps}
              />
            </h1>
          </BoxReveal>

          {/* Subtítulo Complementar */}
          <BoxReveal duration={0.7} boxColor="#12372a">
            <p className={`${fontSubtitle.className} text-xl md:text-2xl mb-8 text-dim_gray`}>
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

        {/* Coluna Direita: Imagem */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0 ">
          <BoxReveal duration={1.1} boxColor="#768948"> 
            <Image
              src="/images/diet.png" // Caminho para sua imagem na pasta public
              alt="Ilustração de dieta personalizada e saudável"
              width={500} // Defina a largura desejada
              height={500} // Defina a altura desejada
              className="rounded-lg shadow-lg object-contain" // Estilos para a imagem
            />
          </BoxReveal>
        </div>

      </div>
    </section>
  );
}
