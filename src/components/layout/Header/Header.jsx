
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";
import { navigation } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Goodform Web Co. home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/branding/horizontal/horizontal-light.svg"
            alt="Goodform Web Co."
            width={260}
            height={100}
            className={styles.logoImage}
            priority
          />
        </Link>

        <button
          type="button"
          className={`${styles.menuToggle} ${
            menuOpen ? styles.menuToggleOpen : ""
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
          aria-label="Primary navigation"
        >
          <ul className={styles.navList}>
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      active ? styles.active : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
