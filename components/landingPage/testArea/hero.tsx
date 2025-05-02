import { fontSubtitle, fontTitle } from "@/config/fonts";

export default function TestArea() {
  return (
    <div className="container mx-auto text-center">
      <h2
        className={`${fontTitle.className} text-3xl md:text-4xl font-bold text-primary-300 dark:text-primary-800 mb-4`}
      >
        Descubra Suas Métricas Gratuitamente
      </h2>
      <p
        className={`${fontSubtitle.className} text-lg md:text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto mb-8`}
      >
        Calcule seu IMC, Taxa Metabólica Basal e % de Gordura Corporal agora mesmo e dê o primeiro
        passo para uma vida mais saudável!
      </p>
    </div>
  );
}
