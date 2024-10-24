import { Button } from "../Button/Button";
import herobg from "../../assets/herobg.jpg";
import "./herosection.css";

export function HeroSection() {
  return (
    <div className="hero-main-container">
      <div className="silhoutte"></div>
      <img src={herobg} className="hero-bg-img" />
      <h1>Organic Online Growth</h1>
      <Button
        padding="15px 25px 15px 25px"
        buttonName={"See Projects"}
        size="1.5rem"
      />
    </div>
  );
}
