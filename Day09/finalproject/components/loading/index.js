import React from "react";
import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingAnimation}></div>
    </div>
  );
}

export { Loading };