import { HoverEffect } from "../ui/card-hover-effect";

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
      className: "col-span-1 md:col-span-2 lg:col-span-3",  

    },
    {
      title: "Dieta no WhatsApp",
      description:
        "Receba seu plano alimentar diretamente no seu WhatsApp para maior comodidade.",
      link: "#dieta-whatsapp",
      className: "col-span-1 md:col-span-2 lg:col-span-3",  

    },
    {
      title: "Teste Gratuito de TMB e IMC",
      description:
        "Descubra suas métricas corporais e receba insights valiosos sobre sua saúde.",
      link: "#teste-gratuito",
      className: "col-span-1 md:col-span-2 lg:col-span-3",  

    },
    {
      title: "Alcance seus Objetivos",
      description:
        "Conte com um plano alimentar que se adapta ao seu estilo de vida e te ajuda a atingir suas metas.",
      link: "#alcance-objetivos",
      className: "col-span-1 md:col-span-2 lg:col-span-3",  

    },
  ];

  return (
    <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold text-center  text-dark_green">
          O que o NutriCalc faz por você
        </h2>
        <HoverEffect 
          items={projects.map((project) => ({
            title: project.title,
            description: project.description,
            link: project.link,
          }))}
        />
    </section>
  );
}
