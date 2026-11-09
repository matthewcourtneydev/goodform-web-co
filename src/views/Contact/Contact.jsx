
import ContactHero from "@/components/contact/ContactHero/ContactHero";
import ContactInquiry from "@/components/contact/ContactInquiry/ContactInquiry";
import ContactProcess from "@/components/contact/ContactProcess/ContactProcess";

import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <ContactHero />
      <ContactInquiry />
      <ContactProcess />
    </div>
  );
}
