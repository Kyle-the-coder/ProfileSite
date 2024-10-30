import { useNavigate } from "react-router-dom";
import "./landingtextdisplay.css";

export default function LandingTextDisplay() {
  const navigate = useNavigate();
  return (
    <div className="landing-text-display-main-container">
      <h1 className="font1 f2">
        A <span className="font-gold">G</span>ift of a{" "}
        <span className="font-green">M</span>oment
      </h1>
      <p className="f-8 font2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
        Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu sem
        fringilla euismod at at tortor. Nullam nec urna in arcu tristique
        facilisis. Sed fringilla velit at turpis aliquam, nec vestibulum libero
        ullamcorper.
      </p>
      <button className="form-button" onClick={() => navigate("/jewelry")}>
        See Jewelry
      </button>
    </div>
  );
}
