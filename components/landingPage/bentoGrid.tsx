import { fontSubtitle, fontTitle } from "@/config/fonts";
import BentoGridSection from "./bentoGridSection";

export default function BentoCards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-200 mb-4`}
        >
          O que o NutriCalc faz por você
        </h2>
         <p
                  className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto`}
                >
          Descubra como o NutriCalc pode transformar sua saúde e bem-estar.
                </p>
        <BentoGridSection />
      </div>
    </section>
  );
}
