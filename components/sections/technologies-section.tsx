"use client";

import { useMemo, useState } from "react";

import styles from "@/styles/homepage.module.css";

const categories = ["Front-end", "Back-end", "Mobile", "Cloud", "ERP & CRM"] as const;

const technologiesByCategory: Record<
  (typeof categories)[number],
  Array<{ name: string; logo: string; featured?: boolean }>
> = {
  "Front-end": [
    { name: "React", logo: "https://img.icons8.com/color/48/react-native.png" },
    { name: "Angular", logo: "https://img.icons8.com/color/48/angularjs.png" },
    { name: "Vue.js", logo: "https://img.icons8.com/color/48/vue-js.png" },
    { name: "JavaScript", logo: "https://img.icons8.com/color/48/javascript--v1.png" },
  ],
  "Back-end": [
    { name: "Node.js", logo: "https://img.icons8.com/color/48/nodejs.png" },
    { name: "NestJS", logo: "https://img.icons8.com/color/48/nestjs.png" },
    { name: "PostgreSQL", logo: "https://img.icons8.com/color/48/postgreesql.png" },
  ],
  Mobile: [
    { name: "Flutter", logo: "https://img.icons8.com/color/48/flutter.png" },
    { name: "React Native", logo: "https://img.icons8.com/color/48/react-native.png" },
    { name: "Android", logo: "https://img.icons8.com/color/48/android-os.png" },
    { name: "iOS", logo: "https://img.icons8.com/ios-filled/50/mac-os.png" },
  ],
  Cloud: [
    { name: "AWS", logo: "https://img.icons8.com/color/48/amazon-web-services.png" },
    { name: "Google Cloud", logo: "https://img.icons8.com/color/48/google-cloud.png" },
    { name: "Azure", logo: "https://img.icons8.com/color/48/azure-1.png" },
    { name: "Docker", logo: "https://img.icons8.com/color/48/docker.png" },
  ],
  "ERP & CRM": [
    { name: "Salesforce", logo: "https://img.icons8.com/color/48/salesforce.png" },
    { name: "SAP", logo: "https://img.icons8.com/color/48/sap.png" },
  ],
};

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Front-end");
  const technologies = useMemo(() => technologiesByCategory[activeCategory], [activeCategory]);

  return (
    <section className={styles.technologiesSection}>
      <div className={styles.technologiesTopRow}>
        <div>
          <p className={styles.technologiesKicker}>TECHNOLOGIES</p>
          <h2 className={styles.technologiesTitle}>Technologies we work with</h2>
        </div>
      </div>

      <div className={styles.technologiesContent}>
        <aside className={styles.technologiesSidebar}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.technologiesCategory} ${activeCategory === category ? styles.technologiesCategoryActive : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        <div className={styles.technologiesGrid}>
          {technologies.map((item) => (
            <article
              key={item.name}
              className={`${styles.technologyCard} ${item.featured ? styles.technologyCardFeatured : ""}`}
            >
              <div className={styles.technologyCardLeft}>
                <span className={styles.technologyBadge}>
                  <img src={item.logo} alt={`${item.name} logo`} className={styles.technologyLogo} loading="lazy" />
                </span>
                <h3 className={styles.technologyName}>{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
