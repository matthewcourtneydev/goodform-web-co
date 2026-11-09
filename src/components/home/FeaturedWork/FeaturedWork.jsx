
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import styles from "./FeaturedWork.module.scss";

const projectAccents = {
  "forest-hills": {
    primary: "#B8C8CB",
    secondary: "#8DA5A8",
  },
  "casa-de-fades": {
    primary: "#D4A0A0",
    secondary: "#A94F55",
  },
  "alexandria-hair": {
    primary: "#D6B6B6",
    secondary: "#B88E96",
  },
  "sun-sisters": {
    primary: "#DCC8AA",
    secondary: "#BDA17F",
  },
  "united-training": {
    primary: "#B1C0D0",
    secondary: "#8299B1",
  },
};

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!projects.length) return null;

  const project = projects[activeIndex];

  const accents = projectAccents[project.id] ?? {
    primary: "#B7C3A8",
    secondary: "#91A181",
  };

  const goToProject = (index) => {
    setActiveIndex(
      (index + projects.length) % projects.length
    );
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="featured-work-title"
      aria-roledescription="carousel"
      style={{
        "--project-accent": accents.primary,
        "--project-accent-secondary": accents.secondary,
      }}
    >
      <div className={styles.container}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.previous}`}
          aria-label="Previous project"
          onClick={() => goToProject(activeIndex - 1)}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div className={styles.project}>
          <div className={styles.visual}>
            <div
              className={styles.accentShape}
              aria-hidden="true"
            />

            <div
              className={styles.accentShapeLeft}
              aria-hidden="true"
            />

            <div className={styles.deviceImage}>
              {project.image ? (
                <Image
                  key={project.id}
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 80vw, 55vw"
                  className={styles.projectImage}
                  priority={activeIndex === 0}
                />
              ) : (
                <div
                  className={styles.imagePlaceholder}
                  role="img"
                  aria-label={project.imageAlt}
                >
                  <svg
                    viewBox="0 0 120 90"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="87"
                      cy="25"
                      r="9"
                      fill="#bdbdbd"
                    />
                    <path
                      d="M15 70 46 35 67 57 79 45 105 70Z"
                      fill="#bdbdbd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>
              Featured Work
            </p>

            <h2
              id="featured-work-title"
              aria-live="polite"
              aria-atomic="true"
            >
              {project.name}
            </h2>

            <p className={styles.description}>
              {project.description}
            </p>

            <Link
              href={`/work/${project.slug}`}
              className={styles.caseStudyButton}
            >
              View Case Study
            </Link>

            <div
              className={styles.pagination}
              role="group"
              aria-label="Choose featured project"
            >
              {projects.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.paginationItem} ${
                    index === activeIndex
                      ? styles.activePaginationItem
                      : ""
                  }`}
                  aria-label={`Show ${item.name}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => goToProject(index)}
                >
                  <span
                    className={styles.paginationLine}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label="Next project"
          onClick={() => goToProject(activeIndex + 1)}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
