import Reveal from "@/components/animations/Reveal";
import styles from "./AboutPillars.module.scss";

const pillars = [
  {
    id: "design",
    title: "Design-First",
    description:
      "Good design should make an impression without getting in the way. We balance personality, creativity, and thoughtful restraint to build websites that feel distinctive and easy to use.",
  },
  {
    id: "development",
    title: "Development-Focused",
    description:
      "A beautiful website needs a solid foundation. We build with performance, usability, responsiveness, and long-term maintainability in mind.",
  },
  {
    id: "business",
    title: "Business-Minded",
    description:
      "Your website should do more than look good. Every design decision should support your business, connect with your audience, and help you move forward.",
  },
];

export default function AboutPillars() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-pillars-title"
    >
      <div className={styles.container}>
        {/* Section heading */}
        <div className={styles.heading}>
          <Reveal
            animation="fadeUp"
            duration={650}
            className={styles.headingReveal}
          >
            <h2 id="about-pillars-title">
              What We Stand For
            </h2>
          </Reveal>

          <span
            className={styles.headingLine}
            aria-hidden="true"
          />
        </div>

        {/* Pillars */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={styles.pillarItem}
            >
              <Reveal
                animation="fadeUp"
                delay={index * 120}
                duration={700}
                className={styles.pillarReveal}
              >
                <article className={styles.pillar}>
                  <div className={styles.pillarContent}>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}