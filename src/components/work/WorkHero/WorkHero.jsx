
import Image from "next/image";
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
          <p className={styles.eyebrow}>
            Our Work
          </p>

          <h1
            id="work-hero-title"
            className={styles.title}
          >
            <span className={styles.titlePrimary}>
              Real businesses.
            </span>
            <span className={styles.titleSecondary}>
            Made to stand out.
            </span>
          </h1>

          <p className={styles.description}>
          Explore custom websites and digital experiences we've created for small businesses across different industries. Each project brings together purposeful design, reliable development, and a distinct personality that reflects the business behind it.
          </p>

          <div className={styles.actions}>
            <Link
              href="/contact"
              className={styles.primaryButton}
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className={styles.secondaryButton}
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/illustrations/work-hero.webp"
            alt="Goodform Web Co. illustration accompanying our portfolio of website design projects"
            width={1000}
            height={1000}
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 50vw, 720px"
            className={styles.illustration}
          />
        </div>
      </div>
    </section>
  );
}
