import BentoCards from "@/components/landingPage/bentoSection/bentoGrid";
import FAQs from "@/components/landingPage/faqs/faqs";
import Hero from "@/components/landingPage/hero/hero";
import Steps from "@/components/landingPage/steps/steps";
import TestArea from "@/components/landingPage/testArea/testArea";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <Hero />
      <BentoCards />
      <Steps />
      <TestArea />
      <FAQs />
    </section>
  );
}
