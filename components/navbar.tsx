"use client";

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
import { useState } from "react";

import { Logo } from "@/components/icons"; // Certifique-se de ter o Logo correto
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@heroui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemsLanding = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Preços", href: "#precos" },
  ];

  return (
    <HeroUINavbar
      className="flex flex-row justify-center"
      classNames={{
        base: "w-full py-2 bg-dar 0 dark:bg-dark_green-800 rounded-full mt-4",
      }}
      maxWidth="xl"
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      isMenuOpen={isMenuOpen}
    >
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

      <NavbarContent className="flex flex-row justify-end" justify="end">
        <NavbarItem>
          <Button
            className="bg-primary text-secondary font-bold" // Utilizando a cor primary como exemplo
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
            className="bg-primary-light text-primary-dark font-bold" // Utilizando a cor primary como exemplo
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
