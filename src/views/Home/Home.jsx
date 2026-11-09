
import Hero from "@/components/home/Hero/Hero";
import WhatWeDo from "@/components/home/WhatWeDo/WhatWeDo";
import FeaturedWork from "@/components/home/FeaturedWork/FeaturedWork";
import WhyGoodform from "@/components/home/WhyGoodform/WhyGoodform";
import Process from "@/components/home/Process/Process";
import PricingPreview from "@/components/home/PricingPreview/PricingPreview";
import ContactCTA from "@/components/home/ContactCTA/ContactCTA";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <WhatWeDo />
      <FeaturedWork />
      <WhyGoodform />
      <Process />
      <PricingPreview />
      <ContactCTA />
    </div>
  );
}
