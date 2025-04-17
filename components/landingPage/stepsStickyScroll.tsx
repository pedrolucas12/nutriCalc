"use client";
import fingerprint from "@/public/animations/fingerprint.json";
import { Activity, Brain, Goal, MessageCircle, Scale } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ClientOnlyApexChart from "../ui/client-pie-chart";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import DietNotificationList from "./diet-notification-list";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const steps = [
  {
    title: "1. Preencha seus dados",
    description:
      "Informe altura, peso, idade, sexo, nível de atividade física e objetivo. Tudo rápido, seguro e sem complicação.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary-100 to-primary-300">
        <Activity className="h-12 w-12 text-primary-700 mb-4" />
        <Image
          src="/images/steps/formulario.png"
          width={120}
          height={120}
          alt="Formulário de dados"
          className="rounded-xl shadow"
        />
      </div>
    ),
  },
  {
    title: "2. Veja suas métricas",
    description:
      "Descubra seu IMC, TMB e percentual de gordura gratuitamente. Visualize seus números em gráficos claros e intuitivos.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-amber-300">
        <Scale className="h-12 w-12 text-amber-600 mb-4" />
        <div className="w-40 h-40">
          <ClientOnlyApexChart imcValue={24.5} weight={75} height={175} />
        </div>
      </div>
    ),
  },
  {
    title: "3. Personalização por IA",
    description:
      "Nossa IA analisa seus dados e preferências para criar um plano alimentar 100% exclusivo para você.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
        <Brain className="h-12 w-12 text-purple-600 mb-4" />
        <div className="w-32 h-32">
          <Lottie animationData={fingerprint} loop />
        </div>
      </div>
    ),
  },
  {
    title: "4. Receba no WhatsApp",
    description:
      "Seu plano alimentar completo e lembretes chegam direto no seu WhatsApp. Praticidade total para o seu dia a dia.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
        <MessageCircle className="h-12 w-12 text-green-600 mb-4" />
        <div className="w-full h-32">
          <DietNotificationList className="w-full h-full scale-90" />
        </div>
      </div>
    ),
  },
  {
    title: "5. Acompanhe seus resultados",
    description:
      "Veja sua evolução, ajuste metas e mantenha a motivação com feedbacks e depoimentos reais de quem já transformou a saúde com o NutriCalc.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-secondary-100 to-secondary-300">
        <Goal className="h-12 w-12 text-secondary-700 mb-4" />
        <Image
          src="/images/steps/depoimento.png"
          width={120}
          height={120}
          alt="Depoimento"
          className="rounded-xl shadow"
        />
      </div>
    ),
  },
];

export function NutriCalcStepsStickyScroll() {
  return (
    <div className="w-full py-8 flex flex-col ">
      <StickyScroll content={steps} />
    </div>
  );
}
