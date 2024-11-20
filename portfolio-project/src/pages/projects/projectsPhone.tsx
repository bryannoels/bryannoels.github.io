import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { projectsInPhone } from '../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projects.css';

interface Project {
  url: string;
  image: string;
  title: string;
}

const ProjectsPhone: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const vheight: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className={offset >= 1.2 * vheight ? 'scroll projects-page-phone' : 'noscroll projects-page-phone'}>
      <div className="projects-page-box-phone">
        <p className="projects-page-title-phone">Projects</p>
        <Slider {...slickSettings}>
          {projectsInPhone.map((project: Project, index: number) => (
            <div key={index}>
              <div className="project-cards-phone">
                <div className="project-card-phone">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title} className="project-card-image-phone" />
                  </a>
                  <div className="project-card-description-phone">
                    <a href={project.url} className="project-card-text-phone" target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsPhone;
