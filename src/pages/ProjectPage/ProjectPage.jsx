import "./projectpage.css";

function ProjectPage() {
  const projectList = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];
  return (
    <div className="project-main-container">
      <div className="project-list-container">
        {projectList.map((item, index) => {
          return <h1 key={item}>{item}</h1>;
        })}
      </div>
      <div className="project-display-container">
        <div className="project-container">
          <h1>This is a project </h1>
        </div>
      </div>
    </div>
  );
}

export const projectRoute = {
  element: <ProjectPage />,
};
