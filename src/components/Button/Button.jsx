import { useNavigate } from "react-router-dom";
import "./button.css";

export function Button({ buttonName, size, margin, padding, nav }) {
  const navigate = useNavigate();
  return (
    /* From Uiverse.io by Codecite */
    <button
      onClick={() => {
        nav && navigate(nav);
      }}
      className="btn"
      style={{ fontSize: size, margin: margin, padding: padding }}
    >
      {buttonName}
    </button>
  );
}
