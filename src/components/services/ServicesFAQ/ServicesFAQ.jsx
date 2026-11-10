
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import styles from "./ServicesFAQ.module.scss";

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Timelines depend on the size and complexity of your project. A landing page typically takes 2–3 weeks, while a standard business website takes around 3–5 weeks. Larger or custom projects may take longer. We'll establish an estimated timeline together before work begins.",
  },
  {
    question: "What's included in the price of a website?",
    answer:
      "Every website package includes custom design and development, a mobile-responsive layout, basic on-page SEO setup, and essential integrations like contact forms and social links. Additional features can be added based on your needs. You'll receive a clear breakdown of what's included before committing to a project.",
  },
  {
    question: "Do I need to provide my own content and images?",
    answer:
      "Not necessarily. If you already have photos, branding, or written content, we'll work with what you have. If you're starting from scratch, we can help organize your content, refine your messaging, and explore options for imagery and other creative assets. We'll discuss what you need during the planning process.",
  },
  {
    question: "Can I update my website myself?",
    answer:
      "Absolutely. If you'd like to manage your own content, we can integrate a content management system (CMS) that makes updates easier. If you'd rather stay focused on running your business, Goodform can handle website updates and ongoing maintenance for you.",
  },
  {
    question: "Do you offer hosting and maintenance?",
    answer:
      "Yes. Goodform offers fully managed hosting and ongoing website care, including monitoring, maintenance, backups, and technical support. We'll recommend an arrangement that fits your website so you don't have to worry about the technical details.",
  },
];

export default function ServicesFAQ() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-faq-title"
    >
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.intro}>
            <h2 id="services-faq-title">
              Frequently Asked Questions
            </h2>

            <p>
              A few common questions about working with Goodform.
            </p>
          </div>
        </Reveal>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={styles.faqItem}
            >
              <Reveal
                animation="fadeUp"
                delay={(index % 3) * 90}
                duration={600}
                className={styles.faqReveal}
              >
                <details className={styles.faq}>
                  <summary className={styles.question}>
                    <span>{faq.question}</span>

                    <span
                      className={styles.indicator}
                      aria-hidden="true"
                    >
                      <Plus
                        className={styles.plus}
                        size={19}
                        strokeWidth={1.75}
                      />

                      <Minus
                        className={styles.minus}
                        size={19}
                        strokeWidth={1.75}
                      />
                    </span>
                  </summary>

                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
