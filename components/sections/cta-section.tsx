import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import styles from "@/styles/homepage.module.css";

export function CtaSection() {
  return (
    <section className={styles.caseShowcaseSection}>
      <div className={styles.caseShowcaseSurface}>
        <div className={styles.caseShowcaseMockWrap} aria-hidden="true">
          <div className={styles.casePhoneMock}>
            <div className={styles.casePhoneBar} />
            <div className={styles.casePhoneBlock} />
            <div className={styles.casePhoneBlock} />
            <div className={styles.casePhoneBlockSmall} />
          </div>

          <div className={styles.caseDesktopMock}>
            <div className={styles.caseDesktopTop} />
            <div className={styles.caseDesktopGrid}>
              <div className={styles.caseDesktopCellWide} />
              <div className={styles.caseDesktopCellTall} />
              <div className={styles.caseDesktopCellWide} />
              <div className={styles.caseDesktopCellWide} />
            </div>
          </div>
        </div>

        <Link href="/case-studies" className={styles.caseShowcaseButton}>
          <span>View Case Studies</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}