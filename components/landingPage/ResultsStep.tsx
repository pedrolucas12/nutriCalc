// components/landingPage/modalSteps/ResultsStep.tsx
import { fontSubtitle, fontTitle } from "@/config/fonts";
import { CalculationResults } from "@/lib/calculations";
import { NutriCalcFormData } from "@/lib/schemas";
import { Card } from "@heroui/card"; // Ajuste o caminho
import { Info } from "lucide-react";
import ClientOnlyApexChart from "../ui/client-pie-chart";

interface ResultsStepProps {
  results: CalculationResults;
  formData: NutriCalcFormData; // Recebe os dados do form para o gráfico
}

// Função auxiliar para interpretar o IMC
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
          Seu Resumo NutriCalc
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
          <div className={`${fontSubtitle.className} text-sm space-y-2 text-secondary-800 dark:text-secondary-200`}>
            <p>{getBmiInterpretation(results.bmi)}</p>
            <p>
              Sua Taxa Metabólica Basal (TMB) estimada é de{" "}
              <strong className="text-primary-600 dark:text-primary-300">{results.tmb}</strong> calorias por dia.
            </p>
            {results.bodyFatPercentage !== null && (
              <p>
                Seu Percentual de Gordura Corporal estimado é de{" "}
                <strong className="text-primary-600 dark:text-primary-300">{results.bodyFatPercentage}%</strong>.
              </p>
            )}
             <p>
              Para manutenção do peso, seu gasto calórico diário estimado é de{" "}
              <strong className="text-primary-600 dark:text-primary-300">{results.dailyCalories}</strong> calorias.
            </p>
             <p>
              Para seu objetivo de <strong className="text-moss_green">{formData.goal === 'lose' ? 'Emagrecer' : formData.goal === 'gain' ? 'Ganhar Massa' : 'Manter Peso'}</strong>,
              a recomendação calórica é de aproximadamente <strong className="text-moss_green">{results.goalCalories}</strong> calorias diárias.
            </p>
          </div>
        </div>
      </Card>

      <div className="text-center p-3 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg border border-secondary-200 dark:border-secondary-700/50">
        <p className={`${fontSubtitle.className} text-xs text-secondary-700 dark:text-secondary-300`}>
          <Info size={14} className="inline mr-1" />
          Estes são valores estimados. Para um plano alimentar completo e acompanhamento profissional,
          considere gerar sua dieta personalizada ou consultar um nutricionista.
        </p>
      </div>

      {/* Aqui você adicionaria o botão para ir para o pagamento da dieta personalizada */}
      {/* Exemplo:
      <div className="text-center pt-4">
          <Button color="success" variant="solid">
              Gerar Minha Dieta Personalizada Agora! (Pago)
          </Button>
      </div>
      */}
    </div>
  );
}
