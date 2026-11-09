
import { ArrowRight } from "lucide-react";

import styles from "./ContactProcess.module.scss";

const steps = [
  {
    number: "01",
    title: "Send Your Inquiry",
    description:
      "Share a few details about your project so we can learn more about what you're looking for.",
  },
  {
    number: "02",
    title: "Let's Talk",
    description:
      "We'll reach out to schedule a quick call, talk through your goals, and answer any questions.",
  },
  {
    number: "03",
    title: "Get a Proposal",
    description:
      "You'll receive a clear, customized proposal with recommendations, timing, and next steps.",
  },
];

export default function ContactProcess() {
  return (
    <section
      className={styles.section}
      aria-labelledby="contact-process-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            The Process
          </span>

          <h2 id="contact-process-title">
            What Happens Next?
          </h2>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.number} className={styles.step}>
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
