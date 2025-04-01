

export default function Steps() {

    return (
        <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Como funciona o NutriCalc
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">1. Insira seus dados</h3>
              <p className="text-gray-600">
                Altura, peso, nível de atividade física e objetivo.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">2. Descubra suas métricas</h3>
              <p className="text-gray-600">
                IMC, percentual de gordura e taxa metabólica.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">3. Gere sua dieta</h3>
              <p className="text-gray-600">
                Receba um plano alimentar ajustado para você.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}