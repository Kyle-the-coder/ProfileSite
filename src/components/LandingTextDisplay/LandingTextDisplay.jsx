import { useNavigate } from "react-router-dom";
import "./landingtextdisplay.css";

export default function LandingTextDisplay() {
  const navigate = useNavigate();
  return (
    <div className="landing-text-display-main-container">
      <h1 className="font1">Web Projects</h1>
    </div>
  );
}
