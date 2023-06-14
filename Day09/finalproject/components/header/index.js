import React from "react";
import Link from "next/link";
import { FaPlayCircle, FaSquare } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.siteHeader} page-grid full-width`}>
      <div className={styles.headerContent}>
        <Link className={styles.siteLogo} href="/">
          <FaPlayCircle /> Movie App
        </Link>
        <nav className={styles.navMenu}>
          <Link href="/movies" className={styles.navItem}><FaSquare />Movies</Link>
          <Link href="/tv" className={styles.navItem}><FaSquare />TV Shows</Link>
          <Link href="/people" className={styles.navItem}><FaSquare />People</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
