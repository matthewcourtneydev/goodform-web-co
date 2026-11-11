
import Link from "next/link";

import Reveal from "@/components/animations/Reveal";
import styles from "./AboutCTA.module.scss";

export default function AboutCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-cta-title"
    >
      <div className={styles.container}>
        <Reveal
          animation="fadeUp"
          duration={750}
          className={styles.panelReveal}
        >
          <div className={styles.panel}>
            <div className={styles.content}>
              <h2 id="about-cta-title">
                Let's build something good.
              </h2>

              <p>
              You've put your passion into your business. Let's create a website that reflects it, tells your story, and gives your customers a reason to choose you. Whether you're starting from scratch or ready for something better, we'd love to hear what you have in mind.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.button}
            >
              Start a Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
