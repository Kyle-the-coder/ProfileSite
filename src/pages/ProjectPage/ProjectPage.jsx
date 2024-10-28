import { useState } from "react";
import { useEffect } from "react";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";
import gsap from "gsap";
import jewel from "../../assets/jewelvid.mp4";
import pt from "../../assets/ptvid.mp4";
import applePie from "../../assets/applePieCafe.mp4";
import "./projectpage.css";

function ProjectPage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const projectNameList = ["Retail", "Services", "Restuarants"];

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
      <div className="project-list-container">
        {projectNameList.map((item, index) => {
          return (
            <h1
              key={item}
              className={`item-list ${index === projectIndex && "hightlight"}`}
              onClick={() => setProjectIndex(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              {item}
            </h1>
          );
        })}
      </div>
      <div className="project-display-container">
        <div className="project-container">
          {projectDisplayList[projectIndex]}
        </div>
      </div>
    </div>
  );
}

export const projectRoute = {
  element: <ProjectPage />,
};
