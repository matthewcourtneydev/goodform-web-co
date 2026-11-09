
import AboutHero from "@/components/about/AboutHero/AboutHero";
import AboutStory from "@/components/about/AboutStory/AboutStory";
import AboutPillars from "@/components/about/AboutPillars/AboutPillars";
import AboutValues from "@/components/about/AboutValues/AboutValues";
import AboutCTA from "@/components/about/AboutCTA/AboutCTA";

import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <AboutHero />
      <AboutStory />
      <AboutPillars />
      <AboutValues />
      <AboutCTA />
    </div>
  );
}
