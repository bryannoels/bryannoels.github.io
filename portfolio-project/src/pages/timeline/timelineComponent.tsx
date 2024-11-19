import React, { useEffect, useState } from 'react';
import './timeline.css';

interface TimelineComponentProps {
  component: {
    component: {
      title: string;
      title2: string;
      date: string;
      details: string[];
      offset: number;
    }[];
  };
}

const TimelineComponent: React.FC<TimelineComponentProps> = (props) => {
  const [offset, setOffset] = useState<number>(0);
  const vheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const vwidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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

  return (
    <div className="timeline-page-component">
      {props.component.component.map((key, index) => (
        <div className={offset >= key.offset * vheight ? 'scroll' : 'noscroll'} key={index}>
          <div className="timeline-page-component-header">
            <p className="timeline-page-component-header-title">
              {vwidth > 900 ? key.title : key.title2}
            </p>
            <p className="timeline-page-component-header-date">{key.date}</p>
          </div>
          <ul className="timeline-page-component-details">
            {key.details.map((text, id) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
