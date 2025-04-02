"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useEffect, useState } from "react";

import { Logo } from "@/components/icons"; // Certifique-se de ter o Logo correto
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(false);

  useEffect(() => {
    // Verifica se está na página inicial (landing page)
    if (window.location.pathname === "/") {
      setIsLandingPage(true);
    } else {
      setIsLandingPage(false);
    }
  }, []); // Executa apenas uma vez no mount

  // Se não estiver na landing page, renderiza uma versão simplificada
  if (!isLandingPage) {
    return (
      <HeroUINavbar
        className="flex justify-between items-center w-full py-2 bg-white dark:bg-dark_green-800 rounded-full mt-4"
        maxWidth="xl"
      >
        {/* Logo à esquerda */}
        <NavbarBrand>
          <Link href="/" className="flex justify-start items-center gap-1">
            <Logo />
            <p className="font-bold text-inherit">NutriCalc</p>
          </Link>
        </NavbarBrand>

        {/* ThemeSwitch à direita */}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </HeroUINavbar>
    );
  }

  // Configuração dos itens de menu para a landing page
  const menuItemsLanding = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Preços", href: "#precos" },
  ];

  return (
    <HeroUINavbar
      className="flex flex-row justify-center"
      classNames={{
        base: "w-full py-2 bg-white dark:bg-dark_green-800 rounded-full mt-4",
      }}
      maxWidth="xl"
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      isMenuOpen={isMenuOpen}
    >
      {/* Conteúdo Esquerdo: Menu Toggle e Logo */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex justify-start items-center gap-1">
            <Logo />
            <p className="font-bold text-inherit">NutriCalc</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Conteúdo Central: Links de Navegação (Desktop) */}
      <NavbarContent
        className="hidden sm:flex sm:flex-row sm:justify-center gap-8"
        justify="center"
      >
        {menuItemsLanding.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.href} className="text-primary-500">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      {/* Conteúdo Direito: Botões e ThemeSwitch */}
      <NavbarContent className="flex flex-row justify-end" justify="end">
        <NavbarItem>
          <Button
            color="primary"
            variant="light"
            onPress={() => {
              window.location.href = "/login";
            }}
          >
            Registrar
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="shadow"
            onPress={() => {
              window.location.href = "/login";
            }}
          >
            Entrar
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Menu Móvel */}
      <NavbarMenu>
        {menuItemsLanding.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              href={item.href}
              className="w-full text-primary-500"
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};
