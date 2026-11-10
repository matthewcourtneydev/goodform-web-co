
import About from "@/views/About/About";

const ogImage = "/images/og/goodform-og.png";

export const metadata = {
  /* =========================================
     GENERAL SEO
     ========================================= */

  title: "About Us | Meet Goodform Web Co.",

  description:
    "Meet Goodform Web Co., an independent web design and development studio founded by Matthew Courtney in Charlotte, NC. Discover our story, values, and approach to building custom websites for small businesses.",

  alternates: {
    canonical: "/about",
  },

  /* =========================================
     OPEN GRAPH
     ========================================= */

  openGraph: {
    title: "About Us | Meet Goodform Web Co.",

    description:
      "Get to know Goodform Web Co. Discover the story, values, and design-first approach behind our custom websites for small businesses.",

    url: "/about",

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

    title: "About Us | Meet Goodform Web Co.",

    description:
      "Meet the independent web development studio combining thoughtful design, reliable development, and a personal approach to helping small businesses grow.",

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

export default function AboutPage() {
  return <About />;
}
