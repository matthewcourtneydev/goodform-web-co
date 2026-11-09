
"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

const themes = [
  { value: "wireframe", label: "Wireframe" },
  { value: "sage-olive", label: "Sage Olive" },
  { value: "sage-slate", label: "Sage Slate" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("wireframe");

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme || "wireframe";

    setTheme(currentTheme);
  }, []);

  function handleThemeChange(event) {
    const nextTheme = event.target.value;

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <div className={styles.switcher}>
      <label htmlFor="dev-theme-switcher">
        Theme
      </label>

      <select
        id="dev-theme-switcher"
        value={theme}
        onChange={handleThemeChange}
      >
        {themes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
