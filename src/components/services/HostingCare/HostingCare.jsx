
import { Server, Check, ChevronDown } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import styles from "./HostingCare.module.scss";

const careBenefits = [
  "Secure, high-performance hosting",
  "Core updates and monitoring",
  "Backups and stability checks",
  "Optional content updates",
];

function CareContent() {
  return (
    <div className={styles.content}>
      <div className={styles.intro}>
        <div className={styles.icon} aria-hidden="true">
          <Server size={34} strokeWidth={1.5} />
        </div>

        <div className={styles.introText}>
          <h2>Hosting & Ongoing Care</h2>

          <p>
            Keep your site fast, secure, and up to date with
            fully managed hosting and reliable maintenance.
          </p>
        </div>
      </div>

      <ul className={styles.benefits}>
        {careBenefits.map((benefit) => (
          <li key={benefit}>
            <Check
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HostingCare() {
  return (
    <section
      className={styles.section}
      aria-label="Hosting and ongoing care"
    >
      <div className={styles.container}>
        {/* Desktop and mobile full panel */}
        <Reveal
          animation="fadeUp"
          duration={700}
          className={styles.desktopReveal}
        >
          <div className={styles.desktopPanel}>
            <CareContent />
          </div>
        </Reveal>

        {/* Tablet accordion */}
        <Reveal
          animation="fadeUp"
          duration={700}
          className={styles.accordionReveal}
        >
          <details className={styles.accordion}>
            <summary className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>
                <Server
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Hosting & Ongoing Care
              </span>

              <ChevronDown
                className={styles.chevron}
                size={19}
                aria-hidden="true"
              />
            </summary>

            <div className={styles.accordionBody}>
              <p className={styles.accordionDescription}>
                Keep your site fast, secure, and up to date
                with fully managed hosting and reliable
                maintenance.
              </p>

              <ul className={styles.accordionBenefits}>
                {careBenefits.map((benefit) => (
                  <li key={benefit}>
                    <Check
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
