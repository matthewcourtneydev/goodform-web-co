
import WorkHero from "@/components/work/WorkHero/WorkHero";
import FeaturedProject from "@/components/work/FeaturedProject/FeaturedProject";
import WorkCarousel from "@/components/work/WorkCarousel/WorkCarousel";
import WorkStory from "@/components/work/WorkStory/WorkStory";
import WorkCTA from "@/components/work/WorkCTA/WorkCTA";

import styles from "./Work.module.scss";

export default function Work() {
  return (
    <div className={styles.work}>
      <WorkHero />
      <FeaturedProject />
      <WorkCarousel />
      <WorkStory />
      <WorkCTA />
    </div>
  );
}
