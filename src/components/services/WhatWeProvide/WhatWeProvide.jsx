
import Reveal from "@/components/animations/Reveal";
import styles from "./WhatWeProvide.module.scss";

const services = [
  {
    title: "Website Development",
    description:
      "Custom, responsive websites built around your business. Thoughtful functionality and clean code ensure everything works as good as it looks.",
    icon: "development",
  },
  {
    title: "Design & Branding",
    description:
      "Distinctive visuals that reflect your business and its personality. From layouts to brand identity, every detail works together.",
    icon: "design",
  },
  {
    title: "Ongoing Support",
    description:
      "Your website shouldn't be something you have to worry about. We handle updates, maintenance, and the technical details.",
    icon: "support",
  },
  {
    title: "Growth Focused",
    description:
      "Built with performance, usability, and search visibility in mind. A strong foundation that can evolve alongside your business.",
    icon: "growth",
  },
];

function ServiceIcon({ type }) {
  const paths = {
    development: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    design: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
    support: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path
          d="M10 2h4l.7 2.4 2 .9 2.2-1.2 2.8 2.8-1.2 2.2.9 2L24 12l-2.6.9-.9 2 1.2 2.2-2.8 2.8-2.2-1.2-2 .9L14 22h-4l-.7-2.4-2-.9-2.2 1.2-2.8-2.8 1.2-2.2-.9-2L0 12l2.6-.9.9-2-1.2-2.2 2.8-2.8 2.2 1.2 2-.9L10 2Z"
          transform="translate(2 2) scale(.8333)"
        />
      </>
    ),
    growth: (
      <>
        <rect x="3" y="14" width="4" height="7" rx="1" />
        <rect x="10" y="9" width="4" height="12" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
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

export default function WhatWeProvide() {
  return (
    <section
      className={styles.section}
      aria-labelledby="what-we-provide-title"
    >
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.intro}>
            <h2 id="what-we-provide-title">
              What We Provide
            </h2>

            <p>
              A complete website solution tailored to your
              business, with the flexibility to add what you
              need along the way.
            </p>
          </div>
        </Reveal>

        <div className={styles.services}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={styles.serviceItem}
            >
              <Reveal
                animation="fadeUp"
                delay={(index % 2) * 100}
                duration={650}
                className={styles.serviceReveal}
              >
                <div className={styles.service}>
                  <div className={styles.icon}>
                    <ServiceIcon type={service.icon} />
                  </div>

                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
