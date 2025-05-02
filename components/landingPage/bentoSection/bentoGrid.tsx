import BentoGridSection from "./bentoGridSection";
import Hero from "./hero";

export default function BentoCards() {
  return (
<section className="w-full flex flex-col justify-center items-center gap-8 md:gap-12 py-8 md:py-16">
        <Hero />
      <BentoGridSection />
    </section>
  );
}
