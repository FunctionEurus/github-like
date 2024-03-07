/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Curtain from "../sidebar/Curtain";
import styles from "./SearchInput.module.css";
import SearchElement from "./SearchElement";

const owners = [
  "Nelson Snyder",
  "Larissa Lloyd",
  "Rhiannon Lozano",
  "Kade Peterson",
  "Jack Velez",
];

function SearchInput({ handleClickSearch }) {
  const searchInputRef = useRef(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
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
      <div className={styles.searchbar} ref={searchInputRef}>
        <div className={styles.suggestions}>
          <div className={styles.query}>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                autoFocus
              ></input>
              {query && (
                <button
                  className={styles.clear_button}
                  onClick={() => setQuery("")}
                >
                  <img src="src\img\clear.png" />
                </button>
              )}
            </form>
            <div className={styles.owners_and_repos}>
              <div className={styles.section}>
                <h3 className={styles.h3}>Owners</h3>
                {owners.map((owner) => (
                  <SearchElement name={owner} key={owner} />
                ))}
              </div>
              <div className={styles.section}>
                <h3 className={styles.h3}>Repositories</h3>
                {owners.map((owner) => (
                  <SearchElement name={owner} key={owner} />
                ))}
              </div>
            </div>
            <div className={styles.footer}>
              <a href="#" className={styles.a}>
                Search syntax tips
              </a>
              <span className={styles.span}>Give feedback</span>
            </div>
          </div>
        </div>
      </div>{" "}
      <Curtain />
      <Curtain />
      <Curtain />
    </>
  );
}

export default SearchInput;
