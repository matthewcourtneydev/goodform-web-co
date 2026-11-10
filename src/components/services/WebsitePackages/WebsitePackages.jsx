
"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import {
  websitePackages,
  formatPackagePrice,
} from "@/data/services";
import styles from "./WebsitePackages.module.scss";

function PackageDetails({ pkg }) {
  return (
    <div className={styles.detailsInner}>
      <div className={styles.detailsHeader}>
        <div>
          <h3>{pkg.name}</h3>
          <p>{pkg.description}</p>
        </div>

        <span className={styles.priceBadge}>
          {formatPackagePrice(pkg.price)}
        </span>
      </div>

      <div className={styles.detailsColumns}>
        <div className={styles.detailsGroup}>
          <h4>Best for</h4>

          <ul>
            {pkg.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.detailsGroup}>
          <h4>What's included</h4>

          <ul>
            {pkg.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <Link href="/contact" className={styles.detailsCTA}>
        Discuss This Package
      </Link>
    </div>
  );
}

export default function WebsitePackages() {
  const [selectedId, setSelectedId] = useState("landing");
  const [mobileExpandedId, setMobileExpandedId] =
    useState("landing");

  const selectedPackage =
    websitePackages.find((pkg) => pkg.id === selectedId) ??
    websitePackages[0];

  function selectPackage(id) {
    setSelectedId(id);
  }

  function toggleMobilePackage(id) {
    setMobileExpandedId((current) =>
      current === id ? null : id
    );
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="website-packages-title"
    >
      <div className={styles.container}>
        <Reveal animation="fadeUp" duration={650}>
          <div className={styles.intro}>
            <h2 id="website-packages-title">
              Website Packages
            </h2>

            <p>
              Choose the option that fits your business,
              with transparent pricing and clear deliverables.
            </p>
          </div>
        </Reveal>

        {/* Desktop layout */}
        <div className={styles.desktopLayout}>
          <div className={styles.packageList}>
            {websitePackages.map((pkg, index) => (
              <Reveal
                key={pkg.id}
                animation="fadeUp"
                delay={index * 90}
                duration={600}
                className={styles.packageOptionReveal}
              >
                <button
                  type="button"
                  className={`${styles.packageOption} ${
                    selectedId === pkg.id ? styles.active : ""
                  }`}
                  onClick={() => selectPackage(pkg.id)}
                  aria-pressed={selectedId === pkg.id}
                >
                  <span>{pkg.name}</span>

                  <span className={styles.optionRight}>
                    <strong>
                      {formatPackagePrice(pkg.price)}
                    </strong>

                    <span aria-hidden="true">›</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal
            animation="fadeUp"
            delay={160}
            duration={700}
            className={styles.detailsReveal}
          >
            <div
              className={styles.detailsPanel}
              aria-live="polite"
              aria-atomic="true"
            >
              <PackageDetails pkg={selectedPackage} />
            </div>
          </Reveal>
        </div>

        {/* Tablet / mobile accordion */}
        <div className={styles.mobileLayout}>
          {websitePackages.map((pkg, index) => {
            const expanded = mobileExpandedId === pkg.id;

            return (
              <Reveal
                key={pkg.id}
                animation="fadeUp"
                delay={index * 90}
                duration={600}
                className={styles.mobilePackageReveal}
              >
                <div className={styles.mobilePackage}>
                  <button
                    type="button"
                    className={`${styles.mobileToggle} ${
                      expanded ? styles.mobileActive : ""
                    }`}
                    onClick={() =>
                      toggleMobilePackage(pkg.id)
                    }
                    aria-expanded={expanded}
                    aria-controls={`mobile-package-${pkg.id}`}
                  >
                    <span>{pkg.name}</span>

                    <span className={styles.mobilePrice}>
                      {formatPackagePrice(pkg.price)}

                      <span aria-hidden="true">
                        {expanded ? "⌃" : "⌄"}
                      </span>
                    </span>
                  </button>

                  <div
                    id={`mobile-package-${pkg.id}`}
                    className={styles.mobileDetails}
                    hidden={!expanded}
                  >
                    {expanded && <PackageDetails pkg={pkg} />}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
