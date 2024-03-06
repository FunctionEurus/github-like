import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Dialog from "../components/sidebar/Dialog";
import SearchBar from "../components/searchbar/SearchBar";
import Curtain from "../components/sidebar/Curtain";

function Index() {
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
      <Header
        handleClickMore={handleClickDialog}
        handleClickSearch={handleClickSearch}
      />
    </>
  );
}

export default Index;
