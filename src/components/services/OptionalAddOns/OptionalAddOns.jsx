
import {
  CalendarDays,
  Images,
  Mail,
  FileText,
  Sparkles,
  Database,
} from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { serviceAddOns } from "@/data/services";
import styles from "./OptionalAddOns.module.scss";

const iconMap = {
  calendar: CalendarDays,
  image: Images,
  mail: Mail,
  file: FileText,
  sparkles: Sparkles,
  database: Database,
};

export default function OptionalAddOns() {
  return (
    <section
      className={styles.section}
      aria-labelledby="optional-addons-title"
    >
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.intro}>
            <h2 id="optional-addons-title">
              Optional Add-Ons
            </h2>

            <p>
              Enhance your website with additional features
              and functionality.
            </p>
          </div>
        </Reveal>

        <div className={styles.addOns}>
          {serviceAddOns.map((addOn, index) => {
            const Icon = iconMap[addOn.icon];

            return (
              <div
                key={addOn.id}
                className={styles.addOnItem}
              >
                <Reveal
                  animation="fadeUp"
                  delay={(index % 3) * 90}
                  duration={600}
                  className={styles.addOnReveal}
                >
                  <div className={styles.addOn}>
                    <div
                      className={styles.icon}
                      aria-hidden="true"
                    >
                      {Icon && (
                        <Icon size={25} strokeWidth={1.5} />
                      )}
                    </div>

                    <div className={styles.details}>
                      <h3>
                        <span className={styles.desktopName}>
                          {addOn.name}
                        </span>

                        <span className={styles.mobileName}>
                          {addOn.shortName}
                        </span>
                      </h3>

                      <p className={styles.description}>
                        {addOn.description}
                      </p>
                    </div>

                    <span className={styles.price}>
                      ${addOn.price.toLocaleString()}+
                    </span>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
