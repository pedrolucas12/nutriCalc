"use client";

import { Button } from "@heroui/button";
import { Github, Linkedin, Mail, MailIcon } from "lucide-react";

import { Logo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white">
      <div className=" container mx-auto px-4 py-12">
        {/* Grid principal com layout ajustado */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Coluna 1: Logo e CTA Dieta - Alinhada à esquerda */}
          <div className="space-y-8 md:max-w-md">
            <div className="flex flex-col space-y-6">
              <Logo />
              <p className="text-secondary-300 text-sm leading-relaxed">
                Transforme seus objetivos em resultados mensuráveis. Utilize nossa tecnologia para
                otimizar sua jornada nutricional.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-200 to-secondary-800">
                Transforme sua vida
              </h3>
              <p className="text-secondary-300 text-sm">
                Descubra um plano alimentar adequado aos seus objetivos.
              </p>
              <Button
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 
                text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                //quando clicar leva para a area de teste
                onPress={() => {
                  window.scrollTo({
                    top: document.getElementById("testArea")?.offsetTop,
                    behavior: "smooth",
                  });
                }
                }
              >
                Gerar Dieta Agora
              </Button>
            </div>
          </div>

          {/* Container para Explore e Suporte - Alinhado à direita */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-12 md:mt-0">
            {/* Coluna 2: Explore */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary-500">
                Explore
              </h3>
              <ul className="space-y-3">
                {["Sobre o Nutrimind", "Benefícios", "Passo a Passo", "Dúvidas"].map((item) => (
                  <li key={item}>
                    <button
                      className="text-secondary-300 hover:text-secondary-500 transition-colors duration-200 
                      flex items-center space-x-1 group text-sm"
                      onClick={() => console.log('Link clicked')}
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                        {item}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Suporte */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary-500">
                Suporte
              </h3>
              <div className="flex items-center space-x-2 text-secondary-300">
                <Mail className="h-5 w-5" />
                <a
                  className="text-sm hover:text-secondary-500 transition-colors"
                  href="mailto:suporte@nutrimind.com"
                >
                  suporte@nutrimind.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor com gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-700 to-transparent my-12" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-secondary-400 text-sm">
          <p>© {new Date().getFullYear()} NutriMind. Todos os direitos reservados.</p>

          {/* Redes sociais do desenvolvedor */}
          <div className="mt-4 md:mt-0">
            <p className="text-sm mb-2 text-center md:text-right">
              Desenvolvido por Pedro Lucas Santana
            </p>
            <div className="flex space-x-4">
              <a
                className="hover:text-secondary-500 transition-colors"
                href="https://github.com/pedrolucas12"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                className="hover:text-secondary-500 transition-colors"
                href="https://www.linkedin.com/in/pedro-lucas-santana-3a576a204/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                className="hover:text-secondary-500 transition-colors"
                href="mailto:pedrolucassantana@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
