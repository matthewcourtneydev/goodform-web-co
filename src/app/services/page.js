
import Services from "@/views/Services/Services";

const ogImage = "/images/og/goodform-og.png";

export const metadata = {
  /* =========================================
     GENERAL SEO
     ========================================= */

  title: "Web Design & Development Services",

  description:
    "Explore custom web design and development services from Goodform Web Co. Affordable website packages, branding, managed hosting, and ongoing support for small businesses.",

  alternates: {
    canonical: "/services",
  },

  /* =========================================
     OPEN GRAPH
     ========================================= */

  openGraph: {
    title:
      "Web Design & Development Services | Goodform Web Co.",

    description:
      "From custom websites to branding and ongoing care, explore thoughtful digital solutions built for small businesses.",

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
      "Web Design & Development Services | Goodform Web Co.",

    description:
      "Custom websites, branding, hosting, and ongoing support for small businesses.",

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
