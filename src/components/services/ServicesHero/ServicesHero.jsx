import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesHero.module.scss";

export default function ServicesHero() {
  return (
    <section className={styles.section} aria-labelledby="services-hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Services & Pricing</p>

          <h1 id="services-hero-title" className={styles.title}>
            <span className={styles.titlePrimary}>Custom websites for</span>
            <span className={styles.titleSecondary}>real businesses.</span>
          </h1>

          <p className={styles.description}>
            From custom web design and development to reliable hosting and
            ongoing support, Goodform helps small businesses build a stronger
            online presence without the unnecessary complexity.
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

        <div className={styles.visual}>
          <Image
            src="/images/illustrations/services-hero.webp"
            alt="Goodform Web Co. illustration representing custom website design and development"
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
