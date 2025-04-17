import { fontSubtitle, fontTitle } from "@/config/fonts"; // Importe ambas as fontes

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
    // Adicione mais FAQs se necessário
  ];

  // Verificação para garantir que faqsData é um array
  if (!Array.isArray(faqsData)) {
    console.error("faqsData não é um array:", faqsData);
    return <p>Erro ao carregar FAQs.</p>; // Ou outra mensagem de erro
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
      <h2
          className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-200 mb-4`}
        >
          Perguntas Frequentes
        </h2>
         <p
                  className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto`}
                >
            Aqui estão algumas perguntas comuns que recebemos sobre o NutriCalc.
                </p>
        <div className="space-y-6">
    
        </div>
      </div>
    </section>
  );
}
