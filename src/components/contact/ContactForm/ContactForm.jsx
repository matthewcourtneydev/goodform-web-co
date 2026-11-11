"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import styles from "./ContactForm.module.scss";

const serviceOptions = [
  { value: "website", label: "Website Design & Development" },
  { value: "redesign", label: "Website Redesign" },
  { value: "branding", label: "Branding & Identity" },
  { value: "maintenance", label: "Website Maintenance" },
  { value: "other", label: "Something Else" },
];

const budgetOptions = [
  { value: "under-1000", label: "Under $1,000" },
  { value: "1000-2500", label: "$1,000 – $2,500" },
  { value: "2500-5000", label: "$2,500 – $5,000" },
  { value: "5000-plus", label: "$5,000+" },
  { value: "unsure", label: "Not Sure Yet" },
];

const timelineOptions = [
  { value: "asap", label: "As Soon As Possible" },
  { value: "1-month", label: "Within 1 Month" },
  { value: "1-3-months", label: "1–3 Months" },
  { value: "3-plus-months", label: "3+ Months" },
  { value: "flexible", label: "Flexible / Just Exploring" },
];

const initialForm = {
  name: "",
  email: "",
  business: "",
  service: "",
  description: "",
  budget: "",
  timeline: "",
};

export default function ContactForm({ source = "contact-page", variant = "full" }) {
  const isCompact = variant === "compact";
  const [formData, setFormData] = useState(initialForm);
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const turnstileRef = useRef(null);
  const formId = useId().replace(/:/g, "");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const cardClass = `${styles.formCard} ${isCompact ? styles.compact : ""}`;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (errorMessage) setErrorMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting || isSubmitted) return;

    if (!turnstileToken) {
      setErrorMessage("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website,
          source,
          turnstileToken,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        if (response.status === 429) {
          throw new Error("Too many attempts. Please wait a few minutes before trying again.");
        }
        throw new Error(result.error || "Unable to send your inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  }

  if (isSubmitted) {
    return (
      <section
        className={`${cardClass} ${styles.confirmationCard}`}
        aria-labelledby={`${formId}-confirmation-title`}
      >
        <div className={styles.confirmation} role="status" aria-live="polite">
          <div className={styles.confirmationIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 4 4L19 6" />
            </svg>
          </div>
          <h2 id={`${formId}-confirmation-title`}>Thanks for reaching out!</h2>
          <p>
            Your inquiry has been received. We&apos;ll review your project
            details and be in touch shortly.
          </p>
          <Link href="/" className={styles.confirmationLink}>Back to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className={cardClass} aria-labelledby={`${formId}-title`}>
      <h2 id={`${formId}-title`}>Tell Us About Your Project</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor={`${formId}-name`}>Full name <span aria-hidden="true">*</span></label>
            <input id={`${formId}-name`} name="name" type="text" autoComplete="name" maxLength={100} value={formData.name} onChange={handleChange} required />
          </div>

          <div className={styles.field}>
            <label htmlFor={`${formId}-email`}>Email address <span aria-hidden="true">*</span></label>
            <input id={`${formId}-email`} name="email" type="email" autoComplete="email" maxLength={254} value={formData.email} onChange={handleChange} required />
          </div>

          <div className={`${styles.field} ${isCompact ? "" : styles.fullWidth}`}>
            <label htmlFor={`${formId}-business`}>Business name</label>
            <input id={`${formId}-business`} name="business" type="text" autoComplete="organization" maxLength={150} value={formData.business} onChange={handleChange} />
          </div>

          <div className={`${styles.field} ${isCompact ? "" : styles.fullWidth}`}>
            <label htmlFor={`${formId}-service`}>What can we help with? <span aria-hidden="true">*</span></label>
            <select id={`${formId}-service`} name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor={`${formId}-description`}>Tell us about your project <span aria-hidden="true">*</span></label>
            <textarea id={`${formId}-description`} name="description" rows={5} minLength={10} maxLength={5000} value={formData.description} onChange={handleChange} required />
          </div>

          {!isCompact && (
            <>
              <div className={styles.field}>
                <label htmlFor={`${formId}-budget`}>Estimated budget</label>
                <select id={`${formId}-budget`} name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">Select a range</option>
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor={`${formId}-timeline`}>Ideal timeline</label>
                <select id={`${formId}-timeline`} name="timeline" value={formData.timeline} onChange={handleChange}>
                  <option value="">Select a timeframe</option>
                  {timelineOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input id={`${formId}-website`} name="website" type="text" autoComplete="off" tabIndex={-1} value={website} onChange={(event) => setWebsite(event.target.value)} />
        </div>

        {siteKey ? (
          <div className={styles.turnstileContainer}>
            <Turnstile
              ref={turnstileRef}
              siteKey={siteKey}
              onSuccess={(token) => { setTurnstileToken(token); setErrorMessage(""); }}
              onExpire={() => setTurnstileToken("")}
              onError={() => { setTurnstileToken(""); setErrorMessage("Security verification failed. Please try again."); }}
              options={{ theme: "auto", size: "flexible" }}
            />
          </div>
        ) : (
          <p className={styles.errorMessage} role="alert">Security verification is unavailable.</p>
        )}

        {errorMessage && <p className={styles.errorMessage} role="alert">{errorMessage}</p>}

        <button type="submit" className={styles.submitButton} disabled={isSubmitting || !turnstileToken || !siteKey}>
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </section>
  );
}
