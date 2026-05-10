import Link from "next/link";
import { ArrowRight } from "lucide-react";

import styles from "@/styles/homepage.module.css";

export function ConnectSection() {
  return (
    <section className={styles.connectSection}>
      <div className={styles.connectInner}>
        <span className={styles.connectTag}>Contact</span>
        <h2 className={styles.connectTitle}>Connect with us</h2>
        <p className={styles.connectCopy}>
          Having helped many clients globally with MVP development, prototyping, and full-cycle
          application development to go to market quickly, efficiently and cost effectively,
          we would like to do the same for you.
        </p>

        <Link href="#contact" className={styles.connectButton}>
          <span>Let&apos;s Connect</span>
          <span className={styles.connectButtonIcon}>
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}
