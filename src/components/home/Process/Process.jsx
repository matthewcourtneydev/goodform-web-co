
import Reveal from "@/components/animations/Reveal";
import { processSteps } from "@/data/process";
import styles from "./Process.module.scss";

export default function Process() {
  return (
    <section
      className={styles.section}
      aria-labelledby="process-title"
    >
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>How We Work</p>

            <h2 id="process-title">Our Process</h2>

            <p className={styles.description}>
            From our first conversation to the day your website goes live, you'll know what's happening and what's coming next. Our process keeps things organized, collaborative, and focused on getting the details right.
            </p>
          </div>
        </Reveal>

        <ol className={styles.timeline}>
          {processSteps.map((step, index) => (
            <li key={step.number} className={styles.step}>
              <Reveal
                animation="fadeUp"
                delay={index * 110}
                duration={650}
                className={styles.stepReveal}
              >
                <div className={styles.marker} aria-hidden="true">
                  {step.number}
                </div>

                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
