"use client";
import fingerprint from "@/public/animations/fingerprint.json";
import form from "@/public/animations/form.json";
import payment from "@/public/animations/payment.json";
import { Activity, Brain, CheckCircle2, DollarSign, MessageCircle, Scale } from "lucide-react";
import dynamic from "next/dynamic";
import ClientOnlyApexChart from "../ui/client-pie-chart";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import DietNotificationList from "./diet-notification-list";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });


const steps = [
    {
      title: "1. Comece com seus dados, sem enrolação",
      description:
        "Basta informar altura, peso, idade, objetivo, cintura e pescoço. Em segundos, você já está pronto para receber sua dieta personalizada. Simples, seguro e rápido.",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary-100 to-primary-300">
          <Activity className="h-12 w-12 text-primary-700 mb-4" />
          <Lottie animationData={
            form
          } loop className="w-28 h-28" />
        </div>
      ),
    },
    {
      title: "2. Descubra suas métricas gratuitamente",
      description:
        "Veja seu IMC, TMB e percentual de gordura em tempo real, sem pagar nada. Entenda seu corpo antes de investir em qualquer plano.",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-amber-300">
          <Scale className="h-12 w-12 text-amber-600 mb-4" />
          <div className="w-32 h-32">
            <ClientOnlyApexChart imcValue={24.5} weight={75} height={175} />
          </div>
        </div>
      ),
    },
    {
      title: "3. Gere sua dieta 100% exclusiva com IA",
      description:
        "Com um clique, nossa IA analisa seus dados e monta um plano alimentar sob medida, adaptado ao seu perfil, rotina e preferências. Nada de copiar e colar!",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
          <Brain className="h-12 w-12 text-purple-600 mb-4" />
          <div className="w-28 h-28">
            <Lottie animationData={fingerprint} loop />
          </div>
        </div>
      ),
    },
    {
      title: "4. Pague pouco, sem mensalidade ou pegadinhas",
      description:
        "Pagamento único, rápido e seguro. Sem surpresas, sem taxas escondidas. Você só paga quando quiser gerar sua dieta personalizada.",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
          <DollarSign className="h-12 w-12 text-green-600 mb-4" />
          <Lottie animationData={payment} loop className="w-20 h-20" />
        </div>
      ),
    },
    {
      title: "5. Receba sua dieta no WhatsApp, pronta para usar",
      description:
        "Assim que o pagamento for aprovado, seu plano alimentar completo chega no seu WhatsApp. Prático, rápido e fácil de seguir no dia a dia.",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-green-200 to-green-400">
          <MessageCircle className="h-12 w-12 text-green-600 mb-4" />
          <div className="w-full h-32">
            <DietNotificationList className="w-full h-full scale-90" />
          </div>
          <CheckCircle2 className="h-8 w-8 text-green-500 mt-4" />
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
