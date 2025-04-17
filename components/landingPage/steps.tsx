"use client";

import { fontTitle } from "@/config/fonts";

import { NutriCalcStepsStickyScroll } from "./stepsStickyScroll";

export default function AccordionSteps() {

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
      <div className="flex flex-col gap-8 justify-between items-center w-full ">
       <NutriCalcStepsStickyScroll />
      </div>
    </section>
  );
}
