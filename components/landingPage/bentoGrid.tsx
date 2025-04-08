import { Ripple } from "../magicui/ripple";
import { HoverEffect } from "../ui/card-hover-effect"; // Ajuste o caminho
// Importe outros componentes que você usará nos cards (ex: gráficos)

export default function BentoGridSection() {
  const projects = [
    {
      title: "Dieta Personalizada",
      description:
        "Um plano alimentar único, criado sob medida para suas necessidades e objetivos.",
      link: "#dieta-personalizada",
      span: 2,
    },
    {
      title: "IA para sua Dieta",
      description:
        "Aproveite o poder da inteligência artificial para otimizar sua alimentação.",
      link: "#ia-dieta",
      content: (
        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 overflow-hidden">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <polyline points="0,50 10,40 30,45 50,20 70,30 90,10 100,25" fill="none" stroke="#bdeada" strokeWidth="2"/>
          </svg>
        </div>
      ),
    },
    {
      title: "Dieta no WhatsApp",
      description:
        "Receba seu plano alimentar diretamente no seu WhatsApp para maior comodidade.",
      link: "#dieta-whatsapp",
      content: (
        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 overflow-hidden">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <polyline points="0,50 10,40 30,45 50,20 70,30 90,10 100,25" fill="none" stroke="#bdeada" strokeWidth="2"/>
          </svg>
        </div>
      ),
    },
    {
      title: "Teste Gratuito de TMB e IMC",
      description:
        "Descubra suas métricas corporais e receba insights valiosos sobre sua saúde.",
      link: "#teste-gratuito",
      content: (
         <div className="absolute bottom-2 right-2 flex gap-1 opacity-40">
            <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">IMC</span>
            <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">TMB</span>
         </div>
      )
    },
    {
      title: "Alcance seus Objetivos",
      description:
        "Conte com um plano alimentar que se adapta ao seu estilo de vida e te ajuda a atingir suas metas.",
      link: "#alcance-objetivos",
       // Substitui a Image pelo Ripple
       content: (
          <Ripple /> // <-- Coloca o Ripple aqui
       )
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-dark_green">
          O que o NutriCalc faz por você
        </h2>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

