import { Globe, Smartphone, Cloud, Clock, Code2, CheckCircle2 } from "lucide-react";

import styles from "@/styles/homepage.module.css";

export function HeroBentoSection() {
  return (
    <section className={styles.bentoPart}>
      <div className={styles.sectionInner}>
        <div className={styles.heroBento}>

          {/* LEFT: dark art card */}
          <div className={styles.heroDarkCard}>
            <div className={styles.heroDarkCardArt} aria-hidden="true" />
            <div className={styles.heroDarkCardText}>
              <span>Design</span>
              <span>Develop</span>
              <span>Deploy</span>
            </div>
          </div>

          {/* RIGHT: bento stack */}
          <div className={styles.heroBentoRight}>

            {/* top row: service card + purple stat */}
            <div className={styles.heroBentoTopRow}>
              <div className={styles.heroServiceCard}>
                <p className={styles.heroServiceTitle}>Web &amp; Mobile</p>
                <p className={styles.heroServiceDesc}>
                  Fast, modern apps and marketing sites built with clean architecture and sharp UX.
                </p>
                <div className={styles.heroServiceIcons}>
                  <span className={styles.heroServiceIcon}><Globe className="h-5 w-5" /></span>
                  <span className={styles.heroServiceIcon}><Smartphone className="h-5 w-5" /></span>
                  <span className={styles.heroServiceIcon}><Cloud className="h-5 w-5" /></span>
                </div>
              </div>

              <div className={styles.heroPurpleCard}>
                <p className={styles.heroPurpleStat}>50<sup>+</sup></p>
                <p className={styles.heroPurpleLabel}>Apps Built</p>
                <span className={styles.heroPurpleBadge}>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Delivered
                </span>
              </div>
            </div>

            {/* stat rows */}
            <div className={styles.heroStatRow}>
              <span className={styles.heroStatIcon}><Clock className="h-5 w-5" /></span>
              <span className={styles.heroStatValue}>5<sup>+</sup></span>
              <span className={styles.heroStatLabel}>Years of Experience</span>
            </div>

            <div className={styles.heroStatRow}>
              <span className={styles.heroStatIcon}><Code2 className="h-5 w-5" /></span>
              <span className={styles.heroStatValue}>100K<sup>+</sup></span>
              <span className={styles.heroStatLabel}>Users Served</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
