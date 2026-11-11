
import {
  Monitor,
  Code2,
  Layers3,
  ChevronDown,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import styles from "./AboutStory.module.scss";

const storySections = [
  {
    id: "creativity",
    title: "From creativity to code.",
    paragraphs: [
      "Founded by Matthew Courtney, Goodform Web Co. brings together a lifelong interest in art and design with years of professional software development experience.",
      "What began as a creative outlet during the pandemic gradually grew into something more. Exploring web design opened the door to development, where creativity and problem-solving came together in a way that felt natural.",
      "Over time, that interest became a career in software development and a passion for creating complete digital experiences. Goodform is where those two sides meet: the creativity to make something distinctive and the technical experience to make it work."
    ],
  },
  {
    id: "why-goodform",
    title: "Why Goodform exists.",
    paragraphs: [
      "Goodform started taking shape while I was helping a friend improve their business's website. What began as a simple redesign turned into something much bigger: a stronger brand, a more professional online presence, and a website that could actually support the business as it grew.",
      "That experience showed me how much of a difference the right website can make, especially for small business owners who are already juggling everything else that comes with running a business.",
      "I started Goodform because I believe small businesses deserve the same level of care, creativity, and technical quality as the big guys, without losing the personal connection that makes working together worthwhile."
    ],
  },
];

const benefits = [
  {
    title: "Direct Collaboration",
    description:
      "Work directly with the person designing and building your site.",
    icon: Monitor,
  },
  {
    title: "Thoughtful, Custom Solutions",
    description:
      "A website shaped around your business, not a template.",
    icon: Code2,
  },
  {
    title: "Long-Term Support",
    description:
      "Ongoing care and updates as your business grows.",
    icon: Layers3,
  },
];

export default function AboutStory() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-story-title"
    >
      <div className={styles.container}>
        {/* Section eyebrow */}
        <Reveal animation="fadeUp" duration={600}>
          <span
            className={styles.eyebrow}
            id="about-story-title"
          >
            The Story
          </span>
        </Reveal>

        {/* Desktop and tablet story */}
        <div className={styles.storyGrid}>
          {storySections.map((section, index) => (
            <div
              key={section.id}
              className={styles.storyItem}
            >
              <Reveal
                animation="fadeUp"
                delay={index * 120}
                duration={700}
                className={styles.storyReveal}
              >
                <div className={styles.storyBlock}>
                  <h2>{section.title}</h2>

                  {section.paragraphs.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className={
                          section.id === "why-goodform" &&
                          paragraphIndex ===
                            section.paragraphs.length - 1
                            ? styles.closingStatement
                            : undefined
                        }
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile story accordions */}
        <div className={styles.mobileStory}>
          {storySections.map((section, index) => (
            <div
              key={section.id}
              className={styles.mobileStoryItem}
            >
              <Reveal
                animation="fadeUp"
                delay={index * 100}
                duration={650}
                className={styles.accordionReveal}
              >
                <details className={styles.storyAccordion}>
                  <summary>
                    <span>{section.title}</span>

                    <ChevronDown
                      size={18}
                      strokeWidth={1.75}
                      className={styles.chevron}
                      aria-hidden="true"
                    />
                  </summary>

                  <div className={styles.accordionContent}>
                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className={
                            section.id === "why-goodform" &&
                            paragraphIndex ===
                              section.paragraphs.length - 1
                              ? styles.closingStatement
                              : undefined
                          }
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </details>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className={styles.benefits}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={styles.benefit}
              >
                <Reveal
                  animation="fadeUp"
                  delay={index * 100}
                  duration={650}
                  className={styles.benefitReveal}
                >
                  <div className={styles.benefitInner}>
                    <Icon
                      size={30}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />

                    <div className={styles.benefitContent}>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
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
 