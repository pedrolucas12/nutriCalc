"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { AuroraText } from "../magicui/aurora-text"; // Ajuste o caminho se necessário
import { BoxReveal } from "../magicui/box-reveal"; // Ajuste o caminho se necessário
import { WordRotate } from "../magicui/word-rotate"; // Ajuste o caminho se necessário

export default function Hero() {
  const customMotionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center py-4 md:py-8 lg:py-12 bg-light_green text-dark_green">
      {" "}
      {/* Adicionado padding horizontal */}
      {/* Container para Título e Subtítulo com largura máxima em telas médias */}
      <div className="flex flex-col justify-center items-center text-center w-full">
        {" "}
        {/* Ajuste max-w e mb */}
        {/* Título Principal Centralizado */}
        <BoxReveal duration={0.5} boxColor="#ebf5df">
          <div>
            {/* Ajuste no tamanho da fonte e leading para forçar duas linhas */}
            <h1
              className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl font-bold text-dark_green  leading-none `}
            >
              Sua dieta finalmente
            </h1>
            <div className="flex flex-row justify-center items-center gap-2">
              <h1
                className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl font-bold text-dark_green mb-4 leading-none`}
              >
                <WordRotate
                  words={["Inteligente", "Personalizada", "Eficaz"]}
                  className="text-moss_green inline-block"
                  motionProps={customMotionProps}
                />
              </h1>
              <h1
                className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl  font-bold text-dark_green mb-4 leading-none`}
              >
                para você.
              </h1>
            </div>
          </div>
        </BoxReveal>
        {/* Subtítulo Centralizado */}
        {/* Removido o div extra e text-pretty, aplicado max-w no container pai */}
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
      {/* Grid das Colunas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
        {" "}
        {/* Adicionado max-w ao grid */}
        {/* Coluna Esquerda: Benefícios e Destaques */}
        <div className="flex flex-col items-start">
          <BoxReveal duration={0.5} boxColor="#ebf5df">
            <div className="p-4 rounded-lg mb-4">
              <Image
                src="/images/hero/iconNutricionista.png"
                alt="Ilustração de dieta personalizada"
                width={100}
                height={100}
                className="rounded-lg shadow-lg object-contain"
              />
              <h3
                className={`${fontTitle.className} text-lg font-semibold text-dark_green mb-1`}
              >
                Dieta Personalizada
              </h3>
              <p className={`${fontSubtitle.className} text-sm text-dim_gray`}>
                Ajustada às suas necessidades e objetivos.
              </p>
            </div>
          </BoxReveal>
          <BoxReveal duration={0.7} boxColor="#ebf5df">
            <div className="p-4 rounded-lg mb-4">
              <Image
                src="/images/hero/iconIA.png"
                alt="Ilustração de dieta personalizada"
                width={100}
                height={100}
                className="rounded-lg shadow-lg object-contain"
              />
              <h3
                className={`${fontTitle.className} text-lg font-semibold text-dark_green mb-1`}
              >
                Recomendação IA
              </h3>
              <p className={`${fontSubtitle.className} text-sm text-dim_gray`}>
                Receba recomendações otimizadas pela inteligência artificial.
              </p>
            </div>
          </BoxReveal>
          <BoxReveal duration={0.9} boxColor="#ebf5df">
            <div className="p-4 rounded-lg">
              <Image
                src="/images/hero/iconExercicesAndApp.png"
                alt="Ilustração de dieta personalizada"
                width={100}
                height={100}
                className="rounded-lg shadow-lg object-contain"
              />
              <h3
                className={`${fontTitle.className} text-lg font-semibold text-dark_green mb-1`}
              >
                Resultados Rápidos
              </h3>
              <p className={`${fontSubtitle.className} text-sm text-dim_gray`}>
                Tenha acesso a um plano eficaz em poucos minutos.
              </p>
            </div>
          </BoxReveal>
        </div>
        {/* Coluna Central: Imagem (oculta em telas pequenas) */}
        <div className="hidden md:flex flex-col items-center justify-center">
          {" "}
          {/* Adicionado justify-center */}
          <Image
            src="/images/hero/heroPrincipal.png"
            alt="Ilustração de dieta personalizada"
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 justify-between">
        <BoxReveal duration={1.3} boxColor="#768948">
        <div className="p-4 rounded-lg">
            <Image
              src="/images/hero/iconExercices.png"
              alt="Avatar do cliente"
              width={100}
              height={100}
              className="rounded-full mr-2"
            />
              <h3
                className={`${fontTitle.className} text-lg font-semibold text-dark_green mb-1`}
              >
                Mudança de Estilo de Vida
              </h3>
              <p className={`${fontSubtitle.className} text-sm text-dim_gray`}>
                Transforme sua relação com a comida e alcance seus objetivos.
              </p>
            </div>
          </BoxReveal>
          {/* <BoxReveal duration={1.1} boxColor="#ebf5df">
            <div className="p-4 rounded-lg mb-4 ">
              <Image
                src="/images/hero/iconPersonExample.png"
                alt="Avatar do cliente"
                width={120}
                height={120}
                className="rounded-sm m-2"
              />
              <p
                className={`${fontSubtitle.className} text-sm text-dim_gray italic`}
              >
                "NutriCalc mudou a minha vida! Finalmente consegui alcançar meus
                objetivos de forma saudável e sustentável."
              </p>
              <div className="flex items-center mt-2">
                <Image
                  src="/images/hero/iconExercices.png"
                  alt="Avatar do cliente"
                  width={32}
                  height={32}
                  className="rounded-full mr-2"
                />
                <div className="text-left">
                  <p
                    className={`${fontTitle.className} text-sm font-semibold text-dark_green`}
                  >
                    Maria Silva
                  </p>
                  <p
                    className={`${fontSubtitle.className} text-xs text-dim_gray`}
                  >
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </div>
          </BoxReveal> */}

          <BoxReveal duration={1.1} boxColor="#ebf5df">
            <div className="p-4 rounded-lg mb-4 bg-dark_green-600 shadow-md"> {/* Adicionado fundo e sombra */}
              <div className="w-[250px] h-[250px] rounded-lg shadow-lg overflow-hidden mb-2"> {/* Container com tamanho e estilo */}
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src="/images/hero/iconPersonExample.png" alt="Imagem Antes" />} // Mesma imagem por enquanto
                  itemTwo={<ReactCompareSliderImage src="/images/hero/iconPersonExample2.png" alt="Imagem Depois" />} // Mesma imagem por enquanto
                  style={{ width: '100%', height: '100%' }} // Garante que preencha o container
                />
              </div>
              <p className={`${fontSubtitle.className} text-sm text-honeydew italic`}>
                "NutriCalc mudou a minha vida! Finalmente consegui alcançar meus objetivos de forma saudável e sustentável."
              </p>
              <div className="flex items-center mt-2">
                <Image src="/images/hero/iconPersonExample.png" alt="Avatar do cliente" width={32} height={32} className="rounded-full mr-2"/>
                <div className="text-left">
                  <p className={`${fontTitle.className} text-sm font-semibold text-dark_green`}>Maria Silva</p>
                  <p className={`${fontSubtitle.className} text-xs text-honeydew italic`}>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </BoxReveal>
       
        </div>
      </div>
      {/* Botão Centralizado Abaixo das Colunas */}
      <BoxReveal duration={0.9} boxColor="#ebf5df">
        <Button
          className="bg-moss_green text-honeydew font-semibold px-8 py-3 rounded-full hover:bg-dim_gray transition-colors " /* Aumentado mt */
          size="lg"
        >
          Calcule Sua Dieta Agora{" "}
          <Sparkles className="ml-2 h-5 w-5 inline-block" />
        </Button>
      </BoxReveal>
    </section>
  );
}
