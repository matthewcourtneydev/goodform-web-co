
import "@/styles/globals.scss";

import { displayFont, bodyFont } from "@/styles/fonts";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

/* =========================================
   SITE METADATA
   ========================================= */

const siteUrl = "https://www.goodformwebco.com";

const siteName = "Goodform Web Co.";

const siteDescription =
  "Goodform Web Co. is an independent web design and development studio building thoughtful, custom websites for small businesses.";

const ogImage = "/images/og/goodform-og.png";

export const metadata = {
  metadataBase: new URL(siteUrl),

  /* =========================================
     GENERAL SEO
     ========================================= */

  title: {
    default:
      "Goodform Web Co. | Custom Websites for Small Businesses",
    template: "%s | Goodform Web Co.",
  },

  description: siteDescription,

  applicationName: siteName,

  /* =========================================
     OPEN GRAPH
     ========================================= */

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,

    title:
      "Goodform Web Co. | Custom Websites for Small Businesses",

    description: siteDescription,

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Goodform Web Co. — Custom Web Design & Development",
        type: "image/png",
      },
    ],
  },

  /* =========================================
     TWITTER / X
     ========================================= */

  twitter: {
    card: "summary_large_image",

    title:
      "Goodform Web Co. | Custom Websites for Small Businesses",

    description: siteDescription,

    images: [ogImage],
  },

  /* =========================================
     FAVICONS
     ========================================= */

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  },

  /* =========================================
     SEARCH ENGINE INDEXING
     ========================================= */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* =========================================
     ADDITIONAL METADATA
     ========================================= */

  category: "Web Design and Development",
};

/* =========================================
   ROOT LAYOUT
   ========================================= */

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
