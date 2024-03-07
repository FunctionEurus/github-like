/* eslint-disable react/prop-types */
import styles from "./NewMenuElement.module.css";
function NewMenuElement({ children, imgsrc, href }) {
  return (
    <li className={styles.li}>
      <a className={styles.a} href={href}>
        <img className={styles.img} src={imgsrc}></img>
        <span className={styles.span}>{children}</span>
      </a>
    </li>
  );
}

export default NewMenuElement;
