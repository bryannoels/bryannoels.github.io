import React, { useEffect, useState } from 'react';
import './footer.css';

const Footer: React.FC = () => {
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
    <div className={offset >= (vwidth > 900 ? 3.1 : 1.68) * vheight ? 'scroll footer-page' : 'noscroll footer-page'}>
      <p>&#169; Bryan Noel Salindeho 2024</p>
    </div>
  );
};

export default Footer;
