
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.scss";

export default function Reveal({
  children,
  as: Component = "div",
  animation = "fadeUp",
  delay = 0,
  duration = 650,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={[
        styles.reveal,
        styles[animation] || styles.fadeUp,
        visible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
      }}
    >
      {children}
    </Component>
  );
}
