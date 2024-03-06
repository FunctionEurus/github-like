/* eslint-disable react/prop-types */
import Avatar from "../../header/Avatar";
import styles from "./SideBarElementRepo.module.css";
function SideBarElementRepo({ reponame }) {
  return (
    <li className={styles.li}>
      <div className={styles.container}>
        <a href={`https://github.com/`} className={styles.a}>
          <Avatar className={styles.avatar} />
          <p className={styles.comment}>{reponame}</p>
        </a>
      </div>
    </li>
  );
}

export default SideBarElementRepo;
