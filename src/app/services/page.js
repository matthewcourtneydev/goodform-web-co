
import Services from "@/views/Services/Services";

const ogImage = "/images/og/goodform-og.png";

export const metadata = {
  /* =========================================
     GENERAL SEO
     ========================================= */

  title: "Web Design, Development & Wedding Websites",

  description:
    "Explore custom web design, development, branding, and wedding websites with RSVP and planning tools. Website packages, hosting, and support from Goodform Web Co.",

  alternates: {
    canonical: "/services",
  },

  /* =========================================
     OPEN GRAPH
     ========================================= */

  openGraph: {
    title:
      "Web Design, Development & Wedding Websites | Goodform Web Co.",

    description:
      "Custom websites for small businesses, branding, ongoing support, and personalized wedding websites with built-in RSVP and planning tools.",

    url: "/services",

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
      "Web Design, Development & Wedding Websites | Goodform Web Co.",

    description:
      "Custom business websites, branding, hosting, and personalized wedding websites with RSVP and planning tools.",

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

export default function ServicesPage() {
  return <Services />;
}
