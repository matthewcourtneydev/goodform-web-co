
import { processSteps } from "@/data/process";
import styles from "./Process.module.scss";

export default function Process() {
  return (
    <section
      className={styles.section}
      aria-labelledby="process-title"
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>How We Work</p>

          <h2 id="process-title">Our Process</h2>

          <p className={styles.description}>
            A clear, collaborative approach from the first
            conversation to launch day. Every step is designed
            to keep you informed, involved, and confident in
            what we're building together.
          </p>
        </div>

        <ol className={styles.timeline}>
          {processSteps.map((step) => (
            <li key={step.number} className={styles.step}>
              <div
                className={styles.marker}
                aria-hidden="true"
              >
                {step.number}
              </div>

              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
