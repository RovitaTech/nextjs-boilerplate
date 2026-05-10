import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { products } from "@/lib/site-content";
import styles from "@/styles/homepage.module.css";

const chipsByIndex = [
  ["Startup ecosystem", "Platform development", "Business ecosystem design", "React", "Node.js", "AWS"],
  ["Immersive technology", "VR/AR development", "Platform development", "React", "Node.js", "AWS"],
  ["Consumer app", "Growth stack", "Automation", "Flutter", "Supabase", "Analytics"],
  ["Mobile utility", "Performance", "Product design", "React Native", "TypeScript", "Cloud"],
];

export default function CaseStudiesPage() {
  return (
    <main className={styles.caseStudiesPage}>
      <section className={styles.caseStudiesIntroSection}>
        <div className={styles.caseStudiesPattern} aria-hidden="true" />
        <div className={styles.caseStudiesIntroInner}>
          <h1 className={styles.caseStudiesIntroTitle}>Challenges become successes</h1>
          <p className={styles.caseStudiesIntroMark}>{"{"}</p>
          <p className={styles.caseStudiesIntroCopy}>
            By providing innovative technology solutions, we transform businesses by developing
            state-of-the-art platforms and digital tools. Our case studies demonstrate how we build and
            scale leading brands through data-driven strategies, seamless integrations, and tailored
            software solutions.
          </p>
        </div>
      </section>

      <section className={styles.caseStudiesShowcaseSection}>
        <div className={styles.caseStudiesShowcaseInner}>
          {products.slice(0, 6).map((product, index) => (
            <article key={product.name} className={styles.caseStudyCardV2}>
              <div className={`${styles.caseStudyThumb} ${styles[`caseStudyThumb${(index % 4) + 1}`]}`}>
                <span className={styles.caseStudyThumbLabel}>{product.name}</span>
              </div>

              <div className={styles.caseStudyCardBody}>
                <div className={styles.caseStudyChipRow}>
                  {chipsByIndex[index % chipsByIndex.length].map((chip) => (
                    <span key={chip} className={styles.caseStudyChip}>
                      {chip}
                    </span>
                  ))}
                </div>

                <h2 className={styles.caseStudyCardTitle}>{product.name} - Product case study</h2>
                <p className={styles.caseStudyCardCopy}>
                  A practical software initiative focused on speed, clarity, and user-centric delivery.
                  {" "}
                  {product.note}.
                </p>

                <div className={styles.caseStudyCardBottom}>
                  <p className={styles.caseStudyRating}>
                    <span>5.0</span>
                    <span className={styles.caseStudyStars}>
                      <Star className="h-3.5 w-3.5" />
                      <Star className="h-3.5 w-3.5" />
                      <Star className="h-3.5 w-3.5" />
                      <Star className="h-3.5 w-3.5" />
                      <Star className="h-3.5 w-3.5" />
                    </span>
                  </p>

                  <Link href={product.href} className={styles.caseStudyLinkV2}>
                    <span>Case study for {product.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
