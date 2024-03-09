/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import styles from "./NewMenu.module.css";
import NewMenuElement from "./NewMenuElement";
function NewMenu({ handleClickNew }) {
  const NewMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (NewMenuRef.current && !NewMenuRef.current.contains(event.target)) {
        handleClickNew();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClickNew]);

  return (
    <ul className={styles.ul} ref={NewMenuRef}>
      <NewMenuElement imgsrc="src\img\repo.png" href="new">
        New repository
      </NewMenuElement>
      <NewMenuElement imgsrc="src\img\import.png" href="new/import">
        Import repository
      </NewMenuElement>
      <li className={styles.divider}></li>
      <NewMenuElement imgsrc="src\img\codespaces.png" href="codespace/new">
        New codespace
      </NewMenuElement>
      <NewMenuElement imgsrc="src\img\gist.png">New gist</NewMenuElement>
      <li className={styles.divider}></li>
      <NewMenuElement imgsrc="src\img\organization.png">
        New organization
      </NewMenuElement>
      <NewMenuElement imgsrc="src\img\projects.png">New project</NewMenuElement>
    </ul>
  );
}

export default NewMenu;
