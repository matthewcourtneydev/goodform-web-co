
import Image from "next/image";
import Reveal from "@/components/animations/Reveal";
import styles from "./WhatWeProvide.module.scss";

const services = [
  {
    title: "Website Development",
    description:
      "Custom, responsive websites designed around your business and built for real-world performance. Clean code, intuitive navigation, and a seamless experience across devices.",
    icon: "/icons/services/website-development.svg",
  },
  {
    title: "Design & Branding",
    description:
      "A cohesive visual identity that helps your business stand out. From layouts and typography to colors and branding, every detail works together to create a recognizable presence.",
    icon: "/icons/services/design-branding.svg",
  },
  {
    title: "Ongoing Support",
    description:
      "Your website shouldn't become another thing on your to-do list. We handle hosting, maintenance, updates, and the technical details so you can focus on running your business.",
    icon: "/icons/services/ongoing-support.svg",
  },
  {
    title: "Growth Focused",
    description:
      "A strong foundation for what's next. We prioritize usability, performance, and search engine fundamentals, with the flexibility to expand your website as your business grows.",
    icon: "/icons/services/growth-focused.svg",
  },
];

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
              From custom website development and visual
              branding to dependable hosting and ongoing
              support, Goodform brings the essentials
              together in one place. Every solution is
              tailored to your business, with flexibility
              to add new features as your needs evolve.
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
                    <Image
                      src={service.icon}
                      alt=""
                      width={80}
                      height={80}
                      aria-hidden="true"
                    />
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
