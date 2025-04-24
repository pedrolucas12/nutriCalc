import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Sparkles } from "lucide-react";

export default function FaqHero() {
  return (
    <div className="bg-primary-700 dark:bg-primary-900/30 ">
      <h2
        className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-300 dark:text-primary-200 mb-4`}
      >
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-7 w-7 text-primary-500 animate-bounce" />
          Perguntas Frequentes
        </span>
      </h2>
      <p
        className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto mb-10`}
      >
        Tire suas dúvidas sobre como a NutriMind funciona, segurança,
        personalização e facilidade de uso.
      </p>
    </div>
  );
}
