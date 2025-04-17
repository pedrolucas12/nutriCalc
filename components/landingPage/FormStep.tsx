// components/landingPage/modalSteps/FormStep.tsx
"use client";

import { NutriCalcFormData, nutriCalcFormSchema } from "@/lib/schemas"; // Ajuste o caminho
import { Button } from "@heroui/button"; // Ajuste o caminho
import { Input } from "@heroui/input"; // Ajuste o caminho
import { Radio, RadioGroup } from "@heroui/radio"; // Ajuste o caminho
import { Select, SelectItem } from "@heroui/select"; // Ajuste o caminho
import { zodResolver } from "@hookform/resolvers/zod";
import { Activity as ActivityIcon } from "lucide-react"; // Renomeado para evitar conflito
import { Controller, useForm } from "react-hook-form";

interface FormStepProps {
  onSubmit: (data: NutriCalcFormData) => void;
}

// Opções para níveis de atividade (Exemplo)
const activityLevels = [
  { label: "Sedentário (pouco ou nenhum exercício)", value: 1.2 },
  { label: "Levemente Ativo (1-3 dias/semana)", value: 1.375 },
  { label: "Moderadamente Ativo (3-5 dias/semana)", value: 1.55 },
  { label: "Muito Ativo (6-7 dias/semana)", value: 1.725 },
  { label: "Extremamente Ativo (trabalho físico + exercício)", value: 1.9 },
];

export default function FormStep({ onSubmit }: FormStepProps) {
  const {
    register,
    handleSubmit,
    control, // Para componentes controlados como Select e RadioGroup
    formState: { errors, isSubmitting },
  } = useForm<NutriCalcFormData>({
    resolver: zodResolver(nutriCalcFormSchema),
    defaultValues: {
      // Valores padrão opcionais
      gender: undefined,
      goal: undefined,
      activityLevelFactor: undefined,
    }
  });

  const handleFormSubmit = (data: NutriCalcFormData) => {
    onSubmit(data); // Chama a função passada pelo pai
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      {/* Linha 1: Altura e Peso */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            label="Altura (cm)"
            type="number"
            placeholder="Ex: 175"
            {...register("height", { valueAsNumber: true })}
            errorMessage={errors.height?.message}
            isInvalid={!!errors.height}
            variant="bordered"
            color="primary"

          />
        </div>
        <div>
          <Input
            label="Peso (kg)"
            type="number"
            placeholder="Ex: 75.5"
            step="0.1" // Permite decimais
            {...register("weight", { valueAsNumber: true })}
            errorMessage={errors.weight?.message}
            isInvalid={!!errors.weight}
            variant="bordered"
            color="primary"

          />
        </div>
      </div>

      {/* Linha 2: Cintura e Pescoço */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            label="Cintura (cm)"
            type="number"
            placeholder="Ex: 80"
            {...register("waist", { valueAsNumber: true })}
            errorMessage={errors.waist?.message}
            isInvalid={!!errors.waist}
            variant="bordered"
            color="primary"

          />
        </div>
        <div>
          <Input
            label="Pescoço (cm)"
            type="number"
            placeholder="Ex: 38"
            {...register("neck", { valueAsNumber: true })}
            errorMessage={errors.neck?.message}
            isInvalid={!!errors.neck}
            variant="bordered"
            color="primary"
          />
        </div>
      </div>

       {/* Linha 3: Idade e Gênero */}
       <div className="grid grid-cols-2 gap-4 items-end">
         <div>
            <Input
                label="Idade"
                type="number"
                placeholder="Ex: 30"
                {...register("age", { valueAsNumber: true })}
                errorMessage={errors.age?.message}
                isInvalid={!!errors.age}
                variant="bordered"
            color="primary"

            />
         </div>
         <div>
            <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                    <RadioGroup
                        label="Gênero"
                        orientation="horizontal"
                        value={field.value}
                        onValueChange={field.onChange}
                        errorMessage={errors.gender?.message}
                        isInvalid={!!errors.gender}
            color="primary"

                    >
                        <Radio value="male" >Masculino</Radio>
                        <Radio value="female">Feminino</Radio>
                    </RadioGroup>
                )}
            />
         </div>
       </div>

       {/* Linha 4: Nível de Atividade */}
       <div>
         <Controller
            name="activityLevelFactor"
            control={control}
            render={({ field }) => (
                <Select
                    label="Nível de Atividade Física"
                    placeholder="Selecione seu nível"
                    selectedKeys={field.value ? [String(field.value)] : []}
                    onChange={(e) => field.onChange(Number(e.target.value))} // Converte para número
                    errorMessage={errors.activityLevelFactor?.message}
                    isInvalid={!!errors.activityLevelFactor}
                    variant="bordered"
                    startContent={<ActivityIcon className="text-default-400" size={18}/>}
            color="primary"

                >
                    {activityLevels.map((level) => (
                        <SelectItem key={level.value} id={String(level.value)}>
                            {level.label}
                        </SelectItem>
                    ))}
                </Select>
            )}
         />
       </div>

       {/* Linha 5: Objetivo */}
       <div>
         <Controller
            name="goal"
            control={control}
            render={({ field }) => (
                 <RadioGroup
                    label="Qual seu objetivo principal?"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={field.onChange}
                    errorMessage={errors.goal?.message}
                    isInvalid={!!errors.goal}
                    color="primary"
                 >
                    <Radio value="lose">Emagrecer</Radio>
                    <Radio value="maintain">Manter Peso</Radio>
                    <Radio value="gain">Ganhar Massa</Radio>
                 </RadioGroup>
            )}
         />
       </div>


      {/* Botão de Submit */}
      <div className="flex justify-end pt-4">
        <Button type="submit" color="primary" isLoading={isSubmitting} isDisabled={isSubmitting}>
          {isSubmitting ? "Calculando..." : "Gerar Métricas"}
        </Button>
      </div>
    </form>
  );
}
