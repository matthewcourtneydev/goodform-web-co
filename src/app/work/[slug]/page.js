
import { notFound } from "next/navigation";

import CaseStudy from "@/views/CaseStudy/CaseStudy";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found | Goodform Web Co.",
    };
  }

  return {
    title: `${project.name} | Goodform Web Co.`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}
