export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NutriMind",
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
    github: "https://github.com/seuprojeto/NutriMind",
    twitter: "https://twitter.com/NutriMind",
    docs: "https://NutriMind.com/docs",
    discord: "https://discord.gg/NutriMind",
  },
};

