/* eslint-disable react/prop-types */
import styles from "./CookieLabel.module.css";
function CookieLabel({ children }) {
  return (
    <button type="button" className={styles.button}>
      <span className={styles.span}>{children}</span>
    </button>
  );
}

export default CookieLabel;
