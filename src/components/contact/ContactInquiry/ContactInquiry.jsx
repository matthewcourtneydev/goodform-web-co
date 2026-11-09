
import ContactForm from "@/components/contact/ContactForm/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo/ContactInfo";

import styles from "./ContactInquiry.module.scss";

export default function ContactInquiry() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
