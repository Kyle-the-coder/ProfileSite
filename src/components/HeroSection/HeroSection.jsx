import { Button } from "../Button/Button";
import herobg from "../../assets/herobg.jpg";
import "./herosection.css";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-main-container">
      <div className="silhoutte"></div>
      <img src={herobg} className="hero-bg-img" />
      <h1>Organic Online Growth</h1>
      <Button
        nav="/projects"
        padding="15px 25px 15px 25px"
        buttonName={"See Projects"}
        size="1.5rem"
      />
    </div>
  );
}
