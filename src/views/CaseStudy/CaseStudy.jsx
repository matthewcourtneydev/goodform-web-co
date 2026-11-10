
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ImageIcon,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";

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
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal animation="fadeUp" duration={600}>
            <Link href="/work" className={styles.backLink}>
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Our Work
            </Link>
          </Reveal>

          <Reveal
            animation="fadeUp"
            delay={100}
            duration={700}
          >
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                Project Spotlight
              </span>

              <h1>{project.name}</h1>

              <p className={styles.introduction}>
                {details.overview || project.description}
              </p>
            </div>
          </Reveal>

          <Reveal
            animation="fadeUp"
            delay={200}
            duration={700}
          >
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
          </Reveal>
        </div>
      </section>

      {/* MAIN PROJECT VISUAL */}
      <section className={styles.visualSection}>
        <div className={styles.container}>
          <Reveal animation="fadeUp" duration={750}>
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
          </Reveal>
        </div>
      </section>

      {/* PROJECT STORY */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <Reveal
              animation="fadeUp"
              duration={700}
              className={styles.storyReveal}
            >
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
            </Reveal>

            <Reveal
              animation="fadeUp"
              delay={150}
              duration={700}
              className={styles.storyReveal}
            >
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <Reveal animation="fadeUp" duration={650}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>
                Project Gallery
              </span>

              <h2>A closer look.</h2>
            </div>
          </Reveal>

          <div className={styles.galleryGrid}>
            {galleryImages.length > 0
              ? galleryImages.map((image, index) => (
                  <Reveal
                    key={image.src}
                    animation="fadeUp"
                    delay={(index % 3) * 100}
                    duration={700}
                    className={styles.galleryReveal}
                  >
                    <div className={styles.galleryImage}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 33vw, 30vw"
                        className={styles.projectImage}
                      />
                    </div>
                  </Reveal>
                ))
              : [1, 2, 3].map((item, index) => (
                  <Reveal
                    key={item}
                    animation="fadeUp"
                    delay={index * 100}
                    duration={700}
                    className={styles.galleryReveal}
                  >
                    <div className={styles.galleryImage}>
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
                  </Reveal>
                ))}
          </div>

          {details.website && (
            <Reveal
              animation="fadeUp"
              duration={650}
              className={styles.websiteReveal}
            >
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
            </Reveal>
          )}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className={styles.nextSection}>
        <div className={styles.container}>
          <Reveal animation="fadeUp" duration={700}>
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
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <Reveal animation="fadeUp" duration={700}>
            <div className={styles.ctaContent}>
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
