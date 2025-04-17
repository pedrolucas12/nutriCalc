// lib/schemas.ts
import * as z from "zod";

export const nutriCalcFormSchema = z.object({
  height: z.number({ required_error: "Altura é obrigatória" }).min(50, "Altura inválida").max(250, "Altura inválida"),
  weight: z.number({ required_error: "Peso é obrigatório" }).min(30, "Peso inválido").max(300, "Peso inválido"),
  waist: z.number({ required_error: "Cintura é obrigatória" }).min(30, "Cintura inválida").max(200, "Cintura inválida"),
  neck: z.number({ required_error: "Pescoço é obrigatório" }).min(15, "Pescoço inválido").max(100, "Pescoço inválido"),
  age: z.number({ required_error: "Idade é obrigatória" }).min(15, "Idade mínima é 15").max(100, "Idade máxima é 100"),
  gender: z.enum(["male", "female"], { required_error: "Selecione o gênero" }),
  activityLevelFactor: z.number({ required_error: "Selecione o nível de atividade" }), // Armazena o fator diretamente
  goal: z.enum(["lose", "maintain", "gain"], { required_error: "Selecione o objetivo" }),
  // hip: z.number().min(30).max(200).optional(), // Adicionar se for pedir quadril
});

export type NutriCalcFormData = z.infer<typeof nutriCalcFormSchema>;
