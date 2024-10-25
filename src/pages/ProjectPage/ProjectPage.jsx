import { useState } from "react";
import "./projectpage.css";
import { useEffect } from "react";
import gsap from "gsap";
import jewel from "../../assets/jewelvid.mp4";
import pt from "../../assets//ptvid.mp4";
import { ProjectDisplay } from "../../components/ProjectDisplay/ProjectDisplay";

function ProjectPage() {
  const [projectIndex, setProjectIndex] = useState(0);

  const projectNameList = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  const projectDisplayList = [
    <ProjectDisplay video={jewel} title={"Jewelry Store"} />,
    <ProjectDisplay video={pt} title={"Physical Therapist"} />,
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  useEffect(() => {
    gsap.fromTo(
      ".project-container",
      { x: "-2%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power3.inOut" }
    );
  }, [projectIndex]);

  return (
    <div className="project-main-container">
      <div className="project-list-container">
        {projectNameList.map((item, index) => {
          return (
            <h1 key={item} onClick={() => setProjectIndex(index)}>
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
