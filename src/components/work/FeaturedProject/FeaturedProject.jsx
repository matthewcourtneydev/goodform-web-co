
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import styles from "./FeaturedProject.module.scss";

const highlights = [
  "Modern, welcoming design",
  "Clear services and conditions",
  "Improved local visibility (SEO)",
];

export default function FeaturedProject() {
  return (
    <section
      className={styles.section}
      aria-labelledby="featured-project-title"
    >
      <div className={styles.container}>
        {/* Project screenshot */}
        <Reveal
          animation="fadeUp"
          duration={750}
          className={styles.imageReveal}
        >
          <div className={styles.projectImage}>
            <Image
              src="/images/projects/forest-hills/desktop.webp"
              alt="Forest Hills Chiropractic website desktop design"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={styles.projectScreenshot}
            />
          </div>
        </Reveal>

        {/* Project information */}
        <Reveal
          animation="fadeUp"
          delay={150}
          duration={700}
          className={styles.contentReveal}
        >
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              Featured Project
            </span>

            <h2 id="featured-project-title">
              Forest Hills Chiropractic
            </h2>

            <p className={styles.description}>
              A modern, trustworthy online presence for a
              long-standing chiropractic practice in Pittsburgh.
            </p>

            <ul className={styles.highlights}>
              {highlights.map((highlight) => (
                <li key={highlight}>
                  <Check
                    size={17}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/work/forest-hills-chiropractic"
              className={styles.button}
            >
              View Case Study
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
