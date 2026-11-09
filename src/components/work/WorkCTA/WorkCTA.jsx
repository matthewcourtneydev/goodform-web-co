
import Link from "next/link";
import styles from "./WorkCTA.module.scss";

export default function WorkCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="work-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="work-cta-title">
            Have a project in mind?
          </h2>

          <p>
            Let's talk about your business and what we can
            build together.
          </p>

          <Link
            href="/contact"
            className={styles.button}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
