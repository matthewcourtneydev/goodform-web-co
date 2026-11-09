
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import WhatWeProvide from "@/components/services/WhatWeProvide/WhatWeProvide";
import WebsitePackages from "@/components/services/WebsitePackages/WebsitePackages";
import OptionalAddOns from "@/components/services/OptionalAddOns/OptionalAddOns";
import HostingCare from "@/components/services/HostingCare/HostingCare";
import ServicesFAQ from "@/components/services/ServicesFAQ/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA/ServicesCTA";

import styles from "./Services.module.scss";

export default function Services() {
  return (
    <div className={styles.services}>
      <ServicesHero />
      <WhatWeProvide />
      <WebsitePackages />
      <OptionalAddOns />
      <HostingCare />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
}
