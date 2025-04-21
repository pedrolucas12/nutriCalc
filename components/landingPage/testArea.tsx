// components/landingPage/TestArea.tsx
"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { useState } from "react";
import ButtonForTest from "./ButtonForTest";
import NutriCalcModal from "./NutriCalcModal"; // Importa a modal

export default function TestArea() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-20 bg-primary-100 dark:bg-primary-900/50 rounded-lg shadow-inner">
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-200 mb-4`}
        >
          Descubra Suas Métricas Gratuitamente
        </h2>
        <p
          className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto mb-8`}
        >
          Calcule seu IMC, Taxa Metabólica Basal e % de Gordura Corporal agora mesmo e dê o primeiro passo para uma vida mais saudável!
        </p>
      </div>
      <ButtonForTest onOpen={handleOpenModal} />

      {/* Renderiza a Modal */}
      <NutriCalcModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
