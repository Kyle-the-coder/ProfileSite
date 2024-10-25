function ProjectPage() {
  return (
    <div className="project-main-container">
      <div className="project-list-container"></div>
      <div className="project-display-container"></div>
    </div>
  );
}

export const projectRoute = {
  element: <ProjectPage />,
};
