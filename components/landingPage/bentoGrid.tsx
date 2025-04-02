import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
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
      <p>teste</p>
      // <Marquee
      //   pauseOnHover
      //   className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      // >
      //   <div className="relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 bg-gray-100">
      //     <p className="text-sm font-medium">Taxa Metabólica Basal</p>
      //     <blockquote className="mt-2 text-xs">
      //       Saiba como calcular a energia que seu corpo precisa para funcionar.
      //     </blockquote>
      //   </div>
      // </Marquee>
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
      <div className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out">
        <p className="text-sm font-medium">Percentual de Gordura</p>
        <blockquote className="mt-2 text-xs">
          Descubra como calcular a composição corporal com precisão.
        </blockquote>
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
      <div className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out">
        <p className="text-sm font-medium">Macros Personalizados</p>
        <blockquote className="mt-2 text-xs">
          Ajuste sua dieta com base nas suas necessidades diárias.
        </blockquote>
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
      <div className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out">
        <p className="text-sm font-medium">Dieta Ajustada</p>
        <blockquote className="mt-2 text-xs">
          Receba um plano alimentar personalizado para seus objetivos.
        </blockquote>
      </div>
    ),
  },
];

export default function BentoGridSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
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
