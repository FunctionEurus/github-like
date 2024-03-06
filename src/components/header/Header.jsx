/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import IconButtonWithTip from "./iconbutton/IconButtonWithTipRight";
import Logo from "./Logo";
import More from "./More";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import TooltipRight from "./tooltip/TooltipRight";
import { useState, useEffect } from "react";
import Dialog from "../sidebar/Dialog";
import Curtain from "../sidebar/Curtain";
function Header({ title }) {
  const [showDialog, setShowDialog] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (showSearch) return;
      if (event.key === "/") {
        setshowSearch((show) => !show);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showSearch]);

  function handleClickDialog() {
    setShowDialog((show) => !show);
  }

  function handleClickSearch() {
    setshowSearch((show) => !show);
  }
  return (
    <>
      {showSearch && <SearchBar handleClickSearch={handleClickSearch} />}
      {showDialog && (
        <>
          <Dialog handleClickClose={handleClickDialog} />
          <Curtain />
        </>
      )}
      <header className={styles.header}>
        <div className={styles.left_side}>
          <More onclick={handleClickDialog} />
          <Logo />
          <a className={styles.dash_board} href="https://github.com/">
            <span>{title}</span>
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
    </>
  );
}

export default Header;
