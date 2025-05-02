// lib/calculations.ts
export interface UserData {
  height: number; // cm
  weight: number; // kg
  waist: number; // cm
  neck: number; // cm
  age: number; // anos
  gender: "male" | "female";
  // Adicionando Fator de Atividade e Objetivo para cálculo de calorias
  activityLevelFactor: number; // Ex: 1.2 (sedentário), 1.55 (moderado), 1.9 (muito ativo)
  goal: "lose" | "maintain" | "gain"; // Objetivo
}

export interface CalculationResults {
  bmi: number;
  tmb: number;
  bodyFatPercentage: number | null; // Pode ser nulo
  dailyCalories: number;
  goalCalories: number; // Calorias ajustadas para o objetivo
}

// Índice de Massa Corporal (IMC)
export function calculateBMI(heightCm: number, weightKg: number): number {
  if (heightCm <= 0 || weightKg <= 0) return 0;
  const heightM = heightCm / 100;

  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
}

// Taxa Metabólica Basal (TMB) - Mifflin-St Jeor
export function calculateTMB(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: "male" | "female"
): number {
  if (weightKg <= 0 || heightCm <= 0 || age <= 0) return 0;
  let tmb: number;

  if (gender === "male") {
    tmb = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    tmb = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  return Math.round(tmb);
}

// Percentual de Gordura Corporal - Fórmula da Marinha (Simplificada - requer quadril para mulheres)
// Retorna null se não for possível calcular com os dados fornecidos
export function calculateBodyFatPercentage(
  waistCm: number,
  neckCm: number,
  heightCm: number,
  gender: "male" | "female",
  hipCm?: number // Quadril é opcional, mas necessário para mulheres
): number | null {
  if (waistCm <= 0 || neckCm <= 0 || heightCm <= 0) return null;

  let bodyFat: number | null = null;
  const heightIn = heightCm / 2.54; // Converte para polegadas
  const neckIn = neckCm / 2.54;
  const waistIn = waistCm / 2.54;

  if (gender === "male") {
    // Fórmula Masculina: 86.010 * log10(cintura - pescoço) - 70.041 * log10(altura) + 36.76
    if (waistIn > neckIn) {
      bodyFat = 86.01 * Math.log10(waistIn - neckIn) - 70.041 * Math.log10(heightIn) + 36.76;
    }
  } else {
    // Fórmula Feminina: 163.205 * log10(cintura + quadril - pescoço) - 97.684 * log10(altura) - 78.387
    if (hipCm && hipCm > 0) {
      const hipIn = hipCm / 2.54;

      if (waistIn + hipIn > neckIn) {
        bodyFat =
          163.205 * Math.log10(waistIn + hipIn - neckIn) - 97.684 * Math.log10(heightIn) - 78.387;
      }
    } else {
      // Não é possível calcular sem quadril para mulheres com esta fórmula
      return null;
    }
  }

  return bodyFat !== null ? parseFloat(Math.max(0, bodyFat).toFixed(1)) : null; // Garante não negativo
}

// Calorias Diárias (TMB * Fator de Atividade)
export function calculateDailyCalories(tmb: number, activityFactor: number): number {
  return Math.round(tmb * activityFactor);
}

// Calorias para o Objetivo
export function calculateGoalCalories(
  dailyCalories: number,
  goal: "lose" | "maintain" | "gain"
): number {
  switch (goal) {
    case "lose":
      return Math.round(dailyCalories * 0.8); // Déficit de 20% (ajustável)
    case "gain":
      return Math.round(dailyCalories * 1.15); // Superávit de 15% (ajustável)
    case "maintain":
    default:
      return dailyCalories;
  }
}
