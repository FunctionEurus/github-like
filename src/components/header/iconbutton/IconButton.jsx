import styles from "./IconButton.module.css";
/* eslint-disable react/prop-types */
function IconButton({ src, onclick }) {
  return (
    <>
      <button className={styles.icon_button} type="button" onClick={onclick}>
        <img src={src} alt="icon"></img>
      </button>
    </>
  );
}

export default IconButton;
