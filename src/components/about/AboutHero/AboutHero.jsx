
import Link from "next/link";
import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="about-hero-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            About Goodform
          </span>

          <h1 id="about-hero-title">
            A small studio
            <br />
            with a hands-on
            <br />
            approach.
          </h1>

          <p>
            Goodform Web Co. is an independent web studio
            bringing thoughtful design, custom development,
            and a personal approach to small businesses
            that deserve to stand out.
          </p>

          <Link href="/contact" className={styles.button}>
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
