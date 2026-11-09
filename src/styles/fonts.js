import localFont from "next/font/local";
import { Manrope } from "next/font/google";

export const displayFont = localFont({
  src: "../assets/fonts/RecoletaBasic-Bold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-display",
});

export const bodyFont = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});