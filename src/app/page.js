import Home from "@/views/Home/Home";

export const metadata = {
  title: "Web Design & Development in Charlotte, NC",
  description:
    "Goodform Web Co. builds custom websites for small businesses in Charlotte, NC and beyond. Thoughtful design, reliable development, and ongoing support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Web Design & Development in Charlotte, NC | Goodform Web Co.",
    description:
      "Custom websites for small businesses. Thoughtful design, reliable development, and ongoing support.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return <Home />;
}