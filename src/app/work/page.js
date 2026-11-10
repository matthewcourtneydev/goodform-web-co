
import Work from "@/views/Work/Work";


export const metadata = {
  title: "Our Work | Web Design Portfolio",

  description:
    "Explore the Goodform Web Co. portfolio featuring custom websites built for small businesses. See our approach to thoughtful design, development, and real-world results.",

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title: "Our Work | Web Design Portfolio | Goodform Web Co.",
    description:
      "Explore custom websites designed and developed by Goodform Web Co. Discover thoughtful digital experiences built for real businesses.",
    url: "/work",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Work | Web Design Portfolio | Goodform Web Co.",
    description:
      "Explore our portfolio of custom websites built for small businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function WorkPage() {
  return <Work />;
}
