import "./projectdisplay.css";
export function ProjectDisplay({ video, title, desc }) {
  return (
    <div className="project-comp-main-container">
      <div className="project-vid-details">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="project-vid">
        <video src={video} controls />
      </div>
    </div>
  );
}
