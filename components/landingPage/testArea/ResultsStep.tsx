import { Card } from "@heroui/card";
import { motion } from "framer-motion";
import { Info, Sparkles, Zap } from "lucide-react";

import ClientOnlyApexChart from "../../ui/client-pie-chart";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { CalculationResults } from "@/lib/calculations";
import { NutriMindFormData } from "@/lib/schemas";
import { useState } from "react";
import DietFormModal from "./DietFormModal";

interface ResultsStepProps {
  results: CalculationResults;
  formData: NutriMindFormData;
  onOpenDietModal: () => void;
}

const getBmiInterpretation = (bmi: number): string => {
  if (bmi < 18.5) return "Seu IMC indica que você está abaixo do peso ideal.";
  if (bmi < 25) return "Seu IMC está na faixa considerada normal. Ótimo!";
  if (bmi < 30) return "Seu IMC indica sobrepeso. Pequenos ajustes podem ajudar.";
  return "Seu IMC indica obesidade. É importante buscar orientação profissional.";
};



export default function ResultsStep({ results, formData }: ResultsStepProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDietModalOpen, setIsDietModalOpen] = useState(false);

  const handleGenerateDiet = () => {
    setIsDietModalOpen(true);
  };

  return (
<>
    <div className="space-y-6 p-2">
      <Card className="p-4 bg-primary-100 dark:bg-primary-900/50 border border-primary-200 dark:border-primary-700/50">
        {/* Conteúdo existente mantido igual */}
        <h4
          className={`${fontTitle.className} text-lg font-semibold text-primary-700 dark:text-primary-200 mb-2`}
        >
          Seu Resumo NutriMind
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Gráfico IMC */}
          <div className="w-full h-48 md:h-56">
            <ClientOnlyApexChart
              height={formData.height}
              imcValue={results.bmi}
              weight={formData.weight}
            />
          </div>
          {/* Textos */}
          <div
            className={`${fontSubtitle.className} text-sm space-y-2 text-secondary-700 dark:text-secondary-300 font-normal`}
          >
            <p>{getBmiInterpretation(results.bmi)}</p>
            <p>
              Sua Taxa Metabólica Basal (TMB) estimada é de{" "}
              <span className="text-primary-600 dark:text-primary-300 text-lg">{results.tmb}</span>{" "}
              calorias por dia.
            </p>
            {results.bodyFatPercentage !== null && (
              <p>
                Seu Percentual de Gordura Corporal estimado é de{" "}
                <span className="text-primary-600 dark:text-primary-300 text-lg">
                  {results.bodyFatPercentage}%
                </span>
                .
              </p>
            )}
            <p>
              Para manutenção do peso, seu gasto calórico diário estimado é de{" "}
              <span className="text-primary-600 dark:text-primary-300 text-lg">
                {results.dailyCalories}
              </span>{" "}
              calorias.
            </p>
            <p>
              Para seu objetivo de{" "}
              <span className="text-moss_green text-lg">
                {formData.goal === "lose"
                  ? "Emagrecer"
                  : formData.goal === "gain"
                    ? "Ganhar Massa"
                    : "Manter Peso"}
              </span>
              , a recomendação calórica é de aproximadamente{" "}
              <span className="text-moss_green text-lg">{results.goalCalories}</span> calorias
              diárias.
            </p>
          </div>
        </div>
      </Card>

      {/* Novo Componente - Botão de Chamada para Ação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative"
      >
        <Card className="overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-primary-400/20 to-primary-600/20"
            animate={{
              backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : ["0% 0%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative p-6 flex flex-col items-center gap-4">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <Zap className="h-6 w-6 text-yellow-500" />
              <h3 className={`${fontTitle.className} text-2xl text-primary-700 dark:text-primary-200`}>
                Pronto para o Próximo Passo?
              </h3>
            </motion.div>
            
            <p className={`${fontSubtitle.className} text-center text-secondary-600 dark:text-secondary-300 max-w-lg`}>
              Transforme essas métricas em um plano alimentar completo e personalizado, 
              gerado por IA com base no seu perfil único!
            </p>

            <motion.button
              className="relative group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerateDiet}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-8 py-4 bg-primary-600 dark:bg-primary-700 rounded-full leading-none flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className={`${fontTitle.className} text-lg text-white`}>
                  Gerar Dieta Personalizada
                </span>
                <span className="text-primary-200 text-sm">
                  (apenas R$ 29,90)
                </span>
              </div>
            </motion.button>

            <p className="text-xs text-secondary-500 dark:text-secondary-400 flex items-center gap-1">
              <Info className="h-3 w-3" />
              Receba seu plano completo instantaneamente no WhatsApp
            </p>
          </div>
        </Card>
      </motion.div>

      <div className="text-center p-3 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg border border-secondary-200 dark:border-secondary-700/50">
        <p className={`${fontSubtitle.className} text-xs text-secondary-500`}>
          <Info className="inline mr-1" size={14} />
          Estes são valores estimados. Para um plano alimentar completo e acompanhamento
          profissional, considere gerar sua dieta personalizada ou consultar um nutricionista.
        </p>
      </div>
    </div>

<DietFormModal
isOpen={isDietModalOpen}
onClose={() => setIsDietModalOpen(false)}
metrics={formData}
results={results}
/>
</>
  );
}