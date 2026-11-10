
import Home from "@/views/Home/Home";

const siteDescription =
  "Goodform Web Co. builds custom websites for small businesses in Charlotte, NC and beyond. Thoughtful design, reliable development, and ongoing support.";

const socialTitle =
  "Web Design & Development in Charlotte, NC | Goodform Web Co.";

const ogImage = "/images/og/goodform-og.png";

export const metadata = {
  /* =========================================
     GENERAL SEO
     ========================================= */

  title: "Web Design & Development in Charlotte, NC",

  description: siteDescription,

  alternates: {
    canonical: "/",
  },

  /* =========================================
     OPEN GRAPH
     ========================================= */

  openGraph: {
    title: socialTitle,

    description:
      "Custom websites for small businesses. Thoughtful design, reliable development, and ongoing support.",

    url: "/",

    type: "website",

    siteName: "Goodform Web Co.",

    locale: "en_US",

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

    title: socialTitle,

    description: siteDescription,

    images: [ogImage],
  },

  /* =========================================
     SEARCH ENGINE INDEXING
     ========================================= */

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return <Home />;
}
