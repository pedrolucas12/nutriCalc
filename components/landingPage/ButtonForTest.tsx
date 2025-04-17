// components/landingPage/ButtonForTest.tsx
"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts"; // Ajuste o caminho
import { Sparkles } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"; // Ajuste o caminho

interface ButtonForTestProps {
  onOpen: () => void; // Função para abrir a modal
}

export default function ButtonForTest({ onOpen }: ButtonForTestProps) {
  return (
    // Usando InteractiveHoverButton para o efeito visual
    <InteractiveHoverButton
      onClick={onOpen} // Chama onOpen ao clicar
      // Adiciona type="button" para clareza
      // Estilo do botão principal da página
      className="bg-moss_green text-honeydew font-semibold px-8 py-3 rounded-full hover:bg-dim_gray transition-colors cursor-pointer"
    >
      <span className="flex items-center justify-center relative z-10 gap-2">
        <span className={`${fontTitle.className} text-lg`}>Calcule Suas Métricas Grátis</span>
        <Sparkles className="h-5 w-5 inline-block" />
      </span>
       <span className={`${fontSubtitle.className} text-xs text-secondary-100/80 relative z-10 block mt-1`}>
          (IMC, TMB e % Gordura)
        </span>
    </InteractiveHoverButton>
  );
}
