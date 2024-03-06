import styles from "./IconButtonWithTipRight.module.css";
import TooltipRight from "../tooltip/TooltipRight";
/* eslint-disable react/prop-types */
function IconButtonWithTipRight({ src, tip }) {
  return (
    <>
      <TooltipRight tip={tip}>
        <button className={styles.icon_button} type="button">
          <img src={src} alt="icon"></img>
        </button>
      </TooltipRight>
    </>
  );
}

export default IconButtonWithTipRight;
