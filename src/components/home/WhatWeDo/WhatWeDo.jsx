
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import styles from "./WhatWeDo.module.scss";

const services = [
  {
    title: "Website Development",
    description:
      "Custom, responsive sites built for your business.",
    image: "/images/illustrations/what-development.webp",
    alt: "Goodform otter working on a laptop",
  },
  {
    title: "Design & Branding",
    description:
      "Thoughtful, consistent visual identity.",
    image: "/images/illustrations/what-branding.webp",
    alt: "Goodform otter painting at an easel",
  },
  {
    title: "Ongoing Support",
    description:
      "Hosting, updates, and long-term care.",
    image: "/images/illustrations/what-support.webp",
    alt: "Goodform otter providing support with a laptop",
  },
];

export default function WhatWeDo() {
  return (
    <section
      className={styles.section}
      aria-labelledby="what-we-do-title"
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <Reveal delay={0} duration={550}>
            <h2 id="what-we-do-title">What We Do</h2>
          </Reveal>

          <Reveal delay={100} duration={600}>
            <p>
              Custom websites and digital solutions that
              help small businesses show up, stand out,
              and grow online.
            </p>
          </Reveal>
        </div>

        <div className={styles.services}>
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 100}
              duration={650}
              className={styles.serviceReveal}
            >
              <Link
                href="/services"
                className={styles.service}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 600px) 110px, (max-width: 1024px) 30vw, 220px"
                    className={styles.serviceImage}
                  />
                </div>

                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
