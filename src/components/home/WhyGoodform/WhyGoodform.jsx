
import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import styles from "./WhyGoodform.module.scss";

const values = [
  {
    title: "Personal & Direct",
    description:
      "No account managers, middlemen, or unnecessary handoffs. You'll work directly with the person designing and developing your website, with clear communication and a collaborative process from start to finish.",
    icon: "/icons/personal-direct.svg",
  },
  {
    title: "Thoughtful by Design",
    description:
      "No one-size-fits-all templates or design for the sake of decoration. Every layout, interaction, and visual detail is shaped around your business, your audience, and what you want to accomplish.",
    icon: "/icons/thoughtful-design.svg",
  },
  {
    title: "Built for the Long Run",
    description:
      "Your website should do more than look good on launch day. We focus on performance, accessibility, and maintainability, creating a reliable foundation that can adapt as your business evolves.",
    icon: "/icons/long-run.svg",
  },
];

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
              A great website starts with understanding the
              people behind the business. We combine a
              hands-on approach, intentional design, and
              dependable development to create something
              that works for you.
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
                  <Image
                    src={value.icon}
                    alt=""
                    width={96}
                    height={96}
                    aria-hidden="true"
                  />
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
