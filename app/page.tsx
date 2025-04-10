import BentoCards from "@/components/landingPage/bentoGrid";
import FAQs from "@/components/landingPage/faqs";
import Hero from "@/components/landingPage/hero";
import Steps from "@/components/landingPage/steps";
import TestArea from "@/components/landingPage/testArea";

export default function Home() {
  return (
    <div>
      <Hero />
     <BentoCards />

      <Steps />

      <TestArea />

      <FAQs />
    </div>
  );
}
