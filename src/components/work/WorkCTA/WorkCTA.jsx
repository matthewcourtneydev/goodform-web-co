
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
          Like what you see? Let's build yours.
          </h2>

          <p>
          Every great website starts with a conversation. Tell us about your business, what you have in mind, and where you'd like to take it.
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
