import { fontSubtitle, fontTitle } from "@/config/fonts"; // Suas fontes
import { Button } from "@heroui/button";
import { Sparkles } from "lucide-react"; // ou outro ícone tech

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full py-12 md:py-20 xl:py-32 text-center">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <h1 className={`${fontTitle.className} text-4xl md:text-5xl lg:text-6xl font-bold text-dark_green mb-4`}>
          Dieta Inteligente
        </h1>

        {/* Subtítulo Complementar */}
        <p className={`${fontSubtitle.className} text-lg md:text-xl text-dim_gray mb-8`}>
          Métricas precisas e dieta personalizada com o poder da IA.
        </p>

        {/* Botão Chamativo */}
        <Button
          className="bg-primary text-honeydew font-semibold px-8 py-3 rounded-full hover:bg-dark_green-600 transition-colors"
          size="lg"
        >
          Calcule Sua Dieta Agora <Sparkles className="ml-2 h-5 w-5 inline-block" />
        </Button>

      </div>
    </section>
  );
}
