import "./projectpage.css";

function ProjectPage() {
  return (
    <div className="project-main-container">
      <div className="project-list-container">
        <h1>Project 1</h1>
        <h1>Project 2</h1>
        <h1>Project 3</h1>
        <h1>Project 4</h1>
        <h1>Project 5</h1>
      </div>
      <div className="project-display-container"></div>
    </div>
  );
}

export const projectRoute = {
  element: <ProjectPage />,
};
