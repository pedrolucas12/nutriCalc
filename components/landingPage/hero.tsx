
export default function Hero() {
    return (
        <div>
          {/* Hero Section */}
          <section className="bg-primary text-white py-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-title text-4xl font-bold mb-4">
                Descubra sua dieta personalizada em minutos
              </h1>
              <p className="font-subtitle text-lg mb-6">
                Calcule sua taxa metabólica e receba um plano alimentar ajustado
                para você.
              </p>
              <button className="font-text bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Comece Agora
              </button>
            </div>
          </section>
        </div>
      );
}
