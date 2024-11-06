import "./projectdisplay.css";
export function ProjectDisplay({ video, title }) {
  return (
    <div className="project-comp-main-container">
      <div className="project-vid-details">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </p>
      </div>
      <div className="project-vid">
        <video src={video} controls />
      </div>
    </div>
  );
}
