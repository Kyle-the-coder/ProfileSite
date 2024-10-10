import { Outlet, useLocation, useNavigation } from "react-router-dom";
import "../styles/main.css";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
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
