"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { Logo } from "@/components/icons"; // Certifique-se de ter o Logo correto

export default function Footer() {
  return (
    <footer className="bg-dark_green text-honeydew flex flex-row justify-center w-full">
      <div className="mx-auto py-12 px-4">
        {/* Grid para as colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre NutriCalc */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre NutriCalc</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Nosso Propósito
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-moss_green transition-colors"
                  href="#" // Substitua pelo link correto
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Logo e Newsletter */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <Logo />
            </div>

            {/* Texto do Newsletter */}
            <p className="text-sm mb-4">
              Inscreva-se para receber as últimas novidades e atualizações.
            </p>
            {/* Campo de E-mail e Botão */}
            <div className="flex gap-2">
              <Input placeholder="Seu e-mail" type="email" />
              <Button className="px-6 py-2 bg-moss_green text-honeydew rounded-lg hover:bg-dim_gray transition-colors">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-dim_gray my-8" />

        {/* Direitos autorais */}
        <div className="text-center text-sm text-dim_gray">
          © {new Date().getFullYear()} NutriCalc. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
