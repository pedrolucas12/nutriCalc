"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ButtonForTestProps {
  onOpen: () => void;
}

export default function ButtonForTest({ onOpen }: ButtonForTestProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ scale: 1.07, boxShadow: "0 0 0 4px #58815744" }}
      whileTap={{ scale: 0.97 }}
      className="relative group bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-400 text-white font-bold px-10 py-5 rounded-full shadow-xl transition-all duration-200 outline-none border-none focus:ring-4 focus:ring-primary-300"
    >
      {/* Efeito de brilho */}
      <span className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-200 pointer-events-none" />
      <span className="flex items-center justify-center gap-3 relative z-10">
        <Sparkles className="h-7 w-7 text-yellow-300 animate-pulse" />
        <span className={`${fontTitle.className} text-xl md:text-2xl`}>
          Calcule Suas Métricas Grátis
        </span>
      </span>
      <span className={`${fontSubtitle.className} text-xs md:text-sm text-secondary-100 block mt-1 relative z-10`}>
        (IMC, TMB e % Gordura em segundos)
      </span>
    </motion.button>
  );
}
