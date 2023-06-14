import React from "react";
import Link from "next/link";

// Stil dosyasını import et
import styles from "./styles.module.css";

// Altbilgi (Footer) bileşeni
function Footer() {
  return (
    // Altbilgi bileşeni için stilleri uygula
    <footer className={styles.siteFooter}>
      by&nbsp;
      <Link style={{textDecoration:'none'}} 
      href="https://github.com/fdikmen" target="_blank">
        ╳ {/* https://symbl.cc/en/ */}
      </Link>
    </footer>
  );
}

// Altbilgi bileşenini dışarıya aktar
export { Footer };