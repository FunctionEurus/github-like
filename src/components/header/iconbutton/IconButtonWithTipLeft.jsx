import styles from "./IconButtonWithTipLeft.module.css";
import TooltipLeft from "../tooltip/TooltipLeft";
/* eslint-disable react/prop-types */
function IconButtonWithTipLeft({ src, tip }) {
  return (
    <>
      <TooltipLeft tip={tip}>
        <button className={styles.icon_button} type="button">
          <img src={src} alt="icon"></img>
        </button>
      </TooltipLeft>
    </>
  );
}

export default IconButtonWithTipLeft;
