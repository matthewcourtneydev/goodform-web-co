
import { Mail, UsersRound, Lightbulb, ArrowUpRight } from "lucide-react";

import SocialLinks from "@/components/common/SocialLinks/SocialLinks";
import styles from "./ContactInfo.module.scss";

export default function ContactInfo() {
  return (
    <aside
      className={styles.sidebar}
      aria-labelledby="contact-info-title"
    >
      <h2 id="contact-info-title">Get in Touch</h2>

      {/* Contact information */}
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <Mail
            size={23}
            strokeWidth={1.75}
            aria-hidden="true"
          />

          <div className={styles.infoContent}>
            <a href="mailto:hello@goodformwebco.com">
              hello@goodformwebco.com
            </a>
          </div>
        </div>

        <div className={styles.infoItem}>
          <UsersRound
            size={23}
            strokeWidth={1.75}
            aria-hidden="true"
          />

          <div className={styles.infoContent}>
            <h3>Work directly with Goodform.</h3>

            <p>
              You'll collaborate directly with the studio —
              no account managers, no handoffs.
            </p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <Lightbulb
            size={23}
            strokeWidth={1.75}
            aria-hidden="true"
          />

          <div className={styles.infoContent}>
            <h3>Early-stage ideas are welcome.</h3>

            <p>
              You don't need to have everything figured out.
              If you're exploring options or just starting
              to plan, that's great.
            </p>
          </div>
        </div>
      </div>

      {/* Featured message */}
      <div className={styles.featurePanel}>
        <span className={styles.featureEyebrow}>
          A Personal Approach
        </span>

        <h3>
          Good websites start with good conversations.
        </h3>

        <p>
          Tell us what you're working toward. We'll help
          you explore what's possible and find the right
          approach for your business.
        </p>
      </div>

      {/* Social links */}
      <div className={styles.socialSection}>
        <h3 className={styles.socialHeading}>
          Follow Goodform
        </h3>

        <SocialLinks variant="dark" />
      </div>
    </aside>
  );
}
