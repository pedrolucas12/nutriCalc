// components/landingPage/modalSteps/IntroStep.tsx
import { Info } from "lucide-react";

import { fontSubtitle, fontTitle } from "@/config/fonts";

export default function IntroStep() {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-4 text-secondary-800 dark:text-secondary-200">
      <Info className="text-primary-500" size={48} />
      <h3
        className={`${fontTitle.className} text-2xl font-semibold text-primary-800 dark:text-primary-100`}
      >
        Descubra Suas Métricas Essenciais
      </h3>
      <p className={`${fontSubtitle.className} text-md text-primary-500 dark:text-primary-200`}>
        Em poucos passos, você terá acesso gratuito ao seu IMC, Taxa Metabólica Basal (TMB) e uma
        estimativa do seu Percentual de Gordura Corporal.
      </p>
      <p
        className={`${fontSubtitle.className} text-sm font-medium text-secondary-400 dark:text-primary-300`}
      >
        Vamos começar? Clique em &quot;Começar&quot; abaixo.{" "}
      </p>
    </div>
  );
}
