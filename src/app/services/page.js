
import Services from "@/views/Services/Services";


export const metadata = {
  title: "Web Design & Development Services",
  description:
    "Explore custom web design and development services from Goodform Web Co. Affordable website packages, branding, managed hosting, and ongoing support for small businesses.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Web Design & Development Services | Goodform Web Co.",
    description:
      "From custom websites to branding and ongoing care, explore thoughtful digital solutions built for small businesses.",
    url: "/services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Design & Development Services | Goodform Web Co.",
    description:
      "Custom websites, branding, hosting, and ongoing support for small businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function ServicesPage() {
  return <Services />;
}
