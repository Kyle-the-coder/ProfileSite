import { useState } from "react";
import { useEffect } from "react";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";
import gsap from "gsap";
import jewel from "../../assets/jewelvid.mp4";
import pt from "../../assets/ptvid.mp4";
import applePie from "../../assets/applePieCafe.mp4";
import "./projectpage.css";
import LandingTextDisplay from "../../components/LandingTextDisplay/LandingTextDisplay";
import ImgGrid from "../../components/ImgGrid/ImgGrid";

function ProjectPage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const projectNameList = ["Retail", "Services", "Restuarants"];
  const [isFirstRender, setIsFirstRender] = useState(true);

  const projectDisplayList = [
    <ProjectDisplay video={jewel} title={"Retail"} />,
    <ProjectDisplay video={pt} title={"Services"} />,
    <ProjectDisplay video={applePie} title={"Restuarants"} />,
  ];

  useEffect(() => {
    gsap.fromTo(
      ".project-container",
      { x: "-2%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power3.inOut" }
    );
  }, [projectIndex]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="project-main-container">
      <div className="landing-img-display-container">
        <div className="bg-text-display">
          <div className="bg-text">
            <h1 className="font1">Web Projects</h1>
          </div>
          <div className="bg-color"></div>
        </div>
        <LandingTextDisplay />
        <ImgGrid setIsFirstRender={setIsFirstRender} />
      </div>

      <div className="project-quote-container">
        <h1 className="font1">
          Unlock new possibilities with a{" "}
          <span className="blue-font">Blue Collar Website</span> today
        </h1>
      </div>

      <div className="project-display-main-container">
        {/* DISPLAY CONTAINER */}
        <div className="project-container">
          <ProjectDisplay
            video={jewel}
            title={"Retail"}
            desc={"This is the description. Lorme ipsum"}
          />
        </div>

        <div className="project-container">
          <ProjectDisplay
            video={jewel}
            title={"Retail"}
            desc={"This is the description. Lorem Isum"}
          />
        </div>
        <div className="project-container">
          <ProjectDisplay
            video={jewel}
            title={"Retail"}
            desc={"This is the description. Lurem Island"}
          />
        </div>
      </div>
    </div>
  );
}

export const projectRoute = {
  element: <ProjectPage />,
};
