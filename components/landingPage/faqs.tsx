import { fontTitle } from "@/config/fonts"; // Importe suas fontes
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function FAQs() {
  const faqsData = [
    {
      title: "Como o NutriCalc personaliza minha dieta?",
      content:
        "Utilizamos inteligência artificial para analisar seus dados (altura, peso, atividade física, etc.) e gerar um plano alimentar exclusivo.",
    },
    {
      title: "O cálculo de métricas é realmente gratuito?",
      content:
        "Sim, você pode calcular sua taxa metabólica basal, IMC e percentual de gordura sem nenhum custo.",
    },
    {
      title: "Como recebo minha dieta personalizada?",
      content:
        "Após o pagamento, sua dieta é gerada e enviada para o seu e-mail e, opcionalmente, para o seu WhatsApp.",
    },
    {
      title: "Posso ajustar minha dieta após a geração?",
      content:
        "Sim, você pode fornecer feedback sobre os alimentos e refeições, e o sistema ajustará automaticamente seu plano.",
    },
    {
      title: "O NutriCalc substitui uma consulta com nutricionista?",
      content:
        "Não, o NutriCalc é uma ferramenta complementar e não substitui a orientação de um profissional de saúde.",
    },
  ];

  return (
    <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className={`${fontTitle.className} text-3xl font-bold text-center mb-10 text-dark_green`}>
        Perguntas Frequentes
      </h2>
      <div className="space-y-6">
        <Accordion motionProps={{ initial: false }}>
          {faqsData.map((faq, index) => (
            <AccordionItem key={index} title={faq.title}>
              <p>{faq.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
  );
}
