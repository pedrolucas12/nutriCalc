import { fontSubtitle, fontTitle } from "@/config/fonts";
import { BellIcon, CalendarIcon, FileTextIcon, Share2Icon, Sparkles } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Cálculo de TMB",
    description: "Descubra sua taxa metabólica basal com precisão.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-1 bg-dark_green-100", // Fundo padrão claro
    background: ( // Conteúdo estático simples para este card
      <div className="flex flex-col items-center justify-center h-full p-4">
        <Sparkles className="text-dark_green-500 h-8 w-8 mb-2" />
        <h3 className={`${fontTitle.className} text-lg font-semibold text-dark_green-700 mb-1 text-center`}>
          TMB Instantânea
        </h3>
        <p className={`${fontSubtitle.className} text-sm text-dim_gray text-center`}>
          Calcule sua energia basal.
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
    className: "col-span-3 lg:col-span-2 bg-dark_green-100", // Fundo padrão claro
    background: ( // Conteúdo estático simples
      <div className="flex flex-col items-center justify-center h-full p-4">
        <Sparkles className="text-dark_green-500 h-8 w-8 mb-2" />
        <h3 className={`${fontTitle.className} text-lg font-semibold text-dark_green-700 mb-1 text-center`}>
          Composição Corporal
        </h3>
        <p className={`${fontSubtitle.className} text-sm text-dim_gray text-center`}>
          Analise sua gordura corporal.
        </p>
      </div>
    ),
  },
  {
    // Card destacado com o fundo Spline
    Icon: Share2Icon, // Ícone ainda visível
    name: "Macros Personalizados",
    description: "Recomendações de nutrientes geradas por IA.",
    href: "#",
    cta: "Descubra",
    // Adiciona relative e overflow-hidden para conter o iframe absoluto
    // Remove a cor de fundo padrão, pois o iframe cobrirá
    // Adiciona text-white ou text-honeydew para contraste com o fundo Spline
    className: "col-span-3 lg:col-span-2 relative overflow-hidden text-honeydew",
    background: (
      // Iframe posicionado absolutamente para preencher o card
      <iframe
        src='https://my.spline.design/clonercubesgenerativecopy-5813a017e55a53615b397b686933055e/'
        frameBorder='0'
        // z-0 para ficar atrás do conteúdo do card (que o BentoCard deve colocar acima)
        // rounded-lg para herdar o arredondamento do card
        className='absolute inset-0 w-full h-full z-0 pointer-events-none rounded-lg'
        title="Spline Background Animation for Macros"
      ></iframe>
      // O conteúdo (Icon, name, description, cta) será renderizado pelo BentoCard
      // por cima deste background. As cores do texto foram ajustadas no className acima.
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Dieta Ajustada",
    description: "Um plano alimentar feito exclusivamente para você.",
    href: "#",
    cta: "Saiba mais",
    className: "col-span-3 lg:col-span-1 bg-dark_green-100", // Fundo padrão claro
    background: ( // Conteúdo estático simples
      <div className="flex flex-col items-center justify-center h-full p-4">
        <Sparkles className="text-dark_green-500 h-8 w-8 mb-2" />
        <h3 className={`${fontTitle.className} text-lg font-semibold text-dark_green-700 mb-1 text-center`}>
          Plano Alimentar
        </h3>
        <p className={`${fontSubtitle.className} text-sm text-dim_gray text-center`}>
          Sua dieta sob medida.
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
