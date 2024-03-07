import styles from "./NewMenu.module.css";
import NewMenuElement from "./NewMenuElement";
function NewMenu() {
  return (
    <ul className={styles.ul}>
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
