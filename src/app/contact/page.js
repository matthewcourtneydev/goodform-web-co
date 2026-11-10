
import Contact from "@/views/Contact/Contact";

const ogImage = "/images/og/goodform-og.png";

export const metadata = {
  /* =========================================
     GENERAL SEO
     ========================================= */

  title: "Contact Us | Start Your Project",

  description:
    "Ready to build a better website? Contact Goodform Web Co., a Charlotte, NC web design and development studio. Tell us about your project and let's create something great together.",

  alternates: {
    canonical: "/contact",
  },

  /* =========================================
     OPEN GRAPH
     ========================================= */

  openGraph: {
    title: "Contact Us | Start Your Project | Goodform Web Co.",

    description:
      "Have a website project in mind? Get in touch with Goodform Web Co. to discuss custom web design, development, and digital solutions for your business.",

    url: "/contact",

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

    title: "Contact Us | Start Your Project | Goodform Web Co.",

    description:
      "Let's build something good. Contact Goodform Web Co. to discuss your website project and discover how we can help your business grow.",

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

export default function ContactPage() {
  return <Contact />;
}
