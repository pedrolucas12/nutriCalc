"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { NutriCalcStepsStickyScroll } from "./stepsStickyScroll";

export default function AccordionSteps() {
  return (
    <section className="relative w-full  bg-primary-500 dark:bg-primary-900 rounded-lg">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-black opacity-10"></div>
      
      <div className="relative w-full h-full flex flex-col justify-start items-center py-20 md:py-24 xl:py-32">
        {/* Header Section */}
        <div className="flex flex-col gap-4 items-center text-center px-6 md:px-8 mb-16">
          <h2
            className={`${fontTitle.className} text-4xl md:text-5xl xl:text-6xl font-bold text-white dark:text-white max-w-4xl`}
          >
            Sua Dieta Personalizada em 5 Passos Fáceis
          </h2>
          <p
            className={`${fontSubtitle.className} text-xl md:text-2xl text-white/80 dark:text-white/80 max-w-3xl mx-auto`}
          >
            Veja como é simples transformar sua saúde com a ajuda da nossa tecnologia. Siga os passos e comece hoje mesmo!
          </p>
        </div>

        {/* Steps Content */}
        <div className="w-full h-full mx-auto px-4 md:px-8">
          <NutriCalcStepsStickyScroll />
        </div>
      </div>
    </section>
  );
}
