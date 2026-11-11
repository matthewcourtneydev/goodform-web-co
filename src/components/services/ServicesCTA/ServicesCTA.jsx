
import Link from "next/link";
import styles from "./ServicesCTA.module.scss";

export default function ServicesCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="services-cta-title">
            Ready to get started?
          </h2>

          <p>
          Whether you're starting from scratch, refreshing an existing website, or exploring new ideas, we'd love to hear what you have in mind. Tell us a little about your business, and we'll help you figure out the next steps.
          </p>

          <Link href="/contact" className={styles.button}>
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
