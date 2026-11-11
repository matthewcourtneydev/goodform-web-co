import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ClipboardList,
  Heart,
  UsersRound,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import styles from "./WeddingWebsites.module.scss";

const features = [
  "Personalized wedding website",
  "Guest lists & RSVP management",
  "Vendor & event organization",
  "Downloadable planning reports",
];

const dashboardItems = [
  {
    label: "Confirmed",
    value: "112",
  },
  {
    label: "Awaiting",
    value: "36",
  },
];

export default function WeddingWebsites() {
  return (
    <section
      className={styles.section}
      aria-labelledby="wedding-websites-title"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Section content */}
          <Reveal
            animation="fadeUp"
            duration={700}
            className={styles.contentReveal}
          >
            <div className={styles.content}>
              <span className={styles.eyebrow}>Specialty Websites</span>

              <h2 id="wedding-websites-title">
                More than a wedding website.
                <span> Everything in one place.</span>
              </h2>

              <p className={styles.description}>
              Give your guests a beautiful place to RSVP, find event details, and explore your registry. Behind the scenes, keep everything organized with a private planning hub for schedules, vendors, guest lists, and downloadable reports.
              </p>

              <ul className={styles.features}>
                {features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} strokeWidth={2} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={styles.cta}>
                Ask About Wedding Websites
              </Link>
            </div>
          </Reveal>

          {/* Product preview */}
          <Reveal
            animation="fadeUp"
            delay={150}
            duration={750}
            className={styles.visualReveal}
          >
            <div
              className={styles.visual}
              aria-label="Illustration of a wedding website and planning dashboard"
              role="img"
            >
              {/* Guest-facing wedding website */}
              <div className={styles.websitePreview}>
                <div className={styles.browserBar}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.websiteInner}>
                  <div className={styles.websiteTop}>
                    <Heart size={16} strokeWidth={1.5} aria-hidden="true" />
                    <span>OUR WEDDING</span>
                  </div>

                  <div className={styles.websiteHero}>
                    <span className={styles.websiteEyebrow}>
                      Together with our favorite people
                    </span>

                    <strong>
                      Alex
                      <span>&</span>
                      Taylor
                    </strong>

                    <span className={styles.websiteDate}>
                      SEPTEMBER 18, 2027
                    </span>
                  </div>

                  <div className={styles.websiteFooter}>
                    <span>THE DETAILS</span>
                    <span>OUR STORY</span>
                    <span>RSVP</span>
                  </div>
                </div>
              </div>

              {/* Private planning dashboard */}
              <div className={styles.dashboardPreview}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardIdentity}>
                    <span className={styles.dashboardMark}>
                      <Heart size={14} strokeWidth={1.75} aria-hidden="true" />
                    </span>

                    <div>
                      <span className={styles.dashboardLabel}>
                        PLANNING HUB
                      </span>
                      <strong>Wedding Overview</strong>
                    </div>
                  </div>

                  <span className={styles.dashboardMenu}>
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                <div className={styles.dashboardStats}>
                  {dashboardItems.map((item) => (
                    <div key={item.label} className={styles.stat}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.dashboardProgress}>
                  <div className={styles.progressHeading}>
                    <span>RSVP Progress</span>
                    <strong>76%</strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <span />
                  </div>
                </div>

                <div className={styles.dashboardLinks}>
                  <div>
                    <UsersRound
                      size={16}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>Guests & RSVPs</span>
                  </div>

                  <div>
                    <CalendarDays
                      size={16}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>Event Schedule</span>
                  </div>

                  <div>
                    <ClipboardList
                      size={16}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>Vendor Details</span>
                  </div>
                </div>
              </div>

              <div className={styles.visualAccent} aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
