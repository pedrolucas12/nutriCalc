// components/landingPage/modalSteps/IntroStep.tsx
import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Info } from "lucide-react";

export default function IntroStep() {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-4 text-secondary-800 dark:text-secondary-200">
      <Info size={48} className="text-primary-500" />
      <h3 className={`${fontTitle.className} text-2xl font-semibold text-primary-800 dark:text-primary-100`}>
        Descubra Suas Métricas Essenciais
      </h3>
      <p className={`${fontSubtitle.className} text-md text-primary-500 dark:text-primary-200`}>
        Em apenas alguns passos, você terá acesso gratuito ao seu IMC, Taxa Metabólica Basal (TMB)
        e uma estimativa do seu Percentual de Gordura Corporal.
      </p>
      <p className={`${fontSubtitle.className} text-sm font-medium text-primary-400 dark:text-primary-300`}>
        Vamos começar? Clique em "Começar" abaixo.
      </p>
    </div>
  );
}
