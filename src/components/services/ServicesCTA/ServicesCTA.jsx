
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
            Have a project in mind? Let's talk about what
            you're looking to build and find the right
            solution for your business.
          </p>

          <Link href="/contact" className={styles.button}>
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}
