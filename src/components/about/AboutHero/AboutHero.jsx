import Image from "next/image";
import Link from "next/link";
import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>About Goodform</p>

          <h1 id="about-hero-title" className={styles.title}>
            <span className={styles.titlePrimary}>A small studio with a</span>
            <span className={styles.titleSecondary}>hands-on approach.</span>
          </h1>

          <p className={styles.description}>
          Goodform Web Co. is a small, independent web design and development studio with a simple goal: helping small businesses make a big impression online. From the first conversation to the final launch, we bring creativity, technical expertise, and a personal touch to every project.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.button}>
              Let's Work Together
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/illustrations/about-hero.webp"
            alt="Goodform Web Co. studio illustration"
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
