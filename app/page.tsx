import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Descubra sua dieta personalizada em minutos
          </h1>
          <p className="text-lg mb-6">
            Calcule sua taxa metabólica e receba um plano alimentar ajustado
            para você.
          </p>
          <Link
            href="/login"
            className={buttonStyles({
              radius: "full",
              variant: "shadow",
            })}
          >
            Comece Agora
          </Link>
        </div>
      </section>

      {/* Bento Grid Section */}
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
              <h3 className="text-xl font-semibold mb-4">Percentual de Gordura</h3>
              <p className="text-gray-600">
                Saiba como seu corpo está em relação à saúde.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Macros Personalizados</h3>
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

      {/* Steps Section */}
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

      {/* Free Component Section */}
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
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Calcular Agora
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">O cálculo de TMB é realmente gratuito?</h3>
              <p className="text-gray-600">
                Sim, você pode calcular sua taxa metabólica e percentual de gordura sem custo.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Como funciona a dieta personalizada?</h3>
              <p className="text-gray-600">
                Após inserir seus dados e pagar uma pequena taxa, você receberá um plano alimentar ajustado para suas necessidades.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Posso receber minha dieta pelo WhatsApp?</h3>
              <p className="text-gray-600">
                Sim, você pode optar por receber sua dieta diretamente no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
