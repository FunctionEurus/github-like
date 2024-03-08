/* eslint-disable react/prop-types */
import Avatar from "./Avatar";
import IconButtonWithTipRight from "./iconbutton/IconButtonWithTipRight";
import Logo from "./Logo";
import More from "./More";
import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import TooltipRight from "./tooltip/TooltipRight";
import { useState, useEffect } from "react";
import Dialog from "../sidebar/Dialog";
import Curtain from "../sidebar/Curtain";
import SearchInput from "../searchinput/SearchInput";
import NewMenu from "./NewMenu";
import Menu from "../menu/Menu";
import IconButtonWithTipLeft from "./iconbutton/IconButtonWithTipLeft";

function Header({ title }) {
  const [showDialog, setShowDialog] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [showNewMenu, setshowNewMenu] = useState(false);
  const [showSelfMenu, setshowSelfMenu] = useState(false);
  const [notifications, setNotifications] = useState([]);

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

  function handleClickNew() {
    setshowNewMenu((show) => !show);
  }

  function handleClickAvatar() {
    setshowSelfMenu((show) => !show);
  }

  return (
    <>
      {showSearch && <SearchInput handleClickSearch={handleClickSearch} />}
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
            <button type="button" onClick={handleClickNew}>
              <span className={styles.create_button}>
                <img src="src\\img\\new.png" alt="icon-new" />
                <p className={styles.p}>|</p>
                <img src="src\\img\\down.png" alt="icon-down" />
              </span>
            </button>
          </TooltipRight>
          {showNewMenu && <NewMenu />}

          <a href="/issues">
            <IconButtonWithTipRight src="src\\img\\issues.png" tip="Issues" />
          </a>
          <a href="/pulls">
            <IconButtonWithTipRight
              src="src\\img\\pr.png"
              tip="Pull requests"
            />
          </a>
          <div className={styles.notification}>
            <a href="/notifications">
              <IconButtonWithTipLeft
                src="src\\img\\notification.png"
                tip={
                  notifications.length > 0
                    ? "You have unread notifications"
                    : "You have no unread notifications"
                }
              />
            </a>
            {notifications.length > 0 && <div className={styles.pesudo}></div>}
          </div>

          <Avatar handleClickAvatar={handleClickAvatar} />
          {showSelfMenu && (
            <>
              <Menu handleClickAvatar={handleClickAvatar} />
              {/* <Curtain /> */}
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
