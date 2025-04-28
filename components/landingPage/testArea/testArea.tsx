"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { motion } from "framer-motion";
import { Activity, Calculator, HeartPulse } from "lucide-react";
import { useState } from "react";
import ButtonForTest from "./ButtonForTest";
import NutriCalcModal from "./NutriCalcModal";

export default function TestArea() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="w-full flex flex-col items-center justify-center ">
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="relative w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border border-primary-200/40 bg-white/90 dark:bg-black/80 backdrop-blur-lg p-10 flex flex-col items-center gap-8"
      >
        {/* Efeito de brilho animado */}
        <motion.div
          className="absolute -inset-1 rounded-3xl pointer-events-none z-0"
          style={{
            background: "linear-gradient(120deg, #58815733 0%, #dad7cd33 100%)",
            filter: "blur(12px)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Título e subtítulo */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2">
          <h2
            className={`${fontTitle.className} text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-200 drop-shadow-lg`}
          >
            Descubra Suas Métricas <span className="text-secondary-500">Gratuitamente</span>
          </h2>
          <p
            className={`${fontSubtitle.className} text-lg md:text-2xl text-secondary-700 dark:text-secondary-300 max-w-xl mx-auto`}
          >
            Calcule seu <span className="font-bold text-primary-600 dark:text-primary-300">IMC</span>, <span className="font-bold text-primary-600 dark:text-primary-300">TMB</span> e <span className="font-bold text-primary-600 dark:text-primary-300">% de Gordura</span> em segundos. Veja na prática como a tecnologia pode transformar sua saúde!
          </p>
        </div>

        {/* Ícones animados */}
        <div className="relative z-10 flex flex-row items-center justify-center gap-6 mt-2 mb-2">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8 }}
            className="bg-primary-100 dark:bg-primary-900/60 p-4 rounded-full shadow-md"
          >
            <Calculator className="h-8 w-8 text-primary-600 dark:text-primary-200" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15, rotate: -8 }}
            className="bg-secondary-100 dark:bg-secondary-900/60 p-4 rounded-full shadow-md"
          >
            <HeartPulse className="h-8 w-8 text-secondary-600 dark:text-secondary-200" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8 }}
            className="bg-primary-100 dark:bg-primary-900/60 p-4 rounded-full shadow-md"
          >
            <Activity className="h-8 w-8 text-primary-600 dark:text-primary-200" />
          </motion.div>
        </div>

        {/* Chamada para ação */}
        <motion.div
          className="relative z-10 w-full flex flex-col items-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          <ButtonForTest onOpen={handleOpenModal} />
          <span className="mt-3 text-sm text-secondary-500 dark:text-secondary-300">
            Não precisa de cadastro. Resultados instantâneos!
          </span>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <NutriCalcModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
