import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import Footer from "@/components/footer";
import { NavigationBar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head />
      <body
        className={clsx(
          " font-sans antialiased bg-primary-200 dark:bg-primary-900 text-primary-800 dark:text-primary-50 min-h-screen flex flex-col "
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <main className="container mx-auto flex-grow pb-8 ">
            <NavigationBar />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
