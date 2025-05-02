"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { ThemeSwitch } from "./theme-switch";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
} from "@/components/ui/resizable-navbar";
import { Logo } from "@/components/icons";

export const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const navItems = [
    { name: "Funcionalidades", link: "#funcionalidades" },
    { name: "Como Funciona", link: "#como-funciona" },
    { name: "Preços", link: "#precos" },
  ];

  // Animações
  const navAnimation = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const itemAnimation = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  // Componente personalizado para os itens de navegação
  const NavItem = ({ item, index }: { item: (typeof navItems)[0]; index: number }) => (
    <motion.div
      className="relative"
      initial="initial"
      variants={itemAnimation}
      whileHover="hover"
      onHoverEnd={() => setHoveredItem(null)}
      onHoverStart={() => setHoveredItem(index)}
    >
      <a
        className="font-semibold text-primary-900 dark:text-primary-50 px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary-300/20 dark:hover:bg-primary-600/30"
        href={item.link}
      >
        {item.name}
      </a>
      {hoveredItem === index && (
        <motion.div
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400 dark:bg-primary-300"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          layoutId="navHighlight"
        />
      )}
    </motion.div>
  );

  return (
    <motion.div
      animate="animate"
      className="relative w-full"
      initial="initial"
      variants={navAnimation}
    >
      <Navbar className="bg-primary-200/80 dark:bg-primary-700/80 mt-4 rounded-full backdrop-blur-sm border border-primary-300/20 dark:border-primary-600/20">
        {/* Desktop Navigation */}
        <NavBody>
          <motion.div
            className="flex items-center gap-2"
            transition={{ type: "spring", stiffness: 400 }}
            whileHover={{ scale: 1.02 }}
          >
            <Logo />
            <span className="font-bold text-primary-900 dark:text-primary-50">NutriMind</span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <NavItem key={idx} index={idx} item={item} />
            ))}
          </div>

          <motion.div
            className="flex items-center"
            transition={{ type: "spring", stiffness: 400 }}
            whileHover={{ scale: 1.05 }}
          >
            <ThemeSwitch />
          </motion.div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
              <Logo />
              <span className="font-bold text-primary-900 dark:text-primary-50">NutriMind</span>
            </motion.div>
            <div className="flex items-center gap-4">
              <ThemeSwitch />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            className="bg-primary-200/95 dark:bg-primary-800/95 backdrop-blur-lg"
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={`mobile-link-${idx}`}
                className="relative text-primary-900 dark:text-primary-50 font-semibold py-3 px-4 rounded-lg hover:bg-primary-300/20 dark:hover:bg-primary-600/30 transition-all duration-300"
                href={item.link}
                transition={{ type: "spring", stiffness: 400 }}
                whileHover={{ x: 10 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="block">{item.name}</span>
              </motion.a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
};
