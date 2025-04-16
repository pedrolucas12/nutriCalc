"use client";

import { fontTitle } from "@/config/fonts";

import {
  Activity,
  Scale,
  Utensils
} from "lucide-react";
import { useCallback, useState } from "react";
import { NutriCalcStepsStickyScroll } from "./stepsStickyScroll";



const STEPS = ["step-data", "step-metrics", "step-diet"];

const STEP_TITLES = [
  "Dados Pessoais",
  "Métricas Corporais",
  "Dieta Personalizada",
];

const STEP_DESCRIPTIONS = [
  "Insira seus dados como altura, peso, idade e nível de atividade física.",
  "Descubra seu IMC, taxa metabólica e percentual de gordura.",
  "Receba um plano alimentar personalizado com base em IA.",
];

const STEP_ICONS = [
  <Activity size={30} />,
  <Scale size={30} />,
  <Utensils size={30} />,
];

export default function AccordionSteps() {
  const [activeItem, setActiveItem] = useState<string>(STEPS[0]);

  const getColorClass = useCallback(
    (item: string): string => {
      return activeItem === item ? "text-dark_green-500" : "text-dim_gray";
    },
    [activeItem],
  );

  const getTextOpacityClass = useCallback(
    (item: string): string => {
      return activeItem === item ? "opacity-100" : "opacity-50";
    },
    [activeItem],
  );

  const handleAccordionChange = useCallback(
    (value: React.Key | null) => {
      if (value && value !== activeItem) {
        setActiveItem(value.toString());
      }
    },
    [activeItem],
  );

  return (
    <section className="w-full h-full flex flex-col justify-center items-center py-4 md:py-8 xl:py-12 gap-8">
      <div className="flex flex-col gap-2 items-center text-center text-pretty w-2/3">
        <h2 className={`${fontTitle.className} text-4xl font-bold text-dark_green mb-4`}>
          Como funciona o NutriCalc
        </h2>
        <p className="text-lg text-dim_gray">
          Descubra o poder da IA para uma dieta personalizada em três passos
          simples.
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-8 justify-between items-center w-full">
       <NutriCalcStepsStickyScroll />
      </div>
    </section>
  );
}
