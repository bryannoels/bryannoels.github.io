import { useEffect, useState } from 'react';
import { projects } from '../constants';
import './projects.css';

interface Project {
  url: string;
  image: string;
  title: string;
}

interface ProjectItem {
  component: Project[];
}

export default function Projects() {
  const [offset, setOffset] = useState<number>(0);
  const vheight: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={offset >= 1.45 * vheight ? 'scroll projects-page' : 'noscroll projects-page'}>
        <div className="projects-page-box">
          <p className="projects-page-title">Projects</p>
          <div className="projects-grid">
            {projects.map((item: ProjectItem, index: number) => (
              item.component.map((project: Project, projectIndex: number) => (
                <div className="project-card" key={`${index}-${projectIndex}`}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card-image"
                    />
                  </a>
                  <div className="project-card-description">
                    <a
                      href={project.url}
                      className="project-card-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
