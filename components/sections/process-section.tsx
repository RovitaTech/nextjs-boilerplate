import { Zap } from "lucide-react";
import { processSteps } from "@/lib/site-content";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import styles from "@/styles/homepage.module.css";

export function ProcessSection() {
  return (
    <section id="process" className={styles.processSectionWrap}>
      <div className={styles.processSurface}>
        <div className={styles.processIntro}>
          <span className={styles.processTag}>How We Work</span>
          <h2 className={styles.processTitle}>Our Agile Process</h2>
          <p className={styles.processIntroCopy}>
            We have our unique ways of building your ideas efficiently and quickly.
          </p>
        </div>

        <div className={styles.processGridV2}>
          {processSteps.map((step) => (
            <article key={step.step} className={styles.processCardV2}>
              <div className={styles.processCardTop}>
                <span className={styles.processStep}>{step.step}</span>
                <span className={styles.processFlash} aria-hidden="true">
                  <Zap className="h-3 w-3" />
                </span>
              </div>
              <h3 className={styles.processCardTitleV2}>{step.title}</h3>
            </article>
          ))}
        </div>
      </div>

      <TechnologiesSection />
    </section>
  );
}