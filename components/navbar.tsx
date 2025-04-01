import { Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@heroui/button";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Navbar Left Content */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">NutriCalc</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Right Content */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>
          <Button
            className="text-sm font-normal text-white bg-primary hover:bg-green-600"
            href="#"
            variant="solid"
          >
            Comece Agora
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Mobile Content */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
    </HeroUINavbar>
  );
};
