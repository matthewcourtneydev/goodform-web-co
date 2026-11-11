
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
          A small web studio for local businesses
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
          Custom web design and development for small businesses in Charlotte, NC and beyond. From first impressions to lasting performance, we build websites that connect with customers and support your business as it grows.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryButton}>
              Start a Project
            </Link>

            <Link href="/work" className={styles.secondaryButton}>
              View Our Work
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/illustrations/otter-at-desk.webp"
            alt="Illustration of the Goodform otter working at a desk"
            width={1000}
            height={1000}
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 80vw, (max-width: 1200px) 50vw, 620px"
            className={styles.illustration}
          />
        </div>
      </div>
    </section>
  );
}
