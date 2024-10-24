import { HeroSection } from "../../components/HeroSection/HeroSection";

function LandingPage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
