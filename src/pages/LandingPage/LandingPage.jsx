import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Quote } from "../../components/Quote/Quote";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Quote>
        <span className="blue-font">Affordable</span> Websites for{" "}
        <span className="blue-font">New</span> and{" "}
        <span className="blue-font">Upcoming</span> Businesses
      </Quote>
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
