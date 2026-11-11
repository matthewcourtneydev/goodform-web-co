
import { Plus, Minus } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import styles from "./ServicesFAQ.module.scss";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines depend on the size and complexity of your website. A landing page typically takes 2–3 weeks, while a standard business website takes around 3–5 weeks. Larger websites and custom functionality may require additional time. We'll discuss your goals, establish a realistic timeline, and outline the process before development begins.",
  },
  {
    question: "What's included in the price of a website?",
    answer:
      "Every Goodform website includes custom design and development, mobile-responsive layouts, foundational SEO, and essential features like contact forms and social media links. Additional functionality, such as online booking, content management, or e-commerce, can be added based on your needs. You'll receive a clear breakdown of what's included before committing to a project.",
  },
  {
    question: "Do I need to provide my own content and images?",
    answer:
      "Not necessarily! If you already have photos, branding, or written content, we'll incorporate them into your website. If you're starting from scratch, we can help organize your ideas, refine your messaging, and explore options for imagery and other creative assets. We'll figure out what you need together during the planning process.",
  },
  {
    question: "Can I update my website myself?",
    answer:
      "Absolutely. If you'd like to manage your own content, we can integrate a content management system (CMS) that allows you to make updates without touching the code. Prefer to leave the technical work to someone else? Goodform can handle content updates and ongoing maintenance, so you can focus on your business.",
  },
  {
    question: "Do you offer hosting and maintenance?",
    answer:
      "Yes! Goodform offers fully managed website hosting and ongoing care, including routine updates, monitoring, backups, and technical support. We take care of the behind-the-scenes work to keep your website secure, performing well, and running smoothly long after launch.",
  },
  {
    question: "Do I own my website once it's finished?",
    answer: "Yes! Once your project is complete and paid for, you'll own your website's final design and content, subject to any third-party licenses. Goodform can handle hosting, maintenance, and ongoing support, but you're never required to stay with us. If you decide to move to another provider, we'll help make the transition as smooth as possible."
  }
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
