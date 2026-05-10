import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { products } from "@/lib/site-content";
import styles from "@/styles/homepage.module.css";

export function ProductsSection() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionSplit}>
          <div style={{ maxWidth: "44rem" }}>
            <span className={styles.kicker}>Products</span>
            <h2 className={styles.title}>A product family with clear destinations and dedicated policy pages.</h2>
            <p className={styles.copy}>
              These routes already exist in the project. The homepage gives them a strong structure so the company feels organized from the start.
            </p>
          </div>
          <p className={styles.smallNote}>
            Every card links to a live privacy-policy page, which keeps the company structure transparent and easy to maintain.
          </p>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className={styles.productCard}
            >
              <div className={styles.productCardTop}>
                <div>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productNote}>{product.note}</p>
                </div>
                <span className={styles.productArrow}>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}