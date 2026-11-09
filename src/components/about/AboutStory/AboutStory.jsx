
import {
    Monitor,
    Code2,
    Layers3,
    ChevronDown,
  } from "lucide-react";
  
  import styles from "./AboutStory.module.scss";
  
  const storySections = [
    {
      id: "creativity",
      title: "From creativity to code.",
      paragraphs: [
        "Founded by Matthew Courtney, Goodform brings together a lifelong passion for art and design with years of professional software development experience.",
        "What started as a creative outlet during the pandemic quickly became a deeper passion for building complete, meaningful digital experiences.",
      ],
    },
    {
      id: "why-goodform",
      title: "Why Goodform exists.",
      paragraphs: [
        "After helping a friend transform an underwhelming website into a brand, a stronger online presence, and a growing business, it became clear: many small businesses are passionate about what they do, but don't always have the tools or support to show it online.",
        "That's why I started Goodform. To build websites that look great, work beautifully, and genuinely represent the people behind them.",
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
          <span
            className={styles.eyebrow}
            id="about-story-title"
          >
            The Story
          </span>
  
          {/* Desktop and tablet story */}
          <div className={styles.storyGrid}>
            {storySections.map((section) => (
              <div
                key={section.id}
                className={styles.storyBlock}
              >
                <h2>{section.title}</h2>
  
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      section.id === "why-goodform" &&
                      index === section.paragraphs.length - 1
                        ? styles.closingStatement
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
  
          {/* Mobile story accordions */}
          <div className={styles.mobileStory}>
            {storySections.map((section) => (
              <details
                key={section.id}
                className={styles.storyAccordion}
              >
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
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        section.id === "why-goodform" &&
                        index === section.paragraphs.length - 1
                          ? styles.closingStatement
                          : undefined
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
  
          {/* Benefits */}
          <div className={styles.benefits}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
  
              return (
                <div
                  key={benefit.title}
                  className={styles.benefit}
                >
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
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  