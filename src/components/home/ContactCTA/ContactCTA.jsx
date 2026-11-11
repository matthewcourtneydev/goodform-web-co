import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import styles from "./ContactCTA.module.scss";

export default function ContactCTA() {
  return (
    <section className={styles.section} aria-labelledby="contact-cta-title">
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650} className={styles.introReveal}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Let's Work Together</p>
            <h2 id="contact-cta-title">Start a Project</h2>
            <p className={styles.description}>
              Have something in mind? Tell us a little about your business and
              what you're looking to build. We'll take it from there.
            </p>
            <p className={styles.supporting}>
              No pressure, no complicated process. Just a conversation about
              what you need.
            </p>
            <Link href="/contact" className={styles.mobileCTA}>Get in Touch</Link>
          </div>
        </Reveal>
        <Reveal animation="fadeUp" delay={150} duration={750} className={styles.formReveal}>
          <div className={styles.formContainer}>
            <ContactForm source="homepage" variant="compact" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
