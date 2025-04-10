"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts"; // Suas fontes
import { Card, CardHeader } from "@heroui/card"; // Importa Card e CardHeader do HeroUI
import NextLink from "next/link"; // Importa NextLink para navegação
import { Ripple } from "../magicui/ripple"; // Importa Ripple
import { Magnetic } from "../motion-primitives/magnetic"; // Importa Magnetic

// Defina springOptions se ainda não estiver definido
const springOptions = { bounce: 0.1 };

export default function BentoGridSection() {
  // Seus dados de projeto, mantendo title, description, link, span e content
  const projects = [
    {
      title: "Dieta Personalizada",
      description:
        "Um plano alimentar único, criado sob medida para suas necessidades e objetivos.",
      link: "#dieta-personalizada",
      span: 7, // Ajustado para 7 de 12 colunas na primeira linha
    },
    {
      title: "IA para sua Dieta",
      description:
        "Aproveite o poder da inteligência artificial para otimizar sua alimentação.",
      link: "#ia-dieta",
      span: 5, // Ajustado para 5 de 12 colunas na primeira linha
      content: (
        <div className="absolute bottom-0 left-0 w-full h-3/4 opacity-10 overflow-hidden rounded-b-lg">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <polyline points="0,50 10,40 30,45 50,20 70,30 90,10 100,25" fill="none" stroke="#bdeada" strokeWidth="3"/>
          </svg>
        </div>
      ),
    },
    {
      title: "Dieta no WhatsApp",
      description:
        "Receba seu plano alimentar diretamente no seu WhatsApp para maior comodidade.",
      link: "#dieta-whatsapp",
      span: 4, // 4 de 12 colunas na segunda linha
      content: (
         <div className="absolute top-4 right-4 w-16 h-32 bg-dim_gray rounded-xl border-2 border-dark_green-900 opacity-30 flex items-center justify-center z-0">
           <div className="w-12 h-24 bg-dark_green-800 rounded-md"></div>
        </div>
      ),
    },
    {
      title: "Teste Gratuito de TMB e IMC",
      description:
        "Descubra suas métricas corporais e receba insights valiosos sobre sua saúde.",
      link: "#teste-gratuito",
      span: 4, // 4 de 12 colunas na segunda linha
      content: (
         <div className="absolute bottom-2 right-2 flex gap-1 opacity-40 z-0">
            <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">IMC</span>
            <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">TMB</span>
         </div>
      )
    },
    {
      title: "Alcance Seus Objetivos", // Título principal do card
      description: "NutriCalc cria o plano ideal para você transformar seu corpo.", // Descrição principal
      link: "#alcance-objetivos",
      span: 4, // 4 de 12 colunas na segunda linha
      content: (
        <div className="flex group h-full w-full absolute inset-0 z-0 overflow-hidden rounded-lg"> {/* Container para fundo e texto */}
          {/* Efeito Ripple como fundo */}
          <Ripple />
          {/* Container para o texto, posicionado sobre o Ripple */}
          <div className="gap-2 flex h-full w-full flex-col items-center justify-center absolute z-10 p-4">
            <Magnetic actionArea="global" intensity={0.2} range={200} springOptions={springOptions}>
              <p className="z-10 whitespace-pre-wrap text-center text-2xl md:text-3xl font-medium tracking-tighter text-white group-hover:scale-105 transition-all duration-350 ease-in-out pb-1 md:pb-2">
                Transforme seu <span className="text-honeydew">corpo</span>.
              </p>
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-xs md:text-sm text-honeydew">
                Deixe nossa IA criar o caminho ideal.
              </p>
            </Magnetic>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className={`${fontTitle.className} text-3xl font-bold text-center mb-10 text-dark_green`}>
          O que o NutriCalc faz por você
        </h2>
        <div className="gap-4 grid grid-cols-12 grid-rows-2 px-4 md:px-8">
          {projects.map((project, index) => (
            <NextLink href={project.link} key={index} className={`h-[300px] col-span-12 sm:col-span-${project.span || 4}`}>
              <Card className="w-full h-full relative overflow-hidden bg-moss_green text-honeydew transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                {project.content && (
                  <div className="absolute inset-0 z-0">
                    {project.content}
                  </div>
                )}
                <CardHeader className="absolute z-10 top-1 flex-col !items-start p-4">
                  <h4 className={`${fontTitle.className} text-honeydew font-medium text-large mb-1`}>
                    {project.title}
                  </h4>
                  {project.title !== "Alcance Seus Objetivos" && (
                     <p className={`${fontSubtitle.className} text-sm text-honeydew/80`}>
                       {project.description}
                     </p>
                  )}
                </CardHeader>
              </Card>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
}
