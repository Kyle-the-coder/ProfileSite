import { useState } from "react";
import "./projectpage.css";

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
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  console.log(projectIndex);

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
          {projectDisplayList.filter((i, index) => index === projectIndex)}
        </div>
      </div>
    </div>
  );
}

export const projectRoute = {
  element: <ProjectPage />,
};
