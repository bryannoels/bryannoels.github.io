import './App.css';
import { useEffect, useState } from 'react';
import { projectsArray } from './constants.js';

function ProjectsItem(item, setClose){
  const data = item.item;
  return(
    <div className ="projects_item">
      <div className="projects_item_x" onClick={() => item.setClose()}>
        ×
      </div>
      <div className="projects_item_content">
        <div className ="projects_item_left">
          <img src = {data.image} alt = {data.title} className ="projects_item_image"/>
        </div>
        <div className ="projects_item_right">
          <div className = "projects_item_headline">{data.headline}</div>
          <div className = "projects_item_type">{data.type}</div>
          <div className = "projects_item_duration">{data.duration}</div>
          <ul className = "projects_item_decription">
            {data.description.map(line=>(
              <li>{line}</li>
            ))}
          </ul>
          { data.url ?
            (
              <div className="projects_item_middle">
              <a href={data.url} target="_blank" rel="noreferrer" className = "projects_item_link">
                See project
              </a>
            </div>
            ) : null
          }
          <div className="projects_item_bottom">
            <div className = "projects_item_close" onClick = {() => item.setClose()}>Close</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  let currentX = 0;
  const [card,setCard] = useState(0);
  const [current, setCurrent] = useState(0);

  const setOpen = (id) =>{
      setCurrent(id);
      setCard(1);
  };

  const setClose = () =>{
    setCard(0);
};

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
            <div className = "project_box" key = {project.id} style={{ backgroundColor: id % 3 === 0 ? "#B2D7DC" : id % 3 === 1 ? "#F3B03D" : "#F19D9B" }} onClick={() => setOpen(id)}>
              <img className = "project_image" src = {project.image} alt={project.name}/>
              <div className = "project_title">{project.title}</div>
              <div className = "project_type">{project.type}</div>
              <div className = "project_duration">{project.duration}</div>
            </div>
        ))}
      </div>
      {
        card ?
        <ProjectsItem item = {projectsArray[current]} setClose = {setClose} />
        : null
      }
    </div>
  );
}

export default Projects;
