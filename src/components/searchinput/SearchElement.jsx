/* eslint-disable react/prop-types */
import styles from "./SearchElement.module.css";
function SearchElement({ name }) {
  return (
    <div className={styles.div}>
      <a href={`${name}`} className={styles.a}>
        <div className={styles.container}>
          <img src="src\img\repo.png" className={styles.img} />
          <span className={styles.span}>{name}</span>
        </div>
        <span className={styles.jumpto}>Jump to</span>
      </a>
    </div>
  );
}

export default SearchElement;
