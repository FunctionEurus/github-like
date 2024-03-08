/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import IconButton from "../header/iconbutton/IconButton";
import Section from "../sidebar/Section";
import SideBarElementIcon from "../sidebar/sidebarelement/SideBarElementIcon";
import styles from "./Menu.module.css";
import Avatar from "../header/Avatar";
import Curtain from "../sidebar/Curtain";

// const icons = [
//   ["home", "issues", "pr", "projects", "discussions", "codespaces"],
//   ["explore", "marketplace"],
// ];
// const paths = [
//   "dashboard",
//   "issues",
//   "pulls",
//   "projects",
//   "discussions",
//   "codespaces",
//   "explore",
//   "marketplace",
// ];
const content = [
  ["Set status"],
  ["Your profile", "Add account"],
  [
    "Your repositories",
    "Your projects",
    "Your copilot",
    "Your organizations",
    "Your enterprises",
    "Your stars",
    "Your sponsors",
    "Your gists",
  ],
  ["Upgrade", "Try Enterprise", "Feature preview", "Settings"],
  ["GitHub Docs", "GitHub Support"],
];

function Menu({ handleClickAvatar }) {
  const DialogRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (DialogRef.current && !DialogRef.current.contains(event.target)) {
        handleClickAvatar();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClickAvatar]);

  return (
    <>
      <dialog open className={styles.dialog} ref={DialogRef}>
        <div className={styles.first_row}>
          <div className={styles.avatar_and_name}>
            <Avatar />
            <div className={styles.name}>
              <span className={styles.username}>Function Eurus</span>
              <span className={styles.span}>FUNction</span>
            </div>
          </div>
          <IconButton src="src\img\close.png" onclick={handleClickAvatar} />
        </div>
        <div className={styles.scroll}>
          {content.map((el) => (
            <Section border={true} key={el}>
              <ul>
                {el.map((el) => (
                  <SideBarElementIcon text={el} key={el} iconname="search" />
                ))}
              </ul>
            </Section>
          ))}
          <Section>
            <button className={styles.more}>
              <span className={styles.comment}>Sign out</span>
            </button>
          </Section>
        </div>
      </dialog>
      <Curtain />
      <Curtain />
      <Curtain />
    </>
  );
}

export default Menu;
