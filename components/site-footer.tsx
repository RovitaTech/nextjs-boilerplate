import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import styles from "@/styles/homepage.module.css";

export function SiteFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerPanelV2}>
        <div className={styles.footerTopRow}>
          <div className={styles.footerBrandCol}>
            <div className={styles.footerSocials}>
              <a href="#" aria-label="Facebook" className={styles.footerIconLink}>
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className={styles.footerIconLink}>
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.footerIconLink}>
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className={styles.footerWordmark}>ROVITATECH</p>
          </div>

          <div className={styles.footerColumnsV2}>
            <div>
              <h3 className={styles.footerHeading}>Careers</h3>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>Join Us</a></li>
                <li><a href="#" className={styles.footerLink}>Internship Programs</a></li>
                <li><a href="#" className={styles.footerLink}>Human Resources</a></li>
              </ul>
            </div>

            <div>
              <h3 className={styles.footerHeading}>Support</h3>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>Help</a></li>
                <li><a href="#" className={styles.footerLink}>FAQ</a></li>
                <li><a href="#" className={styles.footerLink}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className={styles.footerHeading}>Company</h3>
              <ul className={styles.footerList}>
                <li><a href="#" className={styles.footerLink}>Blog</a></li>
                <li><a href="#" className={styles.footerLink}>About us</a></li>
                <li><a href="#" className={styles.footerLink}>Life at RovitaTech</a></li>
              </ul>
            </div>

            <div>
              <h3 className={styles.footerHeading}>Our Initiatives</h3>
              <ul className={styles.footerList}>
                <li><Link href="/privacy-policy/statussaver" className={styles.footerLink}>StatusSaver</Link></li>
                <li><Link href="/privacy-policy/parkglide" className={styles.footerLink}>ParkGlide</Link></li>
                <li><Link href="/privacy-policy/owebuddy" className={styles.footerLink}>OweBuddy</Link></li>
                <li><Link href="/privacy-policy/memeforge" className={styles.footerLink}>MemeForge</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerLegalStrip}>
          <p>© 2026 RovitaTech All rights reserved.</p>
          <div className={styles.footerLegalLinks}>
            <a href="#" className={styles.footerLegalLink}>Terms of Service</a>
            <a href="#" className={styles.footerLegalLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLegalLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}