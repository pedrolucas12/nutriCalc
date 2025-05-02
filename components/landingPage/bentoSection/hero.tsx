import { fontSubtitle, fontTitle } from "@/config/fonts";

export default function Hero() {
  return (
    <div>
      <h2
        className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-200 mb-4`}
      >
        O que o NutriMind faz por você
      </h2>
      <p
        className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto`}
      >
        Descubra como o NutriMind pode transformar sua saúde e bem-estar.
      </p>
    </div>
  );
}
