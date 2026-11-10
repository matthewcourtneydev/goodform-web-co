
"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import {
  websitePackages,
  formatPackagePrice,
} from "@/data/services";
import styles from "./PricingPreview.module.scss";

export default function PricingPreview() {
  const [expanded, setExpanded] = useState("business");

  const togglePackage = (id) => {
    setExpanded((current) => (current === id ? null : id));
  };

  const previewPackages = websitePackages.filter(
    (pkg) => pkg.id !== "custom"
  );

  return (
    <section
      className={styles.section}
      aria-labelledby="pricing-preview-title"
    >
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.intro}>
            <div>
              <h2 id="pricing-preview-title">
                Services & Pricing
              </h2>

              <p>
                Straightforward website packages for small
                businesses at different stages, with room
                to customize as your needs grow.
              </p>
            </div>

            <Link href="/services" className={styles.viewAll}>
              View All Services
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </Reveal>

        <div className={styles.packages}>
          {previewPackages.map((pkg, index) => {
            const isExpanded = expanded === pkg.id;
            const bodyId = `package-${pkg.id}`;

            return (
              <Reveal
                key={pkg.id}
                animation="fadeUp"
                delay={index * 110}
                duration={650}
                className={styles.packageReveal}
              >
                <article
                  className={`${styles.package} ${
                    pkg.featured ? styles.featured : ""
                  }`}
                >
                  <div className={styles.packageHeader}>
                    <div className={styles.packageHeading}>
                      <span className={styles.packageName}>
                        {pkg.name}
                      </span>

                      <span className={styles.packagePrice}>
                        {formatPackagePrice(pkg.price)}
                        <small>starting at</small>
                      </span>
                    </div>

                    <button
                      type="button"
                      className={styles.packageToggle}
                      aria-expanded={isExpanded}
                      aria-controls={bodyId}
                      aria-label={`${
                        isExpanded ? "Collapse" : "Expand"
                      } ${pkg.name} details`}
                      onClick={() => togglePackage(pkg.id)}
                    >
                      <span
                        className={styles.chevron}
                        aria-hidden="true"
                      >
                        {isExpanded ? "−" : "+"}
                      </span>
                    </button>
                  </div>

                  <div
                    id={bodyId}
                    className={`${styles.packageBody} ${
                      isExpanded ? styles.expanded : ""
                    }`}
                  >
                    <p className={styles.description}>
                      {pkg.description}
                    </p>

                    <ul className={styles.features}>
                      {pkg.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={styles.packageCTA}
                    >
                      Get Started
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
