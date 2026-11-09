
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ImageIcon,
} from "lucide-react";

import { projects } from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";

import styles from "./CaseStudy.module.scss";

export default function CaseStudy({ project }) {
  const details = caseStudies[project.slug] || {};

  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  const mainImage = details.images?.main;
  const galleryImages = details.images?.gallery || [];

  return (
    <div className={styles.caseStudy}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/work" className={styles.backLink}>
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Our Work
          </Link>

          <span className={styles.eyebrow}>
            Project Spotlight
          </span>

          <h1>{project.name}</h1>

          <p className={styles.introduction}>
            {details.overview || project.description}
          </p>

          <div className={styles.projectMeta}>
            <div>
              <span>Client</span>
              <strong>{project.name}</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>{project.category}</strong>
            </div>

            <div>
              <span>Services</span>
              <strong>
                {details.services?.slice(0, 2).join(", ") ||
                  "Website Design & Development"}
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main project visual */}
      <section className={styles.visualSection}>
        <div className={styles.container}>
          <div className={styles.heroImage}>
            {mainImage ? (
              <Image
                src={mainImage}
                alt={`${project.name} website showcase`}
                fill
                priority
                sizes="(max-width: 600px) 100vw, 80vw"
                className={styles.projectImage}
              />
            ) : (
              <div
                className={styles.imagePlaceholder}
                role="img"
                aria-label={
                  project.imageAlt ||
                  `${project.name} project image coming soon`
                }
              >
                <ImageIcon
                  size={90}
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project story */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyBlock}>
              <span className={styles.eyebrow}>
                The Challenge
              </span>

              <h2>Understanding the need.</h2>

              <p>
                {details.challenge ||
                  "Every project begins with understanding the business and its goals."}
              </p>
            </div>

            <div className={styles.storyBlock}>
              <span className={styles.eyebrow}>
                Our Approach
              </span>

              <h2>Building with purpose.</h2>

              <p>
                {details.solution ||
                  "We create thoughtful digital experiences built around the people who use them."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              Project Gallery
            </span>

            <h2>A closer look.</h2>
          </div>

          <div className={styles.galleryGrid}>
            {galleryImages.length > 0
              ? galleryImages.map((image) => (
                  <div
                    key={image.src}
                    className={styles.galleryImage}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 33vw, 30vw"
                      className={styles.projectImage}
                    />
                  </div>
                ))
              : [1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className={styles.galleryImage}
                  >
                    <div
                      className={styles.imagePlaceholder}
                      aria-hidden="true"
                    >
                      <ImageIcon
                        size={42}
                        strokeWidth={1}
                      />
                    </div>
                  </div>
                ))}
          </div>

          {details.website && (
            <a
              href={details.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.websiteLink}
            >
              Visit Live Website
              <ExternalLink
                size={16}
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </section>

      {/* Next project */}
      <section className={styles.nextSection}>
        <div className={styles.container}>
          <div className={styles.nextContent}>
            <div>
              <span className={styles.eyebrow}>
                Up Next
              </span>

              <h2>{nextProject.name}</h2>

              <p>{nextProject.description}</p>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className={styles.nextButton}
            >
              Next Project
              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Have something in mind?</h2>

          <p>
            Let's create something that feels right for
            your business.
          </p>

          <Link
            href="/contact"
            className={styles.ctaButton}
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
