
"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

const initialValues = {
  name: "",
  email: "",
  business: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Submission will be connected to our backend later.
    // No data is currently sent or stored.
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Your Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email Address *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-business">
            Business Name
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Your business"
            value={values.business}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-service">
            What Can We Help With?
          </label>
          <select
            id="contact-service"
            name="service"
            value={values.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="new-website">New Website</option>
            <option value="redesign">Website Redesign</option>
            <option value="branding">Branding & Identity</option>
            <option value="maintenance">Website Maintenance</option>
            <option value="other">Something Else</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">
          Tell Us About Your Project *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="A little about your business, goals, and what you have in mind..."
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled
        title="Form submissions are not available yet"
      >
        Send Inquiry
      </button>

      <p className={styles.note}>
        Form submissions will be available when the website launches.
      </p>
    </form>
  );
}
