import { Button } from "@heroui/button";
import { Dumbbell, Heart, Smile, Sparkles, Utensils } from "lucide-react";
import { useRef } from "react";
import { AnimatedBeam } from "../magicui/animated-beam";

export function CardNutricionIA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iaRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const happinessRef = useRef<HTMLDivElement>(null);
  const wellnessRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-full w-full overflow-hidden rounded-xl"
    >
      {/* Ícone central (IA) */}
      <div
        ref={iaRef}
        className="z-20 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Sparkles className="h-10 w-10 text-white" />
      </div>
      {/* Ícones periféricos */}
      <div ref={foodRef} className="absolute top-8 left-8 w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center shadow">
        <Utensils className="h-6 w-6 text-primary-700" />
      </div>
      <div ref={healthRef} className="absolute top-8 right-8 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow">
        <Heart className="h-6 w-6 text-red-500" />
      </div>
      <div ref={happinessRef} className="absolute bottom-8 left-8 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow">
        <Smile className="h-6 w-6 text-yellow-500" />
      </div>
      <div ref={wellnessRef} className="absolute bottom-8 right-8 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shadow">
        <Dumbbell className="h-6 w-6 text-emerald-700" />
      </div>
      {/* Animated Beams ligando cada ícone periférico ao central */}
      <AnimatedBeam containerRef={containerRef} fromRef={foodRef} toRef={iaRef} color="#a3b18a" colorTo="#588157" curvature={-60} />
      <AnimatedBeam containerRef={containerRef} fromRef={healthRef} toRef={iaRef} color="#ff6b6b" colorTo="#588157" curvature={60} />
      <AnimatedBeam containerRef={containerRef} fromRef={happinessRef} toRef={iaRef} color="#fbbf24" colorTo="#588157" curvature={-40} />
      <AnimatedBeam containerRef={containerRef} fromRef={wellnessRef} toRef={iaRef} color="#34d399" colorTo="#588157" curvature={40} />
      {/* Texto centralizado na parte inferior */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center z-30">
        <p className="text-xl font-bold text-primary-700">
            Nutrição Inteligente 
        </p>
        <Button color="primary" radius="full" size="sm" className="mt-2" variant="flat" >
          Saiba mais
        </Button>
      </div>
    </div>
  );
}
