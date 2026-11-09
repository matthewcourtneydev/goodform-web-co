
import Link from "next/link";

import styles from "./AboutCTA.module.scss";

export default function AboutCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.content}>
            <h2 id="about-cta-title">
              Let's build something good.
            </h2>

            <p>
              You've put your passion into your business.
              Let's build a website that reflects it.
            </p>
          </div>

          <Link href="/contact" className={styles.button}>
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
