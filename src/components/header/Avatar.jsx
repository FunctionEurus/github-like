/* eslint-disable react/prop-types */
import styles from "./Avatar.module.css";
function Avatar({ handleClickAvatar }) {
  return (
    <button type="button" className={styles.avatar} onClick={handleClickAvatar}>
      <img
        // src="src\assets\challenges.jpg"
        src="https://i.pravatar.cc/48?u=118836"
        alt="avatar"
        className={styles.avatar}
      ></img>
    </button>
  );
}

export default Avatar;
