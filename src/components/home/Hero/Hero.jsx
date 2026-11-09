
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            A small web studio for local business
          </p>

          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titlePrimary}>
              Thoughtful websites.
            </span>

            <span className={styles.titleSecondary}>
              Built with purpose.
            </span>
          </h1>

          <p className={styles.description}>
            Custom websites, simple solutions, and real support
            for businesses that do things the right way.
          </p>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              Start a Project
            </Link>

            <Link
              href="/work"
              className={styles.secondaryButton}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
