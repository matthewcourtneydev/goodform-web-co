
import Work from "@/views/Work/Work";

const ogImage = "/images/og/goodform-og.png";

export const metadata = {
  /* =========================================
     GENERAL SEO
     ========================================= */

  title: "Our Work | Web Design Portfolio",

  description:
    "Explore the Goodform Web Co. portfolio featuring custom websites built for small businesses. See our approach to thoughtful design, development, and real-world results.",

  alternates: {
    canonical: "/work",
  },

  /* =========================================
     OPEN GRAPH
     ========================================= */

  openGraph: {
    title:
      "Our Work | Web Design Portfolio | Goodform Web Co.",

    description:
      "Explore custom websites designed and developed by Goodform Web Co. Discover thoughtful digital experiences built for real businesses.",

    url: "/work",

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

    title:
      "Our Work | Web Design Portfolio | Goodform Web Co.",

    description:
      "Explore our portfolio of custom websites built for small businesses.",

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

export default function WorkPage() {
  return <Work />;
}
