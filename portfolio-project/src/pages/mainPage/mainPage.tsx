import React, { useEffect, useState } from 'react';
import photo from '/images/photo.png';
import './mainPage.css';

const MainPage: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const vheight: number = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const vwidth: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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
    <div className="main-page">
      <p
        className="main-page-name"
        style={{
          transform: `translate(${vwidth > 900 ? offset : 0}px,${vwidth > 600 ? 0 : -2 * offset}px)`
        }}
      >
        Bryan Noel Salindeho
      </p>
      <img
        src={photo}
        alt="foto"
        className="main-page-image"
        style={{
          transform: `translate(0,${offset < 1.45 * vheight ? 3 * offset : 0}px)`,
        }}
      />
    </div>
  );
};

export default MainPage;
