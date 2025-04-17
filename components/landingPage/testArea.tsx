import { fontSubtitle, fontTitle } from "@/config/fonts";
import ButtonForTest from "./buttonForTest";

export default function TestArea() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-200 mb-4`}
        >
          Descubra suas métricas gratuitamente
        </h2>
        <p
          className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto`}
        >
          Calcule sua taxa metabólica e percentual de gordura sem custo.
        </p>
      </div>
      <ButtonForTest />
    </section>
  );
}
