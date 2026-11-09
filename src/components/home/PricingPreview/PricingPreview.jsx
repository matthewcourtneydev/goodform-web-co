"use client";

import { useState } from "react";
import Link from "next/link";
import { websitePackages, formatPackagePrice } from "@/data/services";
import styles from "./PricingPreview.module.scss";

export default function PricingPreview() {
  const [expanded, setExpanded] = useState("business");

  const togglePackage = (id) => {
    setExpanded((current) => (current === id ? null : id));
  };

  const previewPackages = websitePackages.filter((pkg) => pkg.id !== "custom");

  return (
    <section className={styles.section} aria-labelledby="pricing-preview-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div>
            <h2 id="pricing-preview-title">Services & Pricing</h2>
            <p>
              Straightforward options for businesses at different stages, with
              room to customize when you need more.
            </p>
          </div>

          <Link href="/services" className={styles.viewAll}>
            View All Services
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <div className={styles.packages}>
          {previewPackages.map((pkg) => {
            const isExpanded = expanded === pkg.id;

            return (
              <article
                key={pkg.id}
                className={`${styles.package} ${
                  pkg.featured ? styles.featured : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.packageToggle}
                  aria-expanded={isExpanded}
                  aria-controls={`package-${pkg.id}`}
                  onClick={() => togglePackage(pkg.id)}
                >
                  <span className={styles.packageHeading}>
                    <span className={styles.packageName}>{pkg.name}</span>

                    <span className={styles.packagePrice}>
                      {formatPackagePrice(pkg.price)}
                      <small>starting at</small>
                    </span>
                  </span>

                  <span className={styles.chevron} aria-hidden="true">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`package-${pkg.id}`}
                  className={`${styles.packageBody} ${
                    isExpanded ? styles.expanded : ""
                  }`}
                >
                  <p className={styles.description}>{pkg.description}</p>

                  <ul className={styles.features}>
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <Link href="/contact" className={styles.packageCTA}>
                    Get Started
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
