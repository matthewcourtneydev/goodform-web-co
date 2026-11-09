
import "@/styles/globals.scss";
import { displayFont, bodyFont } from "@/styles/fonts";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export const metadata = {
  title: {
    default: "Goodform Web Co.",
    template: "%s | Goodform Web Co.",
  },
  description:
    "Thoughtful websites. Built with purpose. Independent web design and development for small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="sage-olive"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <Header />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
