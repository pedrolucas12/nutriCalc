"use client";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { CalculationResults } from "@/lib/calculations";
import { NutriMindFormData } from "@/lib/schemas";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bot, Loader2, Salad, Sparkles } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const DietFormSchema = z.object({
  meals: z.coerce.number().min(3).max(6), // Usando coerce para garantir a conversão
  whatsapp: z.string().min(11).max(11),
  observations: z.string().max(500).optional(),
});

interface DietFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  metrics: NutriMindFormData;
  results: CalculationResults;
}

export default function DietFormModal({ isOpen, onClose, metrics, results }: DietFormModalProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<z.infer<typeof DietFormSchema>>({
        resolver: zodResolver(DietFormSchema),
        defaultValues: {
          meals: 4,
        },
      });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof DietFormSchema>) => {
    setLoading(true);
    // Simule um delay para efeito de IA
    await new Promise((res) => setTimeout(res, 1800));
    setLoading(false);
    // Aqui você implementará a lógica de pagamento e geração da dieta
    console.log("Diet Form Data:", data);
  };

  return (
    <Modal
      backdrop="blur"
      classNames={{
        backdrop:
          "bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-primary-900/90 backdrop-blur-md",
        base: "bg-white/95 dark:bg-black/95 border border-primary-200 dark:border-primary-800 shadow-2xl",
        header: "border-b border-primary-100 dark:border-primary-800",
        closeButton: "hidden", // Garante que o botão X está oculto
      }}
      isOpen={isOpen}
      size="2xl"
      onClose={onClose}
      placement="center"
    >
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <div className="flex items-center gap-3">
              <Bot className="h-7 w-7 text-primary-600 animate-pulse" />
              <h3
                className={`${fontTitle.className} text-2xl text-primary-700 dark:text-primary-200`}
              >
                Dieta Inteligente por IA
              </h3>
              <Sparkles className="h-6 w-6 text-yellow-400 animate-bounce" />
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-6 p-4">
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-primary-400/30 via-primary-200/20 to-primary-600/30 rounded-full blur-lg animate-pulse" />
                  <Salad className="h-12 w-12 text-green-500 relative z-10 drop-shadow-lg" />
                </div>
                <p
                  className={`${fontSubtitle.className} text-center text-primary-700 dark:text-primary-200 text-lg`}
                >
                  Sua dieta exclusiva está a um passo de ser criada por nossa IA!
                </p>
                <p className="text-secondary-500 dark:text-secondary-300 text-sm text-center max-w-md">
                  Preencha as preferências finais e receba um plano alimentar{" "}
                  <span className="font-semibold text-primary-600">100% personalizado</span> com
                  base nas suas métricas e objetivos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-primary-700 dark:text-primary-200">
                    Quantidade de Refeições por Dia
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[3, 4, 5, 6].map((num) => (
                      <div key={num}>
                        <input
                          type="radio"
                          id={`meals-${num}`}
                          value={num}
                          defaultChecked={num === 4}
                          className="hidden peer"
                          {...register("meals", {
                            setValueAs: (value) => parseInt(value, 10), // Força a conversão para número
                          })}
                        />
                        <label
                          htmlFor={`meals-${num}`}
                          className="flex flex-col items-center justify-center p-4 text-primary-600 bg-white/80 dark:bg-black/80 border-2 border-primary-200 dark:border-primary-700 rounded-xl cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-200"
                        >
                          <span className="text-2xl font-bold">{num}</span>
                          <span className="text-sm text-primary-500">refeições</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.meals && (
                    <p className="text-xs text-danger-500 mt-1">{errors.meals.message}</p>
                  )}
                </div>
                <Input
                  errorMessage={errors.whatsapp?.message}
                  isInvalid={!!errors.whatsapp}
                  label="WhatsApp (apenas números)"
                  placeholder="11999999999"
                  {...register("whatsapp")}
                  className="bg-white/80 dark:bg-black/80"
                />

                <Textarea
                  errorMessage={errors.observations?.message}
                  isInvalid={!!errors.observations}
                  label="Observações sobre Alimentos"
                  placeholder="Ex: Alergias, intolerâncias, preferências..."
                  {...register("observations")}
                  className="bg-white/80 dark:bg-black/80"
                />
              </div>

              <div className="flex flex-col items-center mt-4">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-300">
                  <Loader2 className={`h-5 w-5 animate-spin ${loading ? "inline" : "hidden"}`} />
                  <span className="text-sm">
                    {loading
                      ? "Gerando sua dieta personalizada com IA..."
                      : "Sua dieta será criada em segundos por inteligência artificial!"}
                  </span>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button color="primary" type="submit" isLoading={loading}>
              Gerar Dieta (R$ 29,90)
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
