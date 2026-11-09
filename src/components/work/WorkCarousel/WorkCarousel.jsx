
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/data/projects";
import styles from "./WorkCarousel.module.scss";

// Forest Hills is already displayed as the featured project.
const carouselProjects = projects.filter(
  (project) => project.id !== "forest-hills"
);

// Match project IDs to screenshot folders.
const projectImages = {
  "casa-de-fades": "/images/projects/casa-de-fades/desktop.webp",
  "alexandria-hair": "/images/projects/alexandria-hair/desktop.webp",
  "sun-sisters": "/images/projects/sun-sisters/desktop.webp",
  "united-training": "/images/projects/united-training/desktop.webp",
};

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const updateVisibleCount = () => {
      const count = mediaQuery.matches ? 1 : 3;

      setVisibleCount(count);
      setActiveIndex(0);
    };

    updateVisibleCount();

    mediaQuery.addEventListener("change", updateVisibleCount);

    return () => {
      mediaQuery.removeEventListener("change", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    carouselProjects.length - visibleCount
  );

  const totalPages = maxIndex + 1;

  const nextSlide = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="work-carousel-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 id="work-carousel-title">
            Explore Our Work
          </h2>

          <p>
            A selection of other projects we've brought to life.
          </p>
        </div>

        <div
          className={styles.carousel}
          aria-roledescription="carousel"
          aria-label="Goodform portfolio projects"
        >
          <button
            type="button"
            className={`${styles.arrow} ${styles.previous}`}
            onClick={previousSlide}
            aria-label="Previous project"
            disabled={totalPages <= 1}
          >
            <ChevronLeft size={30} strokeWidth={1.75} />
          </button>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{
                "--active-index": activeIndex,
                "--visible-count": visibleCount,
              }}
            >
              {carouselProjects.map((project, index) => {
                const isVisible =
                  index >= activeIndex &&
                  index < activeIndex + visibleCount;

                const imageSrc =
                  projectImages[project.id] ||
                  `/images/projects/${project.id}/desktop.webp`;

                return (
                  <article
                    key={project.id}
                    className={styles.card}
                    aria-hidden={!isVisible}
                    inert={!isVisible}
                  >
                    <div className={styles.projectImage}>
                      <Image
                        src={imageSrc}
                        alt={`${project.name} website screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className={styles.projectScreenshot}
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <div className={styles.cardText}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                      </div>

                      <Link
                        href={`/work/${project.slug}`}
                        className={styles.cardLink}
                        aria-label={`View ${project.name} case study`}
                      >
                        View Project
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next project"
            disabled={totalPages <= 1}
          >
            <ChevronRight size={30} strokeWidth={1.75} />
          </button>
        </div>

        <div
          className={styles.pagination}
          aria-label="Project carousel pagination"
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to carousel position ${index + 1}`}
              aria-current={
                index === activeIndex ? "true" : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
