/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Logo from "../header/Logo";
import IconButton from "../header/iconbutton/IconButton";
import IconButtonWithTipLeft from "../header/iconbutton/IconButtonWithTipLeft";
import Copyright from "../sidebar/Copyright";
import Section from "../sidebar/Section";
import SideBarElementRepo from "../sidebar/sidebarelement/SideBarElementRepo";
import SideBarElementIcon from "../sidebar/sidebarelement/SideBarElementIcon";
import CookieLabel from "../sidebar/CookieLabel";
import styles from "./Menu.module.css";
import Avatar from "../header/Avatar";

const icons = [
  ["home", "issues", "pr", "projects", "discussions", "codespaces"],
  ["explore", "marketplace"],
];
const paths = [
  "dashboard",
  "issues",
  "pulls",
  "projects",
  "discussions",
  "codespaces",
  "explore",
  "marketplace",
];
const links = ["about", "blog", "terms", "privacy", "security", "status"];
const repos = [
  "FunctionEurus/CS142 Projects",
  "FunctionEurus/Re-MSHD",
  "FunctionEurus/FunctionEurus",
  "FunctionEurus/Re-MSHD vue",
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
          <div className={styles.container}>
            <Avatar />
            <span className={styles.span}>Function Eurus</span>
            <span className={styles.span}>FUNction</span>
          </div>
          <IconButton src="src\img\close.png" onclick={handleClickAvatar} />
        </div>
        <div className={styles.scroll}>
          {icons.map((icons) => (
            <Section border={true} key={icons}>
              <ul>
                {icons.map((icon, index) => (
                  <SideBarElementIcon
                    iconname={icon}
                    key={icon}
                    path={paths[index]}
                  />
                ))}
              </ul>
            </Section>
          ))}
          <div className={styles.repositories}>
            <div className={styles.container}>
              <span className={styles.comment}>Repositories</span>
            </div>
            <IconButtonWithTipLeft
              src="src\img\search.png"
              tip="Filter repositories"
            />
          </div>
          <Section>
            <ul>
              {repos.map((repo) => (
                <SideBarElementRepo reponame={repo} key={repo} />
              ))}
            </ul>
            <button className={styles.more}>
              <span className={styles.comment}>Show more</span>
            </button>
          </Section>
        </div>
      </dialog>
    </>
  );
}

export default Menu;
