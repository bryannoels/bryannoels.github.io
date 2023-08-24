import './App.css';
import { useEffect } from 'react';
import {projectsArray} from './constants.js';

function Projects() {
  let currentX = 0;

  useEffect(() => {
    const projectsTrack = document.querySelector(".projects_track");
    const projectImages = document.querySelectorAll(".project_image");
    const projectsTrackWidth = projectsTrack.getBoundingClientRect().width+1.2*window.innerWidth;

    const handleWheel = (event) => {
      if (currentX >= 0 && currentX <= projectsTrackWidth)
        currentX = currentX + event.deltaX;
      else if (currentX > projectsTrackWidth)
        currentX = projectsTrackWidth;
      else
        currentX = 0;

      const objectPositionX = (currentX / projectsTrackWidth) * 100;

      projectImages.forEach((image) => {
        image.animate({
          objectPosition: `${objectPositionX}% center`
        }, { duration: 1200, fill: "forwards" });
      });

      console.log("ScrollX:", currentX);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className="projects">
      <div className="projects_track">
        { projectsArray.map((project,id)=>(
            <div className = "project_box" key = {project.id} style={{ backgroundColor: id % 3 === 0 ? "#B2D7DC" : id % 3 === 1 ? "#F3B03D" : "#F19D9B" }}>
              <img className = "project_image" src = {project.image} alt={project.name}/>
              <div className = "project_title">{project.title}</div>
              <div className = "project_type">{project.type}</div>
              <div className = "project_duration">{project.duration}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
