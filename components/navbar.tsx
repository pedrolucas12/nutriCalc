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
import { ThemeSwitch } from "./theme-switch";

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
        base: "   rounded-full mt-4 shadow-md bg-primary dark:bg-primary-dark ",
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
          <Link href="/" className="flex justify-start items-center gap-1 text-honeydew">
            <Logo />
            <p className="font-bold text-inherit">NutriCalc</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex flex-row justify-end" justify="end">
     
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

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
