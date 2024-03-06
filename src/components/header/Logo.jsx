import styles from "./Logo.module.css";
function Logo() {
  return (
    <a href="https://github.com/" className={styles.a}>
      <img src="src\img\github.png" alt="logo" className={styles.logo}></img>
    </a>
  );
}

export default Logo;
