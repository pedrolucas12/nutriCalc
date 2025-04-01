export default function BentoGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          O que o NutriCalc faz por você
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Cálculo de TMB</h3>
            <p className="text-gray-600">
              Descubra sua taxa metabólica basal com precisão.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Percentual de Gordura
            </h3>
            <p className="text-gray-600">
              Saiba como seu corpo está em relação à saúde.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Macros Personalizados
            </h3>
            <p className="text-gray-600">
              Receba recomendações de proteínas, carboidratos e gorduras.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Dieta Ajustada</h3>
            <p className="text-gray-600">
              Um plano alimentar feito exclusivamente para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
