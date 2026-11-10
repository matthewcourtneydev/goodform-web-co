
import Reveal from "@/components/animations/Reveal";
import styles from "./WhyGoodform.module.scss";

const values = [
  {
    title: "Personal & Direct",
    description:
      "No layers of account managers or unnecessary handoffs. You'll work directly with the person designing and building your website, keeping communication clear and your vision at the center.",
    icon: "personal",
  },
  {
    title: "Thoughtful by Design",
    description:
      "Your business deserves more than a generic template. Every layout, interaction, and visual detail is considered with your audience, personality, and goals in mind.",
    icon: "design",
  },
  {
    title: "Built for the Long Run",
    description:
      "A great website should work just as well as it looks. We build with performance, usability, and room to grow in mind, so your site continues supporting your business after launch.",
    icon: "longTerm",
  },
];

function ValueIcon({ type }) {
  const paths = {
    personal: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M6.5 16c.5-2 4.5-2 5 0M14 10h4M14 13h3" />
      </>
    ),
    design: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="15.5" cy="9" r="1.5" />
        <path d="m5 17 5-5 3 3 2-2 4 4" />
      </>
    ),
    longTerm: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

export default function WhyGoodform() {
  return (
    <section
      className={styles.section}
      aria-labelledby="why-goodform-title"
    >
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>
              The Goodform Difference
            </p>

            <h2 id="why-goodform-title">
              Why Goodform?
            </h2>

            <p className={styles.introDescription}>
              Good design should feel personal, work beautifully,
              and make a real difference for your business.
              That's the thinking behind everything we build.
            </p>
          </div>
        </Reveal>

        <div className={styles.values}>
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              animation="fadeUp"
              delay={index * 120}
              duration={650}
              className={styles.valueReveal}
            >
              <div className={styles.value}>
                <div className={styles.icon}>
                  <ValueIcon type={value.icon} />
                </div>

                <div className={styles.valueContent}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
