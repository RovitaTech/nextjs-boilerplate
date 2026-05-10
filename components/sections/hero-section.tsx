import Link from "next/link";
import { ArrowRight } from "lucide-react";

import styles from "@/styles/homepage.module.css";

export function HeroSection() {
  const ringSegments = Array.from({ length: 20 }, (_, index) => index);

  return (
    <section className={styles.hero}>
      <div className={styles.sectionInner}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopyColumn}>
            <div className={styles.heroDots} aria-hidden="true">
              <span className={styles.heroDotAmber} />
              <span className={styles.heroDotGold} />
              <span className={styles.heroDotCyan} />
              <span className={styles.heroDotGreen} />
            </div>

            <h1 className={styles.heroTitle}>
              Crafting Future
              <br />
              Software Today!
            </h1>

            <p className={styles.heroCopy}>
              Transforming ideas into software success stories.
            </p>

            <Link href="#services" className={styles.heroPrimaryButton}>
              <span>Let&apos;s Connect</span>
              <span className={styles.heroPrimaryArrow}>
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className={styles.heroVisualWrap}>
            <div className={styles.heroOrbGlow} aria-hidden="true" />
            <div className={styles.heroRing} aria-hidden="true">
              {ringSegments.map((segment) => (
                <span
                  key={segment}
                  className={styles.heroRingSegment}
                  style={{
                    transform: `rotate(${segment * (360 / ringSegments.length)}deg) translateY(-10.75rem)`,
                    opacity: String(0.45 + (segment % 5) * 0.1),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
