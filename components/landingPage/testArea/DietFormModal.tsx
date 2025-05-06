// components/landingPage/DietFormModal.tsx
"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";
import { Select, SelectItem } from "@heroui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { fontSubtitle, fontTitle } from "@/config/fonts";
import { CalculationResults } from "@/lib/calculations";
import { NutriMindFormData } from "@/lib/schemas";

const DietFormSchema = z.object({
  meals: z.number().min(3).max(6),
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
    formState: { errors },
  } = useForm<z.infer<typeof DietFormSchema>>({
    resolver: zodResolver(DietFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof DietFormSchema>) => {
    // Aqui você implementará a lógica de pagamento e geração da dieta
    console.log("Diet Form Data:", data);
  };

  return (
    <Modal
      backdrop="blur"
      classNames={{
        backdrop: "bg-black/70 backdrop-blur-md",
        base: "bg-white/90 dark:bg-black/90 backdrop-blur-lg border border-white/20",
        header: "border-b border-white/20",
      }}
      isOpen={isOpen}
      size="2xl"
      onClose={onClose}
    >
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <h3 className={`${fontTitle.className} text-2xl text-primary-700 dark:text-primary-200`}>
              Gerar Dieta Personalizada
            </h3>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-6 p-4">
              <p className={`${fontSubtitle.className} text-secondary-600 dark:text-secondary-300`}>
                Estamos quase lá! Precisamos apenas de mais alguns detalhes para gerar sua dieta
                perfeita.
              </p>

              <div className="space-y-4">
                <Select
                  errorMessage={errors.meals?.message}
                  isInvalid={!!errors.meals}
                  label="Quantidade de Refeições por Dia"
                  {...register("meals", { valueAsNumber: true })}
                >
                  {[3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num}>
                      {num} refeições
                    </SelectItem>
                  ))}
                </Select>

                <Input
                  errorMessage={errors.whatsapp?.message}
                  isInvalid={!!errors.whatsapp}
                  label="WhatsApp (apenas números)"
                  placeholder="11999999999"
                  {...register("whatsapp")}
                />

                <Textarea
                  errorMessage={errors.observations?.message}
                  isInvalid={!!errors.observations}
                  label="Observações sobre Alimentos"
                  placeholder="Ex: Alergias, intolerâncias, preferências..."
                  {...register("observations")}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancelar
            </Button>
            <Button color="primary" type="submit">
              Gerar Dieta (R$ 29,90)
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}