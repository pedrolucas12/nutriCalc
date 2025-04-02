import { BellIcon, CalendarIcon, FileTextIcon, Share2Icon, Sparkles } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Cálculo de TMB",
    description: "Descubra sua taxa metabólica basal com precisão.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex flex-col items-center justify-center h-full p-4 rounded-lg bg-dark_green-100">
        <Sparkles className="text-dark_green-500 h-6 w-6 mb-2" />
        <h3 className="text-lg font-semibold text-dark_green-700 mb-2">
          TMB Instantânea
        </h3>
        <p className="text-sm text-dim_gray text-center">
          Calcule sua Taxa Metabólica Basal em segundos.
        </p>
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Percentual de Gordura",
    description: "Saiba como seu corpo está em relação à saúde.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex flex-col items-center justify-center h-full p-4 rounded-lg bg-dark_green-100">
        <Sparkles className="text-dark_green-500 h-6 w-6 mb-2" />
        <h3 className="text-lg font-semibold text-dark_green-700 mb-2">
          Composição Corporal
        </h3>
        <p className="text-sm text-dim_gray text-center">
          Analise sua composição corporal com precisão.
        </p>
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Macros Personalizados",
    description: "Receba recomendações de proteínas, carboidratos e gorduras.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="flex flex-col items-center justify-center h-full p-4 rounded-lg bg-dark_green-100">
        <Sparkles className="text-dark_green-500 h-6 w-6 mb-2" />
        <h3 className="text-lg font-semibold text-dark_green-700 mb-2">
          Macros Inteligentes
        </h3>
        <p className="text-sm text-dim_gray text-center">
          Receba recomendações personalizadas de macronutrientes.
        </p>
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Dieta Ajustada",
    description: "Um plano alimentar feito exclusivamente para você.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="flex flex-col items-center justify-center h-full p-4 rounded-lg bg-dark_green-100">
        <Sparkles className="text-dark_green-500 h-6 w-6 mb-2" />
        <h3 className="text-lg font-semibold text-dark_green-700 mb-2">
          Plano Alimentar
        </h3>
        <p className="text-sm text-dim_gray text-center">
          Tenha um plano alimentar 100% ajustado às suas necessidades.
        </p>
      </div>
    ),
  },
];

export default function BentoGridSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-dark_green">
          O que o NutriCalc faz por você
        </h2>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
