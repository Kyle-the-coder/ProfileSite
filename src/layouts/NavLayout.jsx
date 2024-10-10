import { Outlet, useLocation, useNavigation } from "react-router-dom";
import "../styles/main.css";
import { Navbar } from "../components/Navbar/Navbar";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
      <Navbar />
      {state === "loading" ? (
        "loading..."
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
