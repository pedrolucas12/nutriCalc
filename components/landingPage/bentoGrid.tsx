import { HoverEffect } from "../ui/card-hover-effect";

export default function BentoGridSection() {

  const projects = [
    {
      title: "Dieta Personalizada",
      description:
        "Um plano alimentar único, criado sob medida para suas necessidades e objetivos.",
      link: "#dieta-personalizada",
    },
    {
      title: "IA para sua Dieta",
      description:
        "Aproveite o poder da inteligência artificial para otimizar sua alimentação.",
      link: "#ia-dieta",
    },
    {
      title: "Dieta no WhatsApp",
      description:
        "Receba seu plano alimentar diretamente no seu WhatsApp para maior comodidade.",
      link: "#dieta-whatsapp",
    },
    {
      title: "Teste Gratuito de TMB e IMC",
      description:
        "Descubra suas métricas corporais e receba insights valiosos sobre sua saúde.",
      link: "#teste-gratuito",
    },
    {
      title: "Alcance seus Objetivos",
      description:
        "Conte com um plano alimentar que se adapta ao seu estilo de vida e te ajuda a atingir suas metas.",
      link: "#alcance-objetivos",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-dark_green">
          O que o NutriCalc faz por você
        </h2>
        <HoverEffect 
          items={projects.map((project) => ({
            title: project.title,
            description: project.description,
            link: project.link,
          }))}
        />
      </div>
    </section>
  );
}
