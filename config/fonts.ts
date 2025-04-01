import { Overpass, Poppins, Signika } from "next/font/google";

// Fonte para títulos (Title)
export const fontTitle = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular e Bold
  variable: "--font-title",
});

// Fonte para subtítulos (Subtitle)
export const fontSubtitle = Signika({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular e Semi-Bold
  variable: "--font-subtitle",
});

// Fonte para textos (Body)
export const fontText = Overpass({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular e Semi-Bold
  variable: "--font-text",
});
