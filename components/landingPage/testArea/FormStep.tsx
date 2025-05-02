"use client";

import { NutriMindFormData, NutriMindFormSchema } from "@/lib/schemas";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Radio, RadioGroup } from "@heroui/radio";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

interface FormStepProps {
  onSubmit: (data: NutriMindFormData) => void;
}

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
    control,
    formState: { errors, isSubmitting },
  } = useForm<NutriMindFormData>({
    resolver: zodResolver(NutriMindFormSchema),
    defaultValues: {
      gender: undefined,
      goal: undefined,
      activityLevelFactor: undefined,
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Linha 1: Altura e Peso */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Altura (cm)"
          type="number"
          placeholder="Ex: 175"
          {...register("height", { valueAsNumber: true })}
          errorMessage={errors.height?.message}
          isInvalid={!!errors.height}
          variant="bordered"
          color="primary"
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
        />
        <Input
          label="Peso (kg)"
          type="number"
          placeholder="Ex: 75.5"
          step="0.1"
          {...register("weight", { valueAsNumber: true })}
          errorMessage={errors.weight?.message}
          isInvalid={!!errors.weight}
          variant="bordered"
          color="primary"
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
        />
      </div>

      {/* Linha 2: Cintura e Pescoço */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Cintura (cm)"
          type="number"
          placeholder="Ex: 80"
          {...register("waist", { valueAsNumber: true })}
          errorMessage={errors.waist?.message}
          isInvalid={!!errors.waist}
          variant="bordered"
          color="primary"
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
        />
        <Input
          label="Pescoço (cm)"
          type="number"
          placeholder="Ex: 38"
          {...register("neck", { valueAsNumber: true })}
          errorMessage={errors.neck?.message}
          isInvalid={!!errors.neck}
          variant="bordered"
          color="primary"
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
        />
      </div>

      {/* Linha 3: Idade e Gênero */}
      <div className="grid grid-cols-2 gap-4 items-start">
        <Input
          label="Idade"
          type="number"
          placeholder="Ex: 30"
          {...register("age", { valueAsNumber: true })}
          errorMessage={errors.age?.message}
          isInvalid={!!errors.age}
          variant="bordered"
          color="primary"
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
        />
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
              classNames={{
                label: "text-secondary-700",
                wrapper: "gap-6",
                base: "flex flex-row items-center"
              }}
            >
              <Radio value="male" classNames={{
                label: "text-secondary-600",
              }}>
                Masculino
              </Radio>
              <Radio value="female" classNames={{
                label: "text-secondary-600",
              }}>
                Feminino
              </Radio>
            </RadioGroup>
          )}
        />
      </div>

      {/* Linha 4: Nível de Atividade */}
      <Controller
        name="activityLevelFactor"
        control={control}
        render={({ field }) => (
          <Autocomplete
            label="Nível de Atividade Física"
            placeholder="Selecione seu nível"
            selectedKey={field.value?.toString()}
            onSelectionChange={(value) => field.onChange(Number(value))}
            errorMessage={errors.activityLevelFactor?.message}
            isInvalid={!!errors.activityLevelFactor}
            variant="bordered"
            color="primary"
          >
            {activityLevels.map((level) => (
              <AutocompleteItem
                key={level.value.toString()}
                value={level.value.toString()}
                className="text-secondary-600 data-[selected=true]:text-primary-500"
              >
                {level.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        )}
      />

      {/* Linha 5: Objetivo */}
      <Controller
        name="goal"
        control={control}
        render={({ field }) => (
          <RadioGroup
            label="Objetivo Principal"
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={errors.goal?.message}
            isInvalid={!!errors.goal}
            color="primary"
       
          >
            <Radio value="lose" classNames={{
              label: "text-secondary-600",
            }}>
              Emagrecer
            </Radio>
            <Radio value="maintain" classNames={{
              label: "text-secondary-600",
            }}>
              Manter Peso
            </Radio>
            <Radio value="gain" classNames={{
              label: "text-secondary-600",
            }}>
              Ganhar Massa
            </Radio>
          </RadioGroup>
        )}
      />

      {/* Botão de Submit */}
      <div className="flex flex-row justify-end pt-4">
        <Button
          type="submit"
          color="primary"
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
          size="lg"
        >
          {isSubmitting ? "Calculando..." : "Gerar Métricas"}
        </Button>
      </div>
    </form>
  );
}