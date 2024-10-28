import "./projectdisplay.css";
export function ProjectDisplay({ video, title }) {
  return (
    <div className="project-comp-main-container">
      <div className="project-intro-section">
        <div className="project-comp-title-container">
          <h1 className="font1">{title}</h1>
        </div>
        <div className="project-comp-vid-container">
          <video src={video} autoPlay className="project-comp-vid" controls />
        </div>
      </div>
    </div>
  );
}
