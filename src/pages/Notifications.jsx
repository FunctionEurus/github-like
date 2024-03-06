import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";

function Notifications() {
  let location = useLocation();
  return (
    <>
      <Header
        title={
          location.pathname.slice(1).charAt(0).toUpperCase() +
          location.pathname.slice(1).slice(1)
        }
      />
      <div>This is notifications page</div>
    </>
  );
}

export default Notifications;
