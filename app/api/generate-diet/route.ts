// app/api/generate-diet/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { metrics, dietPreferences } = await req.json();

    const prompt = `Gere uma dieta personalizada com as seguintes características:
    - Métricas do usuário:
      * Peso: ${metrics.weight}kg
      * Altura: ${metrics.height}cm
      * Idade: ${metrics.age}
      * Gênero: ${metrics.gender === 'male' ? 'Masculino' : 'Feminino'}
      * Objetivo: ${metrics.goal === 'lose' ? 'Emagrecer' : metrics.goal === 'gain' ? 'Ganhar massa' : 'Manter peso'}
      * Calorias diárias: ${metrics.goalCalories}
    
    - Preferências:
      * Quantidade de refeições: ${dietPreferences.meals}
      * Observações: ${dietPreferences.observations || 'Nenhuma'}

    Formate a dieta para 7 dias, separando por refeições, incluindo:
    - Horários sugeridos
    - Alimentos e quantidades em gramas/ml
    - Calorias por refeição
    - Macronutrientes (Proteínas, Carboidratos, Gorduras)
    - Dicas de preparação`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const dietPlan = completion.choices[0].message.content;

    return NextResponse.json({ diet: dietPlan });
  } catch (error) {
    console.error("Erro ao gerar dieta:", error);
    return NextResponse.json({ error: "Erro ao gerar dieta" }, { status: 500 });
  }
}