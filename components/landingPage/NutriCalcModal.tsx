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
  const [currentStep, setCurrentStep] = useState(1); // 1: Intro, 2: Form, 3: Results
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [formData, setFormData] = useState<NutriCalcFormData | null>(null); // Para passar ao ResultsStep

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 3) {
        setResults(null); // Limpa resultados ao voltar do step 3 para o 2
      }
    }
  };

  const handleFormSubmit = (data: NutriCalcFormData) => {
    console.log("Form Data Submitted:", data);
    setFormData(data); // Guarda os dados do form

    // Realiza os cálculos
    const tmb = calculateTMB(data.weight, data.height, data.age, data.gender);
    const bmi = calculateBMI(data.height, data.weight);
    const bodyFat = calculateBodyFatPercentage(data.waist, data.neck, data.height, data.gender /*, data.hip */); // Passar quadril se coletado
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
    setCurrentStep(3); // Avança para a tela de resultados
  };

  const resetModal = () => {
    setCurrentStep(1);
    setResults(null);
    setFormData(null);
    onClose(); // Fecha a modal
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={resetModal} // Reseta ao fechar
      size="2xl" // Tamanho da modal (ajuste: sm, md, lg, xl, 2xl, ..., full)
      backdrop="blur" // Efeito de fundo
      placement="center" // Posição
      scrollBehavior="inside" // Scroll dentro do body
      classNames={{ // Estilo glassmorphism/tech
          backdrop: "bg-black/80 backdrop-blur-sm",
          base: "bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/10 dark:border-secondary-700/50 shadow-xl",
          header: "border-b border-white/10 dark:border-secondary-700/50",
          footer: "border-t border-white/10 dark:border-secondary-700/50",
      }}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-primary-400 dark:text-primary-200">
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
