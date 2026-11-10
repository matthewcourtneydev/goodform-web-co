
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo/ContactInfo";

import Reveal from "@/components/animations/Reveal";
import styles from "./ContactInquiry.module.scss";

export default function ContactInquiry() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Reveal
            animation="fadeUp"
            duration={700}
            className={styles.formReveal}
          >
            <ContactForm />
          </Reveal>

          <Reveal
            animation="fadeUp"
            delay={150}
            duration={700}
            className={styles.infoReveal}
          >
            <ContactInfo />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
