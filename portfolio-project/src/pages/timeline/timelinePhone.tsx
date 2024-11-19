import React, { useEffect, useState } from 'react';
import { timeLine } from '../constants';
import TimelineComponent from './timelineComponent';
import workExperience from '/images/workExperience.png';
import education from '/images/education.png';
import leadership from '/images/leadership.png';
import volunteerActivities from '/images/volunteerActivities.png';
import './timeline.css';

interface TimelineItem {
  id: string;
  title: string;
  offset: number;
  component: {
    title: string;
    title2: string;
    date: string;
    details: string[];
    offset: number;
  }[];
}

const TimelinePhone: React.FC = () => {
  const [current, setCurrent] = useState<TimelineItem>(timeLine[0]);
  const [offset, setOffset] = useState<number>(0);
  const vheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

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
    <div className="App">
      <div className="timeline-page">
        <header>
          <div className={offset >= (2 / 9) * vheight ? 'timeline-page-header-phone scroll' : 'timeline-page-header-phone noscroll'}>
            <p className="timeline-page-header-title-phone">{current.title}</p>
          </div>
        </header>
        <hr />
        <TimelineComponent component={current} />
        <div className={offset >= current.offset * vheight ? 'scroll' : 'noscroll'}>
          <img
            src={workExperience}
            alt="Work Experience"
            className={current.id === 'workExperience' ? 'timeline-page-header-logo-larger' : 'timeline-page-header-logo'}
            onClick={() => setCurrent(timeLine[0])}
          />
          <img
            src={education}
            alt="Education"
            className={current.id === 'education' ? 'timeline-page-header-logo-larger' : 'timeline-page-header-logo'}
            onClick={() => setCurrent(timeLine[1])}
          />
          <img
            src={leadership}
            alt="Leadership"
            className={current.id === 'leadership' ? 'timeline-page-header-logo-larger' : 'timeline-page-header-logo'}
            onClick={() => setCurrent(timeLine[2])}
          />
          <img
            src={volunteerActivities}
            alt="Volunteer Activities"
            className={current.id === 'volunteerActivities' ? 'timeline-page-header-logo-larger' : 'timeline-page-header-logo'}
            onClick={() => setCurrent(timeLine[3])}
          />
        </div>
      </div>
    </div>
  );
};

export default TimelinePhone;
