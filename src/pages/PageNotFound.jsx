import styles from "./PageNotFound.module.css";
import Header from "../components/header/Header";
// import TodoList from "../components/sidebar/TodoList";
function PageNotFound() {
  return (
    <>
      <Header />
      <img src="src\img\404\0.jpg" className={styles.bg} />{" "}
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img
            src="src\img\404\1.png"
            className={styles.img1}
            alt="This is not the web page you are looking for"
          />
          <img src="src\img\404\2.png" className={styles.img2} />
          <img src="src\img\404\3.png" className={styles.img3} />
          <img src="src\img\404\4.png" className={styles.img4} />
          <img src="src\img\404\5.png" className={styles.img5} />
          <img src="src\img\404\6.png" className={styles.img6} />
          <img src="src\img\404\7.png" className={styles.img7} />
        </div>
      </div>
      {/* <TodoList /> */}
    </>
  );
}

export default PageNotFound;
