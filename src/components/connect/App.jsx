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
      Let's Connect
      </div>
      <div className="connect_buttons">
        <a className="linkedin_button" href = "https://www.linkedin.com/in/bryannoelsalindeho/" target = "_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="email_button" href = "mailto:BSALINDE001@e.ntu.edu.sg" target = "_blank" rel="noreferrer">
          Email
        </a>
        <a className="github_button" href = "https://github.com/bryannoels" target = "_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </div>
  );
}

export default Connect;
