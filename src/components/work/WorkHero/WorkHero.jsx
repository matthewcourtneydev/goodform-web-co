import Link from "next/link";
import styles from "./WorkHero.module.scss";

export default function WorkHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="work-hero-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Our Work
          </span>

          <h1 id="work-hero-title">
            Real businesses.
            <br />
            Thoughtful solutions.
          </h1>

          <p>
            A look at the websites, brands, and digital
            experiences we've built for small businesses.
          </p>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              Start a Project
            </Link>

            <Link
              href="/contact"
              className={styles.secondaryButton}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}