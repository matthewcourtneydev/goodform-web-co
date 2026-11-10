
import { notFound } from "next/navigation";

import CaseStudy from "@/views/CaseStudy/CaseStudy";

import { projects } from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";

/* =========================================
   PROJECT LOOKUP
   ========================================= */

function getProject(slug) {
  return projects.find((item) => item.slug === slug);
}

/* =========================================
   STATIC PROJECT ROUTES
   ========================================= */

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* =========================================
   DYNAMIC PROJECT METADATA
   ========================================= */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const details = caseStudies[slug] || {};

  const title = `${project.name} | Website Case Study`;

  const description =
    details.metaDescription ||
    details.overview ||
    project.description ||
    `Explore the ${project.name} website project by Goodform Web Co., featuring custom web design and development for small businesses.`;

  const canonicalUrl = `/work/${slug}`;

  const socialImage =
    details.images?.og || details.images?.main;

  const socialImageUrl =
    typeof socialImage === "string"
      ? socialImage
      : socialImage?.src;

  return {
    title,

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: `${title} | Goodform Web Co.`,
      description,
      url: canonicalUrl,
      type: "article",
      siteName: "Goodform Web Co.",

      ...(socialImageUrl && {
        images: [
          {
            url: socialImageUrl,
            alt: `${project.name} website design by Goodform Web Co.`,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Goodform Web Co.`,
      description,

      ...(socialImageUrl && {
        images: [socialImageUrl],
      }),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================================
   CASE STUDY PAGE
   ========================================= */

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}
