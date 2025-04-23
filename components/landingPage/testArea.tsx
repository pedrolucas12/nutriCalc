// components/landingPage/TestArea.tsx
"use client";

import { useState } from "react";
import ButtonForTest from "./ButtonForTest";
import NutriCalcModal from "./NutriCalcModal"; // Importa a modal
import Hero from "./testArea/hero";

export default function TestArea() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="flex flex-col w-full items-center justify-center gap-4 p-4 bg-primary-700 dark:bg-primary-900 rounded-lg shadow-inner">
      <Hero />
      <ButtonForTest onOpen={handleOpenModal} />

      {/* Renderiza a Modal */}
      <NutriCalcModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
