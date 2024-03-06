import styles from "./SideBarElementIcon.module.css";
/* eslint-disable react/prop-types */
function SideBarElement({ iconname, path }) {
  return (
    <li className={styles.li}>
      <div className={styles.container}>
        <a href={`${path}`} className={styles.a}>
          <img
            src={`src\\img\\${iconname}.png`}
            className={styles.icon}
            alt={`icon-${iconname}`}
          />
          <span className={styles.comment}>
            {iconname !== "pr" ? iconname : "pull requests"}
          </span>
        </a>
      </div>
    </li>
  );
}

export default SideBarElement;
