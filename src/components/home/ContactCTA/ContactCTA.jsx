
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm/ContactForm";
import styles from "./ContactCTA.module.scss";

export default function ContactCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="contact-cta-title"
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Let's Work Together</p>

          <h2 id="contact-cta-title">Start a Project</h2>

          <p className={styles.description}>
            Have something in mind? Tell us a little about your
            business and what you're looking to build. We'll take
            it from there.
          </p>

          <p className={styles.supporting}>
            No pressure, no complicated process. Just a
            conversation about what you need.
          </p>

          <Link href="/contact" className={styles.mobileCTA}>
            Get in Touch
          </Link>
        </div>

        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
