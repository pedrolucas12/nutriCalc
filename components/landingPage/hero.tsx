"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Button } from "@heroui/button"; // Correção aqui
import { Sparkles } from "lucide-react";
import { BoxReveal } from "../magicui/box-reveal"; // Ajuste o caminho se necessário

export default function Hero() {
  return (
    <section
      // Remova styles.hero se você moveu tudo para classes Tailwind
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <BoxReveal duration={0.5}>
          <h1
            className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl font-bold text-dark_green mb-4`}
          >
            Nutrição Baseada em Ciência.
          </h1>
        </BoxReveal>

        {/* Subtítulo Complementar */}
        <BoxReveal duration={0.7}>
          <p className={`${fontSubtitle.className} text-lg md:text-xl text-dim_gray mb-8`}>
            Descubra o poder da IA para otimizar sua saúde e alcançar seus
            objetivos.
          </p>
        </BoxReveal>

        {/* Botão Chamativo */}
        <BoxReveal duration={0.9}>
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
