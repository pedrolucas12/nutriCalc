import { fontSubtitle, fontTitle } from "@/config/fonts";
import { CalculationResults } from "@/lib/calculations";
import { NutriMindFormData } from "@/lib/schemas";
import { Card } from "@heroui/card";
import { Info } from "lucide-react";
import ClientOnlyApexChart from "../../ui/client-pie-chart";

interface ResultsStepProps {
  results: CalculationResults;
  formData: NutriMindFormData;
}

const getBmiInterpretation = (bmi: number): string => {
  if (bmi < 18.5) return "Seu IMC indica que você está abaixo do peso ideal.";
  if (bmi < 25) return "Seu IMC está na faixa considerada normal. Ótimo!";
  if (bmi < 30) return "Seu IMC indica sobrepeso. Pequenos ajustes podem ajudar.";
  return "Seu IMC indica obesidade. É importante buscar orientação profissional.";
};

export default function ResultsStep({ results, formData }: ResultsStepProps) {
  return (
    <div className="space-y-6 p-2">
      <Card className="p-4 bg-primary-100 dark:bg-primary-900/50 border border-primary-200 dark:border-primary-700/50">
        <h4 className={`${fontTitle.className} text-lg font-semibold text-primary-700 dark:text-primary-200 mb-2`}>
          Seu Resumo NutriMind
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Gráfico IMC */}
          <div className="w-full h-48 md:h-56">
            <ClientOnlyApexChart
              imcValue={results.bmi}
              weight={formData.weight}
              height={formData.height}
            />
          </div>
          {/* Textos */}
          <div className={`${fontSubtitle.className} text-sm space-y-2 text-secondary-700 font-normal`}>
            <p>{getBmiInterpretation(results.bmi)}</p>
            <p>
              Sua Taxa Metabólica Basal (TMB) estimada é de{" "}
              <span className="text-primary-600 dark:text-primary-300 text-lg">{results.tmb}</span> calorias por dia.
            </p>
            {results.bodyFatPercentage !== null && (
              <p>
                Seu Percentual de Gordura Corporal estimado é de{" "}
                <span className="text-primary-600 dark:text-primary-300 text-lg">{results.bodyFatPercentage}%</span>.
              </p>
            )}
            <p>
              Para manutenção do peso, seu gasto calórico diário estimado é de{" "}
              <span className="text-primary-600 dark:text-primary-300 text-lg">{results.dailyCalories}</span> calorias.
            </p>
            <p>
              Para seu objetivo de <span className="text-moss_green text-lg">{formData.goal === 'lose' ? 'Emagrecer' : formData.goal === 'gain' ? 'Ganhar Massa' : 'Manter Peso'}</span>,
              a recomendação calórica é de aproximadamente <span className="text-moss_green text-lg">{results.goalCalories}</span> calorias diárias.
            </p>
          </div>
        </div>
      </Card>

      <div className="text-center p-3 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg border border-secondary-200 dark:border-secondary-700/50">
        <p className={`${fontSubtitle.className} text-xs text-secondary-500`}>
          <Info size={14} className="inline mr-1" />
          Estes são valores estimados. Para um plano alimentar completo e acompanhamento profissional,
          considere gerar sua dieta personalizada ou consultar um nutricionista.
        </p>
      </div>
    </div>
  );
}