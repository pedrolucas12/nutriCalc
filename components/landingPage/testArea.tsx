import { fontSubtitle, fontTitle } from "@/config/fonts";
import { Link } from "@heroui/link";

export default function TestArea() {
  return (
    <section className="py-20">
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
        <Link href="/login">Calcular Agora</Link>
      </div>
    </section>
  );
}
