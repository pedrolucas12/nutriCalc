"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Button } from "@heroui/button"; // Corrigido o import
import { Sparkles } from "lucide-react";
import { AuroraText } from "../magicui/aurora-text"; // Ajuste o caminho se necessário
import { BoxReveal } from "../magicui/box-reveal"; // Ajuste o caminho se necessário
import { WordRotate } from "../magicui/word-rotate"; // Ajuste o caminho se necessário

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4">
        {/* Título Principal com Flexbox */}
        <BoxReveal duration={0.5} boxColor="#12372a">
          <h1
            // Aplicando Flexbox para alinhar itens na mesma linha
            // justify-center para centralizar a linha inteira
            // items-baseline para alinhar o texto pela linha de base
            // flex-wrap para permitir quebra em telas MUITO pequenas, se necessário
            // md:whitespace-nowrap para forçar uma linha em telas médias e maiores
            className={`${fontTitle.className} text-xl lg:text-6xl font-bold text-dark_green mb-4 flex items-baseline justify-center flex-wrap md:whitespace-nowrap`}
          >
            {/* Envolvemos o texto estático em um span para melhor controle no flex */}
            <span className="mr-2 md:mr-3">Sua Dieta</span> {/* Adiciona margem direita */}
            <WordRotate
              words={["Inteligente", "Personalizada", "Eficaz", "Otimizada"]}
              className="text-primary inline-block" // Mantém inline-block
            />
            {/* Envolvemos o ponto final em um span */}
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
