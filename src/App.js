import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Router from "./router/router";
import "./styles/style.scss";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/register" && pathname !== "/login" && <Navbar />}
      <Router />
    </>
  );
}

export default App;
