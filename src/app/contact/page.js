
import Contact from "@/views/Contact/Contact";


export const metadata = {
  title: "Contact Us | Start Your Project",

  description:
    "Ready to build a better website? Contact Goodform Web Co., a Charlotte, NC web design and development studio. Tell us about your project and let's create something great together.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us | Start Your Project | Goodform Web Co.",
    description:
      "Have a website project in mind? Get in touch with Goodform Web Co. to discuss custom web design, development, and digital solutions for your business.",
    url: "/contact",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Start Your Project | Goodform Web Co.",
    description:
      "Let's build something good. Contact Goodform Web Co. to discuss your website project and discover how we can help your business grow.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function ContactPage() {
  return <Contact />;
}
