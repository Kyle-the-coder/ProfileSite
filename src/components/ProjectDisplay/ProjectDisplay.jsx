import "./projectdisplay.css";
export function ProjectDisplay({ video, title }) {
  return (
    <div className="project-comp-main-container">
      <div className="project-comp-title-container">
        <h1>{title}</h1>
      </div>
      <div className="project-comp-vid-container">
        <video src={video} className="project-comp-vid" autoPlay muted loop />
      </div>
    </div>
  );
}
