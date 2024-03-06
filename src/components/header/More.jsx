/* eslint-disable react/prop-types */
import styles from "./More.module.css";
function More({ onclick }) {
  return (
    <button className={styles.button} onClick={onclick}>
      <img src="src\img\more.png" alt="icon-more"></img>
    </button>
  );
}

export default More;
