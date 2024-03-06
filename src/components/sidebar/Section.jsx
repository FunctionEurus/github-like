/* eslint-disable react/prop-types */
import styles from "./Section.module.css";
function Section({ border, children }) {
  return (
    <div className={border ? styles.section : styles.section_without_border}>
      {children}
    </div>
  );
}

export default Section;
