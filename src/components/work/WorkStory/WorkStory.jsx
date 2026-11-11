
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import styles from "./WorkStory.module.scss";

const storyText =
  "Behind every website is a business with its own story, personality, and goals. We take the time to understand what makes each one unique, then bring those details together through purposeful design and development. The result is a website that looks the part, serves a purpose, and feels true to the business behind it.";

export default function WorkStory() {
  return (
    <section
      className={styles.section}
      aria-labelledby="work-story-title"
    >
      <div className={styles.container}>
        {/* Desktop / tablet content */}
        <div className={styles.desktopContent}>
          <Reveal
            animation="fadeUp"
            duration={650}
            className={styles.headingReveal}
          >
            <div className={styles.heading}>
              <span className={styles.eyebrow}>
                Our Approach
              </span>

              <h2 id="work-story-title">
                The story behind
                <br />
                the work.
              </h2>
            </div>
          </Reveal>

          <Reveal
            animation="fadeUp"
            delay={150}
            duration={700}
            className={styles.descriptionReveal}
          >
            <div className={styles.description}>
              <p>{storyText}</p>
            </div>
          </Reveal>
        </div>

        {/* Mobile accordion */}
        <Reveal
          animation="fadeUp"
          duration={650}
          className={styles.mobileReveal}
        >
          <details className={styles.mobileAccordion}>
            <summary
              className={styles.mobileHeader}
              id="work-story-mobile-title"
            >
              <span>The Story Behind the Work</span>

              <ChevronDown
                className={styles.chevron}
                size={19}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </summary>

            <div className={styles.mobileBody}>
              <p>{storyText}</p>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
