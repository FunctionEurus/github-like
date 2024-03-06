/* eslint-disable react/prop-types */
import styles from "./TooltipRight.module.css";
function TooltipRight({ tip, children }) {
  return (
    <div className={styles.tool_tip}>
      {children}
      <p className={styles.tool_tip_text}>{tip}</p>
    </div>
  );
}

export default TooltipRight;
