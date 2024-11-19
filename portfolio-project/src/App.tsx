import React from 'react';
import MainPage from './pages/mainPage/mainPage';
import Timeline from './pages/timeline/timeline';
import TimelinePhone from './pages/timeline/timelinePhone';
import Projects from './pages/projects/projects';
import ProjectsPhone from './pages/projects/projectsPhone';
import Connect from './pages/connect/connect';
import Footer from './pages/footer/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

const App: React.FC = () => {
  const vwidth: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  return (
    <div className="App">
      <MainPage />
      {vwidth > 900 ? <Timeline /> : <TimelinePhone />}
      {vwidth > 900 ? <Projects /> : <ProjectsPhone />}
      <Connect />
      <Footer /> 
    </div>
  );
}

export default App;
