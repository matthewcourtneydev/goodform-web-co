import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";
import { navigation, legalNavigation } from "@/data/navigation";

const services = [
  "Custom Websites",
  "Website Redesigns",
  "Website Maintenance",
  "Branding & Identity",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="Goodform Web Co. home"
            >
              <Image
                src="/branding/stacked/stacked-dark.svg"
                alt="Goodform Web Co."
                width={260}
                height={260}
                className={styles.logoImage}
              />
            </Link>

            <p className={styles.tagline}>
              Thoughtful websites. Built with purpose.
            </p>

            <p className={styles.description}>
              Independent web design and development for businesses that care
              about what they do.
            </p>
          </div>

          <div className={styles.column}>
            <h2>Explore</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h2>What We Do</h2>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h2>Get in Touch</h2>
            <p>Have a project in mind?</p>
            <Link href="/contact" className={styles.contactButton}>
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Goodform Web Co. All rights reserved.
          </p>

          <div className={styles.legal}>
            {legalNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
