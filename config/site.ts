export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NutriCalc",
  description: "Descubra sua taxa metabólica e receba uma dieta personalizada em minutos.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre",
      href: "/about",
    },
    {
      label: "FAQs",
      href: "/faqs",
    },
    {
      label: "Contato",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/seuprojeto/nutricalc",
    twitter: "https://twitter.com/nutricalc",
    docs: "https://nutricalc.com/docs",
    discord: "https://discord.gg/nutricalc",
  },
};

