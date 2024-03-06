/* eslint-disable react/prop-types */
import styles from "./Dialog.module.css";
import IconButton from "../header/iconbutton/IconButton";
import Logo from "../header/Logo";
import SideBarElementIcon from "./sidebarelement/SideBarElementIcon";
import SideBarElementRepo from "./sidebarelement/SideBarElementRepo";
import IconButtonWithTipLeft from "../header/iconbutton/IconButtonWithTipLeft";
import Section from "./Section";
import CookieLabel from "./CookieLabel";
import Copyright from "./Copyright";
import { useEffect, useRef } from "react";

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

function Dialog({ handleClickClose }) {
  const DialogRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (DialogRef.current && !DialogRef.current.contains(event.target)) {
        handleClickClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClickClose]);

  return (
    <>
      <dialog open className={styles.dialog} ref={DialogRef}>
        <div className={styles.first_row}>
          <Logo />
          <IconButton src="src\img\close.png" onclick={handleClickClose} />
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
          <div className={styles.footer_container}>
            <Copyright />
            <div className={styles.links}>
              {links.map((link) => (
                <a href="#" className={styles.a} key={link}>
                  {link}
                </a>
              ))}
            </div>
            <CookieLabel>Do not share my personal information</CookieLabel>
            <CookieLabel> Manage cookie preferences</CookieLabel>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Dialog;
