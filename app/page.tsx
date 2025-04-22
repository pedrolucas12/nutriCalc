import BentoCards from "@/components/landingPage/bentoGrid";
import FAQs from "@/components/landingPage/faqs";
import Hero from "@/components/landingPage/hero";
import Steps from "@/components/landingPage/steps";
import TestArea from "@/components/landingPage/testArea";

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
