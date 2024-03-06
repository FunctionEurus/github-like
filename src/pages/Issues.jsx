import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";

function Issues() {
  let location = useLocation();
  //   console.log(location);
  return (
    <>
      <Header
        title={
          location.pathname.slice(1).charAt(0).toUpperCase() +
          location.pathname.slice(1).slice(1)
        }
      />
      <div>This is issues page</div>
    </>
  );
}

export default Issues;
