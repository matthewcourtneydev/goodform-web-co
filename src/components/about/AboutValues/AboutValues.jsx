import { Plus, Minus } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import styles from "./AboutValues.module.scss";

const values = [
  {
    id: "quality",
    number: "01",
    title: "Quality",
    tagline: "The details matter.",
    description:
      "From the first layout to the finishing touches, we take pride in creating work that's thoughtful, polished, and built with care. We wouldn't put our name on something we're not proud of.",
  },
  {
    id: "communication",
    number: "02",
    title: "Communication",
    tagline: "No unnecessary middlemen.",
    description:
      "Clear conversations, honest feedback, and direct collaboration throughout the process. You'll know what we're building, why we're building it, and where things stand.",
  },
  {
    id: "reliability",
    number: "03",
    title: "Reliability",
    tagline: "Built to last. Here to help.",
    description:
      "A website should be something you can depend on. We focus on dependable solutions, thoughtful development, and support that extends beyond launch.",
  },
  {
    id: "growth",
    number: "04",
    title: "Growth",
    tagline: "Built for where you're going.",
    description:
      "Your business won't stand still, and your website shouldn't hold it back. We build with the flexibility to evolve alongside your goals.",
  },
];

export default function AboutValues() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-values-title"
    >
      <div className={styles.container}>
        {/* Section heading */}
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>
              What Matters to Us
            </span>

            <h2 id="about-values-title">
              Core Values
            </h2>
          </div>
        </Reveal>

        {/* Desktop and tablet cards */}
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div
              key={value.id}
              className={styles.valueItem}
            >
              <Reveal
                animation="fadeUp"
                delay={index * 100}
                duration={650}
                className={styles.valueReveal}
              >
                <article className={styles.valueCard}>
                  <span
                    className={styles.number}
                    aria-hidden="true"
                  >
                    {value.number}
                  </span>

                  <div className={styles.cardContent}>
                    <h3>{value.title}</h3>

                    <strong>{value.tagline}</strong>

                    <p>{value.description}</p>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile accordions */}
        <div className={styles.mobileValues}>
          {values.map((value, index) => (
            <div
              key={value.id}
              className={styles.mobileValueItem}
            >
              <Reveal
                animation="fadeUp"
                delay={(index % 2) * 90}
                duration={600}
                className={styles.mobileValueReveal}
              >
                <details className={styles.mobileValue}>
                  <summary>
                    <span
                      className={styles.mobileNumber}
                      aria-hidden="true"
                    >
                      {value.number}
                    </span>

                    <span className={styles.mobileTitle}>
                      {value.title}
                    </span>

                    <span
                      className={styles.toggleIcon}
                      aria-hidden="true"
                    >
                      <Plus
                        size={18}
                        strokeWidth={1.75}
                        className={styles.plus}
                      />

                      <Minus
                        size={18}
                        strokeWidth={1.75}
                        className={styles.minus}
                      />
                    </span>
                  </summary>

                  <div className={styles.mobileContent}>
                    <strong>{value.tagline}</strong>
                    <p>{value.description}</p>
                  </div>
                </details>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}