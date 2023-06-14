import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.siteHeader} page-grid full-width`}>
      <div className={styles.headerContent}>
        <Link className={styles.siteLogo} href="/">
          <FaPlayCircle /> Movie App
        </Link>
        <nav className={styles.navMenu}>
          <Link href="#">Moveis</Link>
          <Link href="#">Series</Link>
          <Link href="#">Kids</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
