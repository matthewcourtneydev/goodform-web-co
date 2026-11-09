
import { Palette, Code2, Layers3 } from "lucide-react";

import styles from "./AboutPillars.module.scss";

const pillars = [
  {
    id: "design",
    title: "Design-First",
    description:
      "Good design should make an impression without getting in the way. We balance personality, creativity, and thoughtful restraint to build websites that feel distinctive and easy to use.",
    icon: Palette,
  },
  {
    id: "development",
    title: "Development-Focused",
    description:
      "A beautiful website needs a solid foundation. We build with performance, usability, responsiveness, and long-term maintainability in mind.",
    icon: Code2,
  },
  {
    id: "business",
    title: "Business-Minded",
    description:
      "Your website should do more than look good. Every design decision should support your business, connect with your audience, and help you move forward.",
    icon: Layers3,
  },
];

export default function AboutPillars() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-pillars-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 id="about-pillars-title">
            What We Stand For
          </h2>

          <span
            className={styles.headingLine}
            aria-hidden="true"
          />
        </div>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.id}
                className={styles.pillar}
              >
                <div className={styles.iconWrapper}>
                  <Icon
                    size={34}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.pillarContent}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
