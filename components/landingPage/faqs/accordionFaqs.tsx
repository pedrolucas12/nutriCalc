import { fontSubtitle } from "@/config/fonts";
import { Accordion, AccordionItem } from "@heroui/accordion";
import {
  Brain,
  CheckCircle2,
  DollarSign,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AccordionFaqs() {
  const faqsData = [
    {
      title: "Como o NutriMind cria uma dieta realmente personalizada?",
      icon: <Brain className="h-5 w-5 text-primary-500" />,
      content: (
        <span
          className={`${fontSubtitle.className} text-secondary-900 text-left block dark:text-secondary-200`}
        >
          Nossa IA analisa seus dados (altura, peso, idade, cintura, pescoço,
          objetivo e nível de atividade) para gerar um plano alimentar
          exclusivo, adaptado ao seu perfil, rotina e preferências.
        </span>
      ),
    },
    {
      title: "O cálculo de IMC, TMB e gordura é mesmo gratuito?",
      icon: <DollarSign className="h-5 w-5 text-amber-500" />,
      content: (
        <span
          className={`${fontSubtitle.className} text-secondary-900 text-left block dark:text-secondary-200`}
        >
          Sim! Você pode calcular seu IMC, TMB e percentual de gordura sem pagar
          nada. É 100% gratuito e sem pegadinhas.
        </span>
      ),
    },
    {
      title: "Como recebo minha dieta depois do pagamento?",
      icon: <MessageCircle className="h-5 w-5 text-green-500" />,
      content: (
        <span
          className={`${fontSubtitle.className} text-secondary-900 text-left block dark:text-secondary-200`}
        >
          Após o pagamento, seu plano alimentar completo é liberado na
          plataforma e enviado automaticamente para o seu WhatsApp, pronto para
          ser seguido.
        </span>
      ),
    },
    {
      title: "Posso confiar na segurança dos meus dados?",
      icon: <ShieldCheck className="h-5 w-5 text-secondary-700" />,
      content: (
        <span
          className={`${fontSubtitle.className} text-secondary-900 text-left block dark:text-secondary-200`}
        >
          Sim! Seus dados são protegidos com criptografia e nunca são
          compartilhados. Seguimos as melhores práticas de segurança e LGPD.
        </span>
      ),
    },
    {
      title: "Preciso de cartão de crédito para testar?",
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      content: (
        <span
          className={`${fontSubtitle.className} text-secondary-900 text-left block dark:text-secondary-200`}
        >
          Não! O teste gratuito das métricas não exige cartão. Só pedimos
          pagamento se você quiser gerar sua dieta personalizada.
        </span>
      ),
    },
    {
      title: "A dieta é fácil de seguir?",
      icon: <Sparkles className="h-5 w-5 text-moss_green" />,
      content: (
        <span
          className={`${fontSubtitle.className} text-secondary-900 text-left block dark:text-secondary-200`}
        >
          Sim! O plano é pensado para ser prático, com refeições simples,
          ingredientes acessíveis e opções de substituição.
        </span>
      ),
    },
  ];

  return (
    <div className="mx-auto w-full">
      <Accordion
        variant="splitted"
        className="rounded-2xl shadow-lg"
        itemClasses={{
          base: " rounded-xl border border-primary-100 dark:border-primary-800 bg-white/90 dark:bg-black/40 transition-all duration-200 hover:shadow-md",
          title:
            "flex  gap-2  font-semibold text-primary-700 dark:text-primary-200 p-2",
          content:
            "item-start px-4 py-3 text-secondary-800 dark:text-secondary-200",
        }}
        selectionMode="multiple"
      >
        {faqsData.map((item, idx) => (
          <AccordionItem
            key={idx}
            title={
              <span className="flex items-start gap-2">
                {item.icon}
                {item.title}
              </span>
            }
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
