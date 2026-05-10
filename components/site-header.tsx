"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navigationLinks } from "@/lib/site-content";
import styles from "@/styles/homepage.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.heroHeader}>
      {/* Desktop: floating pill */}
      <div className={styles.heroHeaderShell}>
        <Link href="/" className={styles.heroBrand} aria-label="RovitaTech home">
          <Image
            src="/company.png"
            alt="Rovitatech"
            width={120}
            height={52}
            className={styles.heroBrandLogo}
          />
        </Link>

        <nav aria-label="Primary" className={styles.heroNav}>
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.heroNavLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.heroHeaderCta}>
          <span>Start a project</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>

        {/* Hamburger — visible on mobile/tablet only */}
        <button
          className={styles.heroHamburger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.heroMobileMenu} role="dialog" aria-label="Mobile navigation">
          <nav className={styles.heroMobileNav}>
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.heroMobileNavLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.heroMobileCta}
              onClick={() => setOpen(false)}
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}