"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";

import { NutriCalcStepsStickyScroll } from "./stepsStickyScroll";

export default function AccordionSteps() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center py-4 md:py-8 xl:py-12 gap-8">
      <div className="flex flex-col gap-2 items-center text-center text-pretty w-2/3">
        <h2
          className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-200 mb-4`}
        >
          Sua Dieta Personalizada em 5 Passos Fáceis
        </h2>
        <p
          className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto`}
        >
          Veja como é simples transformar sua saúde com a ajuda da nossa
          tecnologia. Siga os passos e comece hoje mesmo!
        </p>
      </div>
      <div className="flex flex-col gap-8 justify-between items-center w-full ">
        <NutriCalcStepsStickyScroll />
      </div>
    </section>
  );
}
