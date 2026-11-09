
import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="contact-hero-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Get in Touch
          </span>

          <h1 id="contact-hero-title">
            Have something
            <br />
            good in mind?
          </h1>

          <p>
            Whether you've got a fully formed project or just
            an idea, we'd love to hear about it. Tell us a bit
            about what you're looking for, and we'll be in
            touch soon to continue the conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
