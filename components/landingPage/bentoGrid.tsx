import BentoGridSection from "./bentoGridSection";
import Hero from "./bentoSection/hero";

export default function BentoCards() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center py-4 md:py-8 xl:py-12">
      <Hero />
      <BentoGridSection />
    </section>
  );
}
