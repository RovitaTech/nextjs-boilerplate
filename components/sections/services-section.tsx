import { LayoutGrid, PenTool, Rocket, ShieldCheck, Sparkles } from "lucide-react";

import { services } from "@/lib/site-content";
import styles from "@/styles/homepage.module.css";

const serviceIcons = [LayoutGrid, PenTool, Rocket, ShieldCheck];

export function ServicesSection() {
  return (
    <section id="services" className={styles.sectionTwoBody}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionTwoLead}>
          <span className={styles.sectionTwoTag}>
            <span>What We Do</span>
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <h2 className={styles.sectionTwoTitle}>
            <span className={styles.sectionTwoTitlePrimary}>With RovitaTech, You perform better.</span>
            <span className={styles.sectionTwoTitleSecondary}>Always! It is our guarantee!</span>
          </h2>
        </div>

        <div className={styles.sectionTwoCards}>
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <article key={service.title} className={styles.sectionTwoCard}>
                <div className={styles.sectionTwoIcon}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={styles.sectionTwoCardTitle}>{service.title}</h3>
                <p className={styles.sectionTwoCardCopy}>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}