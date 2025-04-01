import { Link } from "@heroui/link";

export default function TestArea() {

    return (
        <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Descubra suas métricas gratuitamente
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Calcule sua taxa metabólica e percentual de gordura sem custo.
          </p>
          <Link
            href="/login"
          >
            Calcular Agora
          </Link>
        </div>
      </section>
    );
}