"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Radio, RadioGroup } from "@heroui/radio";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { NutriMindFormData, NutriMindFormSchema } from "@/lib/schemas";

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
    },
  });

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Linha 1: Altura e Peso */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Altura (cm)"
          placeholder="Ex: 175"
          type="number"
          {...register("height", { valueAsNumber: true })}
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
          color="primary"
          errorMessage={errors.height?.message}
          isInvalid={!!errors.height}
          variant="bordered"
        />
        <Input
          label="Peso (kg)"
          placeholder="Ex: 75.5"
          step="0.1"
          type="number"
          {...register("weight", { valueAsNumber: true })}
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
          color="primary"
          errorMessage={errors.weight?.message}
          isInvalid={!!errors.weight}
          variant="bordered"
        />
      </div>

      {/* Linha 2: Cintura e Pescoço */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Cintura (cm)"
          placeholder="Ex: 80"
          type="number"
          {...register("waist", { valueAsNumber: true })}
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
          color="primary"
          errorMessage={errors.waist?.message}
          isInvalid={!!errors.waist}
          variant="bordered"
        />
        <Input
          label="Pescoço (cm)"
          placeholder="Ex: 38"
          type="number"
          {...register("neck", { valueAsNumber: true })}
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
          color="primary"
          errorMessage={errors.neck?.message}
          isInvalid={!!errors.neck}
          variant="bordered"
        />
      </div>

      {/* Linha 3: Idade e Gênero */}
      <div className="grid grid-cols-2 gap-4 items-start">
        <Input
          label="Idade"
          placeholder="Ex: 30"
          type="number"
          {...register("age", { valueAsNumber: true })}
          classNames={{
            label: "text-secondary-700",
            input: "text-secondary-700",
          }}
          color="primary"
          errorMessage={errors.age?.message}
          isInvalid={!!errors.age}
          variant="bordered"
        />
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup
              classNames={{
                label: "text-secondary-700",
                wrapper: "gap-6",
                base: "flex flex-row items-center",
              }}
              errorMessage={errors.gender?.message}
              isInvalid={!!errors.gender}
              label="Gênero"
              orientation="horizontal"
              value={field.value}
              onValueChange={field.onChange}
            >
              <Radio
                classNames={{
                  label: "text-secondary-600",
                }}
                value="male"
              >
                Masculino
              </Radio>
              <Radio
                classNames={{
                  label: "text-secondary-600",
                }}
                value="female"
              >
                Feminino
              </Radio>
            </RadioGroup>
          )}
        />
      </div>

      {/* Linha 4: Nível de Atividade */}
      <Controller
  control={control}
  name="activityLevelFactor"
  render={({ field }) => (
    <Autocomplete
      color="primary"
      errorMessage={errors.activityLevelFactor?.message}
      isInvalid={!!errors.activityLevelFactor}
      label="Nível de Atividade Física"
      placeholder="Selecione seu nível"
      selectedKey={field.value?.toString()}
      variant="bordered"
      onSelectionChange={(value) => field.onChange(Number(value))}
    >
      {activityLevels.map((level) => (
        <AutocompleteItem
          key={level.value.toString()}
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
        control={control}
        name="goal"
        render={({ field }) => (
          <RadioGroup
            color="primary"
            errorMessage={errors.goal?.message}
            isInvalid={!!errors.goal}
            label="Objetivo Principal"
            value={field.value}
            onValueChange={field.onChange}
          >
            <Radio
              classNames={{
                label: "text-secondary-600",
              }}
              value="lose"
            >
              Emagrecer
            </Radio>
            <Radio
              classNames={{
                label: "text-secondary-600",
              }}
              value="maintain"
            >
              Manter Peso
            </Radio>
            <Radio
              classNames={{
                label: "text-secondary-600",
              }}
              value="gain"
            >
              Ganhar Massa
            </Radio>
          </RadioGroup>
        )}
      />

      {/* Botão de Submit */}
      <div className="flex flex-row justify-end pt-4">
        <Button
          color="primary"
          isDisabled={isSubmitting}
          isLoading={isSubmitting}
          size="lg"
          type="submit"
        >
          {isSubmitting ? "Calculando..." : "Gerar Métricas"}
        </Button>
      </div>
    </form>
  );
}
