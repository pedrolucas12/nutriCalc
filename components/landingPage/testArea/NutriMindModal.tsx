"use client";

import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { useState } from "react";

import DietFormModal from "./DietFormModal"; // Novo import
import FormStep from "./FormStep";
import IntroStep from "./IntroStep";
import ResultsStep from "./ResultsStep";

import {
  CalculationResults,
  calculateBMI,
  calculateBodyFatPercentage,
  calculateDailyCalories,
  calculateGoalCalories,
  calculateTMB,
} from "@/lib/calculations";
import { NutriMindFormData } from "@/lib/schemas";

interface NutriMindModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NutriMindModal({ isOpen, onClose }: NutriMindModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [formData, setFormData] = useState<NutriMindFormData | null>(null);
  const [isDietModalOpen, setIsDietModalOpen] = useState(false); // Novo estado

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

  const handleFormSubmit = (data: NutriMindFormData) => {
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

  const handleOpenDietModal = () => {
    setIsDietModalOpen(true);
  };

  const handleCloseDietModal = () => {
    setIsDietModalOpen(false);
  };

  const resetModal = () => {
    setCurrentStep(1);
    setResults(null);
    setFormData(null);
    setIsDietModalOpen(false);
    onClose();
  };

  return (
    <>
      <Modal
        hideCloseButton
        backdrop="blur"
        classNames={{
          backdrop: "bg-black/70 backdrop-blur-md",
          base: "bg-white/80 dark:bg-black/85 backdrop-blur-lg border border-white/20 dark:border-secondary-700/60 shadow-2xl",
          header: "border-b border-white/15 dark:border-secondary-700/60",
          footer: "border-t border-white/15 dark:border-secondary-700/60",
          closeButton: "hidden",
        }}
        isDismissable={false}
        isOpen={isOpen}
        placement="center"
        scrollBehavior="inside"
        size="2xl"
        onClose={resetModal}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 text-primary-700 dark:text-primary-200">
              <h2 className="text-xl font-semibold">
                {currentStep === 1 && "Bem vindo ao Cálculo NutriMind!"}
                {currentStep === 2 && "Insira Seus Dados"}
                {currentStep === 3 && "Seus Resultados"}
              </h2>
            </ModalHeader>
            <ModalBody>
              {currentStep === 1 && <IntroStep />}
              {currentStep === 2 && <FormStep onSubmit={handleFormSubmit} />}
              {currentStep === 3 && results && formData && (
                <ResultsStep 
                  formData={formData} 
                  results={results} 
                  onOpenDietModal={handleOpenDietModal} // Passando a função aqui
                />
              )}
            </ModalBody>
            <ModalFooter className="flex justify-end gap-3">
              {currentStep === 1 && (
                <>
                  <Button
                    className="min-w-[100px]"
                    color="danger"
                    variant="light"
                    onPress={resetModal}
                  >
                    Cancelar
                  </Button>
                  <Button className="min-w-[100px]" color="primary" onPress={handleNextStep}>
                    Começar
                  </Button>
                </>
              )}

              {currentStep === 3 && (
                <Button className="min-w-[100px]" color="primary" onPress={resetModal}>
                  Fechar
                </Button>
              )}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>

      {/* Modal da Dieta */}
      {formData && results && (
        <DietFormModal
          isOpen={isDietModalOpen}
          onClose={handleCloseDietModal}
          metrics={formData}
          results={results}
        />
      )}
    </>
  );
}