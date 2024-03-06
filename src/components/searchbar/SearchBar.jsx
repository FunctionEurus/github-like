/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Curtain from "../sidebar/Curtain";
import styles from "./SearchBar.module.css";
function SearchBar({ handleClickSearch }) {
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        handleClickSearch();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClickSearch]);

  return (
    <>
      <div className={styles.searchbar} ref={searchBarRef}>
        <div className={styles.suggestions}>
          <div className={styles.query}>
            <input className={styles.input} type="text" autoFocus></input>
          </div>
        </div>
      </div>{" "}
      <Curtain />
      <Curtain />
      <Curtain />
    </>
  );
}

export default SearchBar;
