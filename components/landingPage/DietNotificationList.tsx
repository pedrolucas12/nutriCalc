// Crie um novo arquivo, por exemplo: components/magicui/diet-notification-list.tsx

"use client";

import { cn } from "@/lib/utils"; // Ajuste o caminho
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Apple, Carrot, Drumstick, Utensils } from "lucide-react"; // Ícones relacionados à comida
import React from "react";
import { AnimatedList } from "../magicui/animated-list";

// Interface para os itens da notificação da dieta
interface DietItem {
  meal: string; // Ex: Café da Manhã, Almoço, Jantar
  food: string; // Ex: Ovos Mexidos, Salada Completa
  icon: React.ComponentType; // Ícone para a refeição/comida
  color: string; // Cor associada (pode variar)
}

// Dados simulados das notificações da dieta
let dietNotifications: DietItem[] = [
  {
    meal: "Café da Manhã",
    food: "2 Ovos Mexidos + 1 Fruta",
    icon: Apple, // Ícone de fruta
    color: "#A3B18A", // sage
  },
  {
    meal: "Lanche",
    food: "Iogurte Natural + Castanhas",
    icon: Utensils, // Ícone genérico
    color: "#DAD7CD", // timberwolf
  },
  {
    meal: "Almoço",
    food: "Frango Grelhado + Salada Colorida",
    icon: Drumstick, // Ícone de frango
    color: "#588157", // fern-green
  },
  {
    meal: "Lanche da Tarde",
    food: "Mix de Vegetais",
    icon: Carrot, // Ícone de cenoura/vegetal
    color: "#768948", // moss_green
  },
  {
    meal: "Jantar",
    food: "Salmão Assado + Brócolis",
    icon: Utensils,
    color: "#3A5A40", // hunter-green
  },
  // Adicione mais itens se desejar
];

// Duplica para ter mais itens na animação (opcional)
dietNotifications = Array.from({ length: 4 }, () => dietNotifications).flat();

// Componente para renderizar uma única notificação de dieta
const DietNotification = ({ meal, food, icon, color }: DietItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[250px] cursor-pointer overflow-hidden rounded-lg p-2 shadow-sm",
        "bg-primary-100 dark:bg-primary-900", // Fundo claro e escuro
        "border border-dark_green-200 dark:border-dark_green-700" // Borda sutil
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className="flex size-8 items-center justify-center rounded-lg" // Ícone menor
          style={{ backgroundColor: color }}
        >
          <span className="text-white text-md">
            {React.createElement(icon)}
          </span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center font-extrabold text-black dark:text-secondary-500">
            <span>{meal}</span>
          </figcaption>
          <p className="text-sm  text-secondary-900 font-semibold dark:text-secondary-300">
            {food}
          </p>
        </div>
        <IconBrandWhatsapp className="ml-auto text-green-500" />{" "}
        {/* Ícone do WhatsApp */}
      </div>
    </figure>
  );
};

// Componente principal da lista animada de notificações de dieta
export default function DietNotificationList({
  className,
}: {
  className?: string;
}) {
  return (
    // Container da lista animada
    <div
      className={cn(
        // Relative para posicionar o gradiente
        // h-full para ocupar a altura do card pai
        // overflow-hidden para conter a animação
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      {/* Lista Animada */}
      <AnimatedList
        delay={1500} // Delay um pouco menor
      >
        {dietNotifications.map((item, idx) => (
          <DietNotification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
    </div>
  );
}
