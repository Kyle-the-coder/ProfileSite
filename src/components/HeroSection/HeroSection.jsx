import { Button } from "../Button/Button";

export function HeroSection() {
  return (
    <div className="hero-main-container">
      <div className="silhoutte"></div>
      <img src={spiderweb} className="hero-bg-img" />
      <h1>Building Websites and Online Businesses</h1>
      <Button
        padding="10px 15px 10px 15px"
        buttonName={"See Projects"}
        size="1.5rem"
      />
    </div>
  );
}
