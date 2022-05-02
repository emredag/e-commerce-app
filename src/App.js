import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { OneProductProvider } from "./contexts/OneProductContext";
import { ProductProvider } from "./contexts/ProductContext";
import Router from "./router/router";
import "./styles/style.scss";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <AuthProvider>
        <OneProductProvider>
          <ProductProvider>
            {pathname !== "/register" && pathname !== "/login" && <Navbar />}
            <Router />
          </ProductProvider>
        </OneProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
