
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import styles from "./ContactProcess.module.scss";

const steps = [
  {
    number: "01",
    title: "Send Your Inquiry",
    description:
      "Share a few details about your business and what you're looking to accomplish.",
  },
  {
    number: "02",
    title: "Let's Talk",
    description:
      "We'll schedule a conversation to discuss your goals, explore ideas, and answer your questions.",
  },
  {
    number: "03",
    title: "Get a Proposal",
    description:
      "You'll receive a personalized proposal outlining the recommended approach, timeline, and pricing.",
  },
];

export default function ContactProcess() {
  return (
    <section
      className={styles.section}
      aria-labelledby="contact-process-title"
    >
      <div className={styles.container}>
        {/* Section heading */}
        <Reveal
          animation="fadeUp"
          duration={650}
          className={styles.headingReveal}
        >
          <div className={styles.heading}>
            <span className={styles.eyebrow}>
              The Process
            </span>

            <h2 id="contact-process-title">
              What Happens Next?
            </h2>
          </div>
        </Reveal>

        {/* Process steps */}
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={styles.step}
            >
              <Reveal
                animation="fadeUp"
                delay={index * 120}
                duration={700}
                className={styles.stepReveal}
              >
                <div className={styles.stepCard}>
                  <span
                    className={styles.number}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </Reveal>

              {index < steps.length - 1 && (
                <ArrowRight
                  className={styles.arrow}
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
