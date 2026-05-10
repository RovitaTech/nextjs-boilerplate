import { Quote, Sparkles } from "lucide-react";

import { products, testimonials } from "@/lib/site-content";
import styles from "@/styles/homepage.module.css";

export function StandardsSection() {
  const partnerNames = products.map((product) => product.name);
  const marqueeItems = [...partnerNames, ...partnerNames];

  return (
    <section id="standards" className={styles.testimonialsSection}>
      <div className={styles.sectionInner}>
        <div className={styles.testimonialsSurface}>
          <div className={styles.testimonialsLead}>
            <span className={styles.sectionTwoTag}>
              <span>Why Choose Us</span>
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <h2 className={styles.testimonialsTitle}>Glowing Testimonials that Speak Volumes</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((item, index) => (
              <article key={`${item.name}-${index}`} className={styles.testimonialCard}>
                <span className={styles.testimonialQuoteMark} aria-hidden="true">
                  <Quote className="h-3.5 w-3.5" />
                </span>
                <h3 className={styles.testimonialCardTitle}>{item.title}</h3>
                <p className={styles.testimonialCardCopy}>{item.quote}</p>
                <div className={styles.testimonialAuthorRow}>
                  <span className={styles.testimonialFlag}>{item.flag}</span>
                  <div>
                    <p className={styles.testimonialAuthor}>{item.name}</p>
                    <p className={styles.testimonialCompany}>{item.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>

      <div className={styles.partnerStrip}>
        <div className={styles.partnerMarqueeTrack}>
          {marqueeItems.map((name, index) => (
            <span key={`${name}-${index}`} className={styles.partnerName} aria-hidden={index >= partnerNames.length}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}