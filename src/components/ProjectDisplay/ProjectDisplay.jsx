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

      <div className="project-details-section">
        <div className="project-vid-exp">
          <video src={video} autoPlay controls />
          <div className="project-vid-details">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
        </div>
        <div className="project-vid-exp">
          <div className="project-vid-details">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
          <video src={video} autoPlay controls />
        </div>
      </div>
    </div>
  );
}
