// No seu arquivo NutriCalcStepsStickyScroll.tsx

"use client";
import chat from "@/public/animations/chat.json";
import fingerprintLottie from "@/public/animations/fingerprint.json";
import formLottie from "@/public/animations/form.json";
import paymentLottie from "@/public/animations/payment.json";
import dynamic from "next/dynamic";
import ClientOnlyApexChart from "../../ui/client-pie-chart"; // Renomeado para clareza
import { StickyScroll } from "../../ui/sticky-scroll-reveal"; // Ajuste o caminho

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Conteúdo para os steps com descrições mais longas e visuais variados
const stepsContent = [
  {
    title: "1. Comece Rápido: Seus Dados Essenciais",
    description:
      "Sem formulários longos! Precisamos apenas de informações básicas como altura, peso, idade, seu objetivo principal (emagrecer, ganhar massa ou manter) e medidas simples da cintura e pescoço. Isso garante a precisão inicial para calcularmos suas necessidades.",
    content: (
      // Visual mais clean para o formulário
      <div className="flex h-full w-full items-center justify-center p-6">
        <Lottie animationData={formLottie} loop />
      </div>
    ),
  },
  {
    title: "2. Descubra Suas Métricas (Grátis!)",
    description:
      "Visualize instantaneamente seu Índice de Massa Corporal (IMC) e sua Taxa Metabólica Basal (TMB) estimada. Entender esses números é o primeiro passo crucial para um plano eficaz, e oferecemos isso sem custo para você começar com o pé direito.",
    content: (
      // Gráfico continua sendo uma boa visualização
      <div className="flex h-full w-full items-center justify-center p-6">
        <ClientOnlyApexChart imcValue={24.5} weight={75} height={175} />
      </div>
    ),
  },
  {
    title: "3. A Mágica da IA: Sua Dieta Exclusiva",
    description:
      "Aqui a tecnologia brilha! Nossa Inteligência Artificial processa seus dados, cruza com seus objetivos e preferências, e gera um plano alimentar 100% único. É a ciência da nutrição adaptada perfeitamente para você, em segundos.",
    content: (
      // Lottie de fingerprint ou cérebro/rede neural
      <div className="flex h-full w-full items-center justify-center p-6">
        <Lottie animationData={fingerprintLottie} loop />
      </div>
    ),
  },
  {
    title: "4. Pagamento Simples e Único",
    description:
      "Acesse seu plano completo com um pagamento único, seguro e transparente via Stripe. Sem assinaturas recorrentes ou taxas escondidas. Invista na sua saúde de forma clara e acessível.",
    content: (
      // Visual mais moderno para pagamento
      <div className="flex h-full w-full items-center justify-center p-6">
        <Lottie animationData={paymentLottie} loop />
      </div>
    ),
  },
  {
    title: "5. Tudo Pronto no Seu WhatsApp!",
    description:
      "Confirmado o pagamento, seu plano detalhado (PDF) e as notificações das refeições chegam direto no seu WhatsApp. Tenha sua dieta sempre à mão, de forma prática e fácil de seguir onde estiver.",
    content: (
      // Lista de notificações continua sendo ideal
      <div className="flex h-full w-full items-center justify-center p-6">
          <Lottie animationData={chat} loop />
      </div>
    ),
  },
];

export function NutriCalcStepsStickyScroll() {
  return (
    // Container da seção com fundo e padding
    <div className="w-full h-full">
      <StickyScroll content={stepsContent} />
    </div>
  );
}
