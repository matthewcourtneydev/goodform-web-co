
export const websitePackages = [
  {
    id: "landing",
    name: "Landing Page",
    price: 595,
    description: "A focused, single-page website that gets to the point.",
    bestFor: [
      "New or small businesses",
      "Events, launches, or promotions",
      "A simple, professional online presence",
    ],
    features: [
      "Single scrolling page (up to 5 sections)",
      "Custom design & development",
      "Mobile responsive",
      "Basic on-page SEO setup",
      "Contact form, maps, and social links",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    price: 1295,
    description:
      "A complete, professional website built around your business.",
    bestFor: [
      "Established local businesses",
      "Businesses with multiple services",
      "Teams ready for a stronger online presence",
    ],
    features: [
      "Up to 5 website pages",
      "Custom responsive design",
      "Contact forms and standard integrations",
      "Basic on-page SEO setup",
      "Launch support",
    ],
    featured: true,
  },
  {
    id: "informational",
    name: "Informational Website",
    price: 2195,
    description:
      "A larger website designed to organize and showcase more content.",
    bestFor: [
      "Businesses with extensive services",
      "Organizations with detailed content",
      "Growing businesses needing more pages",
    ],
    features: [
      "Up to 10 website pages",
      "Up to 5 unique page layouts",
      "Reusable content templates",
      "Custom responsive design",
      "Basic on-page SEO setup",
    ],
  },
  {
    id: "custom",
    name: "Custom Website",
    price: null,
    description:
      "A tailored solution for businesses that need something beyond a standard website.",
    bestFor: [
      "Custom business applications",
      "Advanced integrations or functionality",
      "Unique workflows and customer experiences",
    ],
    features: [
      "Custom project scope",
      "Advanced integrations",
      "Database-backed functionality when needed",
      "Custom admin tools and dashboards",
      "Project-specific development and support",
    ],
  },
];



export const serviceAddOns = [
  {
    id: "booking",
    name: "Booking Widget",
    shortName: "Booking Widget",
    price: 75,
    icon: "calendar",
    description: "Integrate a third-party booking system.",
  },
  {
    id: "gallery",
    name: "Advanced Gallery",
    shortName: "Gallery",
    price: 150,
    icon: "image",
    description: "Showcase your work with an enhanced gallery.",
  },
  {
    id: "newsletter",
    name: "Newsletter Integration",
    shortName: "Newsletter",
    price: 95,
    icon: "mail",
    description: "Connect a newsletter subscription service.",
  },
  {
    id: "forms",
    name: "Advanced Form",
    shortName: "Advanced Form",
    price: 150,
    icon: "file",
    description: "Custom forms with additional functionality.",
  },
  {
    id: "animations",
    name: "Enhanced Animations",
    shortName: "Animations",
    price: 250,
    icon: "sparkles",
    description: "Add thoughtful motion and interactions.",
  },
  {
    id: "cms",
    name: "CMS Integration",
    shortName: "CMS",
    price: 450,
    icon: "database",
    description: "Manage website content more easily.",
  },
];


export const formatPackagePrice = (price) =>
  price === null ? "Quote" : `$${price.toLocaleString()}`;
