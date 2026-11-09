"use client";

import { useState } from "react";

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

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Submission integration will be added after the UI is approved.
    // Do not display a success message until a backend confirms delivery.
  }

  return (
    <section className={styles.formCard} aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">Tell Us About Your Project</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="contact-name">
              Full name <span aria-hidden="true">*</span>
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email">
              Email address <span aria-hidden="true">*</span>
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="contact-business">Business name</label>

            <input
              id="contact-business"
              name="business"
              type="text"
              autoComplete="organization"
              value={formData.business}
              onChange={handleChange}
            />
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="contact-service">
              What can we help with? <span aria-hidden="true">*</span>
            </label>

            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>

              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="contact-description">
              Tell us about your project <span aria-hidden="true">*</span>
            </label>

            <textarea
              id="contact-description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-budget">Estimated budget</label>

            <select
              id="contact-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select a range</option>

              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-timeline">Ideal timeline</label>

            <select
              id="contact-timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Select a timeframe</option>

              {timelineOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled
          title="Inquiry submissions are not available yet"
        >
          Send Inquiry
        </button>
      </form>
    </section>
  );
}
