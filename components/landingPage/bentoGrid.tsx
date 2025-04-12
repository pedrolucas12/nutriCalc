import BentoGridSection from "./bentoGridSection";

export default function BentoCards() {

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-dark_green">
          O que o NutriCalc faz por você
        </h2>
        <BentoGridSection />
      </div>
    </section>
  );
}
