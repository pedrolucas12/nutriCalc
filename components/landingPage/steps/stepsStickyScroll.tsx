"use client";
import dynamic from "next/dynamic";

import ClientOnlyApexChart from "../../ui/client-pie-chart";
import { StickyScroll } from "../../ui/sticky-scroll-reveal";

import chat from "@/public/animations/chat.json";
import fingerprintLottie from "@/public/animations/fingerprint.json";
import formLottie from "@/public/animations/form.json";
import paymentLottie from "@/public/animations/payment.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const stepsContent = [
  {
    title: (
      <span className="text-2xl md:text-3xl xl:text-4xl font-bold">
        1. Comece Rápido: Seus Dados Essenciais
      </span>
    ),
    description: (
      <span className="text-lg md:text-xl xl:text-2xl text-secondary-500">
        Informe apenas o básico: altura, peso, idade, objetivo (emagrecer, ganhar massa ou manter) e
        medidas simples da cintura e pescoço. Não precisa perder tempo com formulários longos! Com
        esses dados, conseguimos calcular suas necessidades de forma precisa e personalizada.
      </span>
    ),
    content: (
      <div className="relative w-full flex items-center justify-center">
        <div className="relative ">
          <Lottie loop animationData={formLottie} />
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className="text-2xl md:text-3xl xl:text-4xl font-bold">
        2. Descubra Suas Métricas (Grátis!)
      </span>
    ),
    description: (
      <span className="text-lg md:text-xl xl:text-2xl text-secondary-500">
        Veja na hora seu IMC (Índice de Massa Corporal) e TMB (Taxa Metabólica Basal). Entender
        esses números é o primeiro passo para um plano alimentar eficiente. Você já começa com
        informações valiosas, sem pagar nada!
      </span>
    ),
    content: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="relative">
          <ClientOnlyApexChart height={175} imcValue={24.5} weight={75} />
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className="text-2xl md:text-3xl xl:text-4xl font-bold">
        3. A Mágica da IA: Sua Dieta Exclusiva
      </span>
    ),
    description: (
      <span className="text-lg md:text-xl xl:text-2xl text-secondary-500">
        Nossa Inteligência Artificial analisa seus dados, entende seus objetivos e monta um cardápio
        totalmente personalizado. Você recebe um plano alimentar feito sob medida, com base em
        ciência e tecnologia de ponta.
      </span>
    ),
    content: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="relative ">
          <Lottie loop animationData={fingerprintLottie} />
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className="text-2xl md:text-3xl xl:text-4xl font-bold">
        4. Pagamento Simples e Único
      </span>
    ),
    description: (
      <span className="text-lg md:text-xl xl:text-2xl text-secondary-500">
        Para acessar seu plano completo, basta um pagamento único, rápido e seguro via Stripe. Sem
        mensalidades, sem surpresas. Invista na sua saúde de forma transparente!
      </span>
    ),
    content: (
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="relative ">
          <Lottie loop animationData={paymentLottie} />
        </div>
      </div>
    ),
  },
  {
    title: (
      <span className="text-2xl md:text-3xl xl:text-4xl font-bold">
        5. Tudo Pronto no Seu WhatsApp!
      </span>
    ),
    description: (
      <span className="text-lg md:text-xl xl:text-2xl text-secondary-500">
        Assim que o pagamento for confirmado, você recebe seu plano detalhado em PDF e notificações
        das refeições direto no WhatsApp. Praticidade total para seguir sua dieta onde estiver!
      </span>
    ),
    content: (
      <div className="relative  w-full flex items-center justify-center">
        <div className="relative w-2/3 h-2/3">
          <Lottie loop animationData={chat} />
        </div>
      </div>
    ),
  },
];

export function NutriMindStepsStickyScroll() {
  return (
    <div className="w-full h-full">
      <StickyScroll
        content={stepsContent}
        contentClassName="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-3xl shadow-xl px-8 flex flex-col gap-6 hidden md:block"
      />
    </div>
  );
}
