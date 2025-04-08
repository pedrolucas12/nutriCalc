import { Ripple } from "../magicui/ripple";
import { Magnetic } from "../motion-primitives/magnetic";
import { HoverEffect } from "../ui/card-hover-effect"; // Ajuste o caminho
// Importe outros componentes que você usará nos cards (ex: gráficos)

export default function BentoGridSection() {

  const springOptions = { bounce: 0.1 };

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
          <svg
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polyline
              points="0,50 10,40 30,45 50,20 70,30 90,10 100,25"
              fill="none"
              stroke="#bdeada"
              strokeWidth="2"
            />
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
          <svg
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polyline
              points="0,50 10,40 30,45 50,20 70,30 90,10 100,25"
              fill="none"
              stroke="#bdeada"
              strokeWidth="2"
            />
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
          <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">
            IMC
          </span>
          <span className="text-xs p-1 bg-dark_green-600 text-honeydew rounded">
            TMB
          </span>
        </div>
      ),
    },
    {
      title: "",
      description:
        "", // Descrição principal
      link: "#alcance-objetivos",
      content: (
        // Container principal para o conteúdo do card (fundo + texto)
        // Adicionado h-full w-full para garantir que preencha o card
        <div className="flex group h-full w-full">
          {/* Container para o texto, posicionado absolutamente sobre o Ripple */}
          <div className="gap-4 flex h-full w-full flex-col items-center justify-center overflow-hidden absolute z-10 p-4"> {/* Adicionado z-10 e padding */}
            <Magnetic
              actionArea="global"
              intensity={0.2}
              range={200}
              springOptions={springOptions} // Passa as opções de animação
            >
              {/* Título dentro do Magnetic */}
              <p className="z-10 whitespace-pre-wrap text-center text-4xl md:text-5xl font-medium tracking-tighter text-white group-hover:scale-105 transition-all duration-350 ease-in-out pb-2 md:pb-4"> {/* Ajustado tamanho e padding */}
                Transforme seu <span className="text-honeydew">corpo</span> com NutriCalc. {/* Texto focado em objetivos, cor de destaque ajustada */}
              </p>
              {/* Descrição que aparece no hover */}
              <p className="group-hover:opacity-100 opacity-0 transition-all duration-350 ease-in-out text-center text-sm md:text-md text-honeydew"> {/* Ajustado tamanho e cor */}
                Deixe nossa IA criar o caminho ideal para você atingir suas metas de saúde.
              </p>
            </Magnetic>
          </div>
          {/* Efeito Ripple como fundo */}
          <Ripple />
        </div>
      ),
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
