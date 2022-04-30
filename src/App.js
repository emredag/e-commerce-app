import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import Router from "./router/router";
import "./styles/style.scss";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <AuthProvider>
        {pathname !== "/register" && pathname !== "/login" && <Navbar />}
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
