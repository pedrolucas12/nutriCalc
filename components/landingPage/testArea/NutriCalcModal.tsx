// components/landingPage/NutriCalcModal.tsx
"use client";

import { CalculationResults, calculateBMI, calculateBodyFatPercentage, calculateDailyCalories, calculateGoalCalories, calculateTMB } from "@/lib/calculations"; // Ajuste o caminho
import { NutriCalcFormData } from "@/lib/schemas"; // Ajuste o caminho
import { Button } from "@heroui/button"; // Ajuste o caminho
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal"; // Ajuste o caminho se usar HeroUI ou outra lib
import { useState } from "react";
import FormStep from "./FormStep";
import IntroStep from "./IntroStep";
import ResultsStep from "./ResultsStep";


interface NutriCalcModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NutriCalcModal({ isOpen, onClose }: NutriCalcModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [formData, setFormData] = useState<NutriCalcFormData | null>(null);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 3) {
        setResults(null);
      }
    }
  };

  const handleFormSubmit = (data: NutriCalcFormData) => {
    console.log("Form Data Submitted:", data);
    setFormData(data);

    const tmb = calculateTMB(data.weight, data.height, data.age, data.gender);
    const bmi = calculateBMI(data.height, data.weight);
    const bodyFat = calculateBodyFatPercentage(data.waist, data.neck, data.height, data.gender);
    const dailyCalories = calculateDailyCalories(tmb, data.activityLevelFactor);
    const goalCalories = calculateGoalCalories(dailyCalories, data.goal);

    const calculatedResults: CalculationResults = {
      bmi,
      tmb,
      bodyFatPercentage: bodyFat,
      dailyCalories,
      goalCalories,
    };

    console.log("Calculated Results:", calculatedResults);
    setResults(calculatedResults);
    setCurrentStep(3);
  };

  const resetModal = () => {
    setCurrentStep(1);
    setResults(null);
    setFormData(null);
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={resetModal}
      size="2xl"
      backdrop="blur" // Mantém o blur no fundo da página
      placement="center"
      scrollBehavior="inside"
      classNames={{
          // Backdrop: Fundo da página - pode manter mais escuro/blur
          backdrop: "bg-black/70 backdrop-blur-md", // Aumentado opacidade do preto
          // Base: O container da modal - Aumentar opacidade do fundo
          base: "bg-white/80 dark:bg-black/85 backdrop-blur-lg border border-white/20 dark:border-secondary-700/60 shadow-2xl", // Aumentado opacidade (ex: /80, /85), aumentado blur, borda mais visível, sombra maior
          header: "border-b border-white/15 dark:border-secondary-700/60", // Borda sutil
          footer: "border-t border-white/15 dark:border-secondary-700/60", // Borda sutil
      }}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-primary-700 dark:text-primary-200"> {/* Cor do texto ajustada */}
            {currentStep === 1 && "Bem-vindo ao Cálculo NutriCalc!"}
            {currentStep === 2 && "Insira Seus Dados"}
            {currentStep === 3 && "Seus Resultados"}
          </ModalHeader>
          <ModalBody>
            {currentStep === 1 && <IntroStep />}
            {currentStep === 2 && <FormStep onSubmit={handleFormSubmit} />}
            {currentStep === 3 && results && formData && <ResultsStep results={results} formData={formData} />}
          </ModalBody>
          <ModalFooter>
            {currentStep === 1 && (
              <>
                <Button color="danger" variant="light" onPress={resetModal}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleNextStep}>
                  Começar
                </Button>
              </>
            )}
            {currentStep === 2 && (
              <>
                <Button color="default" variant="light" onPress={handlePrevStep}>
                  Voltar
                </Button>
                {/* O botão de submit está dentro do FormStep */}
              </>
            )}
            {currentStep === 3 && (
              <Button color="primary" onPress={resetModal}>
                Fechar
              </Button>
            )}
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
