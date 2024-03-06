/* eslint-disable react/prop-types */
import styles from "./SearchBar.module.css";
import TooltipRight from "./tooltip/TooltipRight";
function SearchBar({ handleClickSearch }) {
  return (
    <button className={styles.search} type="button" onClick={handleClickSearch}>
      <div className={styles.unknown}>
        <div className={styles.search_left}>
          <img
            src="src\img\search.png"
            alt="icon-search"
            className={styles.search_icon}
          ></img>
          <p>|</p>
        </div>

        <div className={styles.search_middle}>
          <span className={styles.search_text}>
            &nbsp;Type&nbsp;<kbd className={styles.kbd}>/</kbd>&nbsp;to search
          </span>
        </div>
      </div>

      <div className={styles.search_right}>
        <p>|</p>
        <TooltipRight tip={"Command palette"}>
          <img
            src="src\img\command.png"
            alt="icon-command"
            className={`${styles.search_icon} ${styles.command}`}
          ></img>
        </TooltipRight>
      </div>
    </button>
  );
}

export default SearchBar;
