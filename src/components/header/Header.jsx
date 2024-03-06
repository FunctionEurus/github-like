/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import IconButtonWithTip from "./iconbutton/IconButtonWithTipRight";
import Logo from "./Logo";
import More from "./More";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import TooltipRight from "./tooltip/TooltipRight";
function Header({ handleClickMore, handleClickSearch }) {
  return (
    <header className={styles.header}>
      <div className={styles.left_side}>
        <More onclick={handleClickMore} />
        <Logo />
        <a className={styles.dash_board} href="https://github.com/">
          <span>Dashboard</span>
        </a>
      </div>

      <div className={styles.right_side}>
        <SearchBar handleClickSearch={handleClickSearch} />

        <p className={styles.p}>|</p>

        <TooltipRight tip="Create new...">
          <button type="button">
            <span className={styles.create_button}>
              <img src="src\\img\\new.png" alt="icon-new" />
              <p className={styles.p}>|</p>
              <img src="src\\img\\down.png" alt="icon-down" />
            </span>
          </button>
        </TooltipRight>

        <a href="/issues">
          <IconButtonWithTip src="src\\img\\issues.png" tip="Issues" />
        </a>
        <a href="/pulls">
          <IconButtonWithTip src="src\\img\\pr.png" tip="Pull requests" />
        </a>
        <div className={styles.notification}>
          <a href="/notifications">
            <IconButtonWithTip
              src="src\\img\\notification.png"
              tip="You have unread notifications"
            />
          </a>
        </div>

        <Avatar />
      </div>
    </header>
  );
}

export default Header;
