import React, { useEffect, useRef } from 'react';
import './App.css';

function Connect() {
  const letsConnectRef = useRef(null);

  useEffect(() => {
    const letsConnect = letsConnectRef.current;

    const handleScroll = () => {
      if (letsConnect) {
        const triggerPosition = document.documentElement.scrollHeight - window.innerHeight - 100;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= triggerPosition) {
          letsConnect.classList.add('animation-triggered');
        } else {
          letsConnect.classList.remove('animation-triggered');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="connect">
      <div className="lets_connect" ref={letsConnectRef} data-text="&nbsp;Let's Connect&nbsp;">
      &nbsp;Let's Connect&nbsp;
      </div>
      <div className="connect_buttons">
        <div className="linkedin_button" />
        <div className="email_button" />
        <div className="github_button" />
      </div>
    </div>
  );
}

export default Connect;
