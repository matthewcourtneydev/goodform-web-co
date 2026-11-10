
import Image from "next/image";
import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="contact-hero-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Get in Touch
          </p>

          <h1
            id="contact-hero-title"
            className={styles.title}
          >
            <span className={styles.titlePrimary}>
              Have something
            </span>
            <span className={styles.titleSecondary}>
              good in mind?
            </span>
          </h1>

          <p className={styles.description}>
            Have a website project in mind or looking to
            improve your online presence? Whether you're
            starting with an idea or a detailed plan,
            we'd love to hear about it. Tell us what
            you're looking for, and we'll be in touch
            to discuss the next steps.
          </p>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/illustrations/contact-hero.webp"
            alt="Goodform Web Co. contact page illustration"
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
