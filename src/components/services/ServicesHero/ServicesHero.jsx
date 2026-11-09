import Link from "next/link";
import styles from "./ServicesHero.module.scss";

export default function ServicesHero() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-hero-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Services & Pricing</p>

          <h1 id="services-hero-title">
            Custom websites for real businesses.
          </h1>

          <p className={styles.description}>
            Thoughtful design, clean development, and ongoing
            support to help your business grow online.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryCTA}>
              Get a Quote
            </Link>

            <Link href="/work" className={styles.secondaryCTA}>
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}