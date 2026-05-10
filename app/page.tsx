import styles from "@/styles/homepage.module.css";
import { SiteHeader } from "@/components/site-header";
import { CtaSection } from "@/components/sections/cta-section";
import { ConnectSection } from "@/components/sections/connect-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HeroBentoSection } from "@/components/sections/hero-bento-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StandardsSection } from "@/components/sections/standards-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.pageGlow} />
      <SiteHeader />
      <HeroSection />
      <HeroBentoSection />
      <ServicesSection />
      <ProcessSection />
      <StandardsSection />
      <CtaSection />
      <ConnectSection />
      <SiteFooter />
    </main>
  );
}
